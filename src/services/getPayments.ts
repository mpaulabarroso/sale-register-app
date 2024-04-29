import * as SQLite from 'expo-sqlite'
import { db } from './dataBase'
import { PaymentLabel } from '@screens/sale-order/context/SalesContext'

export function getPayments(): Promise<PaymentLabel[]> {
    return new Promise((resolve, reject) => {
        const queryGetPayments = (tx: SQLite.SQLTransaction) => {
            tx.executeSql(
                'SELECT name, id FROM payment',
                [],
                (_, { rows }) => resolve(rows._array)
            )
        }

        return db.transaction(
            queryGetPayments,
            (error) => reject(error)
        )
    })
}