import * as SQLite from 'expo-sqlite'
import { db } from './dataBase'
import { SaleLabel } from '@screens/sales-history/types'

function getSales<T>(query: string) {
    return function (): Promise<T[]> {
        return new Promise((resolve, reject) => {
            const queryGetSales = (tx: SQLite.SQLTransaction) => {
                tx.executeSql(
                    query,
                    [],
                    (_, { rows }) => resolve(rows._array)
                )
            }

            return db.transaction(
                queryGetSales,
                (error) => reject(error)
            )
        })
    }
}

const renderHistoryQuery = `SELECT paymentName, total, is_sync AS isSync
FROM history`

export const getRenderHistory = getSales<SaleLabel>(renderHistoryQuery)

export interface SaleToSave {
    id: string
    paymentId: string
    items: string
}

const toSaveHistoryQuery = `SELECT id AS sqliteId, paymentId, items
FROM history WHERE is_sync = 0`

export const getToSaveHistory = getSales<SaleToSave>(toSaveHistoryQuery)
