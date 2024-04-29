import * as SQLite from 'expo-sqlite'
import { db } from './dataBase'

export function addCategory(name: string, id: string) {
    return new Promise((resolve, reject) => {
        const queryAddCategory = (tx: SQLite.SQLTransaction) => {
            tx.executeSql(
                'INSERT INTO category (name, id) VALUES (?, ?)',
                [name, id],
                () => resolve({ id, name })
            )
        }

        return db.transaction(
            queryAddCategory,
            (error) => reject(error),
        )
    })
}