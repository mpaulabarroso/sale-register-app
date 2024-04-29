import * as SQLite from 'expo-sqlite'
import { db } from './dataBase'

export function dropTables(table: string) {
    return new Promise((resolve, reject) => {
        const queryDeleteTable = (tx: SQLite.SQLTransaction) => {
            tx.executeSql(
                `DELETE FROM ${table}`,
                [],
                () => resolve(undefined)
            )
        }

        return db.transaction(
            queryDeleteTable,
            (error) => reject(error)
        )
    })
}