import * as SQLite from 'expo-sqlite'
import { db } from './dataBase'
import { CategoryLabel } from '@screens/sale-order/components/Categories'

export function getCatagories(): Promise<CategoryLabel[]> {
    return new Promise((resolve, reject) => {
        const queryGetCategories = (tx: SQLite.SQLTransaction) => {
            tx.executeSql(
                'SELECT name, id FROM category',
                [],
                (_, { rows }) => resolve(rows._array)
            )
        }

        return db.transaction(
            queryGetCategories,
            (error) => reject(error)
        )
    })
}



