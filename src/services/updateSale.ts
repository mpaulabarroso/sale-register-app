import * as SQLite from 'expo-sqlite'
import { db } from './dataBase'

const saleQuery = `UPDATE history
SET is_sync = 1
WHERE id = ?`

export function updateSale(id: number) {
    return new Promise((resolve, reject) => {
        const queryUpdateSale = (tx: SQLite.SQLTransaction) => {
            tx.executeSql(
                saleQuery,
                [id],
                () => resolve(undefined)
            )
        }

        return db.transaction(
            queryUpdateSale,
            (error) => reject(error),
        )
    })
}