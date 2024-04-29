import { useEffect, useState } from 'react'
import { ContentView } from '@componets/ContentView'
import { Separator } from '@componets/Separator'
import { ItemsList } from '@componets/ItemsList'
import { ItemToShow } from '@componets/ItemToShow'
import { HistoryItemText } from './components/HistoryItemText'
import { useNavigation } from '@react-navigation/native'
import { getSales } from 'services/getSales'

export interface SaleLabel {
    paymentName: string
    total: string
}

export type SetHistoryType = React.Dispatch<React.SetStateAction<SaleLabel[]>>

export function SalesHistory() {
    const [history, setHistory] = useState<SaleLabel[]>([])
    const navigation = useNavigation()

    const DATE = new Date().toISOString().split('T')[0].split('-').reverse().join('/')

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getSales()
                .then(sales => setHistory(sales))
                .catch(err => console.log(err)) // eslint-disable-line no-console
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
                        <HistoryItemText txt={item.paymentName} />
                        <HistoryItemText txt={item.total} />
                    </ItemToShow>
                )}
            />
        </ContentView>
    )
}