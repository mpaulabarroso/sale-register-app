import { useEffect, useState } from 'react'
import { ContentView } from '@componets/ContentView'
import { Separator } from '@componets/Separator'
import { ItemsList } from '@componets/ItemsList'
import { ItemToShow } from '@componets/ItemToShow'
import { ItemText } from '../../components/ItemText'
import { useNavigation } from '@react-navigation/native'
import { getRenderHistory } from 'services/getSales'
import { HistoryMainButton } from './components/HistoryMainButton'
import { Icon } from '@componets/Icon'
import { ActivityIndicator, View } from 'react-native'
import { SaleLabel } from './types'
import { HistoryDeleteButton } from './components/HistoryDeleteButton'

export function SalesHistory() {
    const [history, setHistory] = useState<SaleLabel[]>([])
    const navigation = useNavigation()
    const [isLoading, setIsLoading] = useState(false)

    const DATE = new Date().toISOString().split('T')[0].split('-').reverse().join('/')

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getRenderHistory()
                .then((sales) => setHistory(sales))
                .catch(err => console.log(err)) // eslint-disable-line no-console
        })
        return unsubscribe
    }, [navigation])

    useEffect(() => {
        getRenderHistory()
            .then((sales) => setHistory(sales))
            .catch(err => console.log(err)) // eslint-disable-line no-console
    }, [isLoading])

    return (
        <ContentView>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Separator title={DATE} />
                <HistoryDeleteButton isLoading={isLoading} setIsLoading={setIsLoading} />
            </View>
            <View style={{ flex: 1 }}>
                {isLoading && <ActivityIndicator />}
                {!isLoading &&
                    <ItemsList
                        items={history}
                        itemToRender={({ item }) => (
                            <ItemToShow>
                                <ItemText txt={item.paymentName} />
                                <ItemText txt={item.total} />
                                <Icon name={item.isSync ? 'check' : 'sync'} />
                            </ItemToShow>
                        )}
                    />
                }
            </View>
            <HistoryMainButton isLoading={isLoading} setIsLoading={setIsLoading} />
        </ContentView>
    )
}