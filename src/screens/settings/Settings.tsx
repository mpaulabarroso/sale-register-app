import { ContentView } from '@componets/ContentView'
import { AddCategories } from './components/AddCategories'
import { AddPayment } from './components/AddPayment'
import { SyncSales } from './components/SyncSales'

export function Settings() {
    return (
        <ContentView>
            <AddCategories />
            <AddPayment />
            <SyncSales />
        </ContentView>
    )
}