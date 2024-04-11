import { useEffect, useState } from 'react'
import { ContentView } from '@componets/ContentView'
import { Separator } from '@componets/Separator'
import { ItemsList } from '@componets/ItemsList'
import { ItemToShow } from '@componets/ItemToShow'
import { HistoryItemText } from './components/HistoryItemText'
import { getAll } from 'services/dataBase'
import { useNavigation } from '@react-navigation/native'

export interface SaleType {
    items: string
    payment: string
    total: string
}

export type SetHistoryType = React.Dispatch<React.SetStateAction<SaleType[]>>

export function SalesHistory() {
    const [history, setHistory] = useState<SaleType[]>([])
    const navigation = useNavigation()

    const DATE = new Date().toISOString().split('T')[0].split('-').reverse().join('/')

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getAll(setHistory)
        })
        return unsubscribe
    }, [navigation])

    return (
        <ContentView>
            <Separator title={DATE} />
            <ItemsList
                items={history}
                itemToRender={({ item }) => (
                    <ItemToShow>
                        <HistoryItemText txt={item.payment} />
                        <HistoryItemText txt={item.total} />
                    </ItemToShow>
                )}
            />
        </ContentView>
    )
}