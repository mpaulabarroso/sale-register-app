import * as SQLite from 'expo-sqlite'
import { db } from './dataBase'

export function addPayment(name: string, id: string) {
    return new Promise((resolve, reject) => {
        const queryAddPayment = (tx: SQLite.SQLTransaction) => {
            tx.executeSql(
                'INSERT INTO payment (name, id) VALUES (?, ?)',
                [name, id],
                () => resolve({ id, name })
            )
        }

        return db.transaction(
            queryAddPayment,
            (error) => reject(error),
        )
    })
}

