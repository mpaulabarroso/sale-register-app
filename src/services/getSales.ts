import * as SQLite from 'expo-sqlite'
import { db } from './dataBase'
import { SaleLabel } from '@screens/sales-history/SalesHistory'

export function getSales(): Promise<SaleLabel[]> {
    return new Promise((resolve, reject) => {
        const queryGetSales = (tx: SQLite.SQLTransaction) => {
            tx.executeSql(
                'SELECT paymentName, total FROM history',
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