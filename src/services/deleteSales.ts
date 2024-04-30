import * as SQLite from 'expo-sqlite'
import { db } from './dataBase'

const saleQuery = `DELETE FROM history
WHERE is_sync = 1`

export function deleteSales() {
    return new Promise((resolve, reject) => {
        const query = (tx: SQLite.SQLTransaction) => {
            tx.executeSql(
                saleQuery,
                [],
                () => resolve(undefined)
            )
        }

        return db.transaction(
            query,
            (error) => reject(error),
        )
    })
}