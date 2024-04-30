import { ContentView } from '@componets/ContentView'
import { ItemText } from '@componets/ItemText'
import { ItemToShow } from '@componets/ItemToShow'
import { ItemsList } from '@componets/ItemsList'
import { Separator } from '@componets/Separator'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { Report } from './types'

export function PaymentReport() {
    const [report, setReport] = useState<Report>({ fromTo: '', items: [] })
    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            fetch(process.env.EXPO_PUBLIC_API_URL + '/report/payment')
                .then(res => res.json())
                .then(data => setReport(data))
                .catch(e => console.log(e)) // eslint-disable-line no-console 
        })
        return unsubscribe
    }, [navigation])

    return (
        <ContentView>
            <Separator title={report.fromTo} />
            <ItemsList
                items={report.items}
                itemToRender={({ item }) => (
                    <ItemToShow>
                        <ItemText txt={item.name} />
                        <ItemText txt={item.total} />
                    </ItemToShow>
                )}
            />
        </ContentView>
    )
}