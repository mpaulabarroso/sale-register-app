import { ContentView } from '@componets/ContentView'
import { Text } from 'react-native'
import { AddCategories } from './components/AddCategories'
import { AddPayment } from './components/AddPayment'
import { SyncSales } from './components/SyncSales'


export function Settings() {
    return (
        <ContentView>
            <AddCategories />
            <AddPayment />
            <SyncSales />
            <Text>esto es la configuracion</Text>
        </ContentView>
    )
}