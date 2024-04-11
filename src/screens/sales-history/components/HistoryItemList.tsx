import { ItemToShow } from '@componets/ItemToShow'
import { ItemsList } from '@componets/ItemsList'
import { HistoryItemText } from './HistoryItemText'
import { useContext, useEffect } from 'react'
import { getAll } from 'services/dataBase'
import { HistoryContext } from '../context/HistoryContext'

export function HistoryItemList() {
    const { history, setHistory } = useContext(HistoryContext)

    useEffect(() => (getAll(setHistory)), [])

    return (
        <ItemsList
            items={history}
            itemToRender={({ item }) => (
                <ItemToShow>
                    <HistoryItemText txt={item.payment} />
                    <HistoryItemText txt={item.total} />
                </ItemToShow>
            )}
        />
    )
}