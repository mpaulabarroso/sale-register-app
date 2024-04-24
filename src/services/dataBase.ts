import { SetCategoryType } from '@screens/sale-order/components/Categories'
import { SetPaymentsType } from '@screens/sale-order/components/Payment'
import { SaleType, SetHistoryType } from '@screens/sales-history/SalesHistory'
import * as SQLite from 'expo-sqlite'
import { Platform } from 'react-native'

function openDatabase() {
    if (Platform.OS === 'web') {
        return {
            transaction: () => {
                return {
                    executeSql: () => { },
                }
            }
        }
    }

    const db = SQLite.openDatabase('db.db')
    return db
}

const db = openDatabase()

export function createDataBase() {
    db.transaction((tx) => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS history (payment text, items text, total text);'
        )
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS category (name text);'
        )
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS payment (name text);'
        )
    })
}

export function addSale(sale: SaleType) {
    db.transaction(
        (tx) => {
            tx.executeSql('insert into history (payment, items, total) values (?, ?, ?)', [sale.payment, sale.items, sale.total])
        },
    )
}

export function getAll(cb: SetHistoryType) {
    db.transaction(
        (tx) => {
            tx.executeSql('select payment, total from history', [], (_, { rows }) =>
                cb(rows._array)
            )
        },
    )
}

export function dropItems(table: string) {
    db.transaction(
        (tx) => {
            tx.executeSql(`delete from ${table}`)
        },
    )
}

export function getCatagories(cb: SetCategoryType) {
    db.transaction(
        (tx) => {
            tx.executeSql('select name from category', [], (_, { rows }) =>
                cb(rows._array)
            )
        },
    )
}

export function getPayment(cb: SetPaymentsType) {
    db.transaction(
        (tx) => {
            tx.executeSql('select name from payment', [], (_, { rows }) => {
                cb(rows._array)
            }
            )
        },
    )
}

export function addCategory(name: string) {
    db.transaction(
        (tx) => {
            tx.executeSql('insert into category (name) values (?)', [name])
        },
    )
}

export function addPayment(name: string) {
    db.transaction(
        (tx) => {
            tx.executeSql('insert into payment (name) values (?)', [name])
        },
    )
}