import * as SQLite from 'expo-sqlite'
import { db } from './dataBase'

function createTable(query: string) {
    return function () {
        return new Promise((resolve, reject) => {
            return db.transaction(
                (tx: SQLite.SQLTransaction) => {
                    tx.executeSql(query)
                    resolve(undefined)
                },
                (error) => reject(error)
            )
        })
    }
}

const categoryQuery = `CREATE TABLE IF NOT EXISTS category (
    name text,
    id text
)`

export const createCategoryTable = createTable(categoryQuery)

const paymentQuery = `CREATE TABLE IF NOT EXISTS payment (
    name text,
    id text
)`

export const createPaymenTable = createTable(paymentQuery)

const historyQuery = `CREATE TABLE IF NOT EXISTS history (
    id integer primary key autoincrement,
    paymentName text,
    paymentId text,
    items text,
    total text,
    is_sync integer
)`

export const createHistoryTable = createTable(historyQuery)