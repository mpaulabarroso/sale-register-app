import * as SQLite from 'expo-sqlite'
import { db } from './dataBase'
import { SaleItem } from '@screens/sale-order/components/SaleMainButton'

const saleQuery = `INSERT INTO history (
    paymentName,
    paymentId,
    items,
    total,
    is_sync
) VALUES (?, ?, ?, ?, ?)`

export function addSale({ payment, items, total }: SaleItem) {
    return new Promise((resolve, reject) => {
        const queryAddSale = (tx: SQLite.SQLTransaction) => {
            tx.executeSql(
                saleQuery,
                [payment.name, payment.id, JSON.stringify(items), total, 0],
                () => resolve(undefined)
            )
        }

        return db.transaction(
            queryAddSale,
            (error) => reject(error),
        )
    })
}