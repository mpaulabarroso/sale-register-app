import { ContentView } from '@componets/ContentView'
import { Text } from 'react-native'
import { AddCategories } from './components/AddCategories'
import { AddPayment } from './components/AddPayment'


export function Settings() {
    return (
        <ContentView>
            <AddCategories />
            <AddPayment />
            <Text>esto es la configuracion</Text>
        </ContentView>
    )
}