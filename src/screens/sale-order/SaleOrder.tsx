import { useContext } from 'react'
import { MainContext, TABS } from '@context/MainContext'
import { Separator } from '@componets/Separator'
import { Categories } from './components/Categories'
import { Payment } from './components/Payment'
import { SalesContextProvider } from './context/SalesContext'
import { SaleItemList } from './components/SaleItemList'
import { ContentView } from '@componets/ContentView'
import { SaleMainButton } from './components/SaleMainButton'

export function SaleOrder() {
    const { tab } = useContext(MainContext)

    if (tab !== TABS[0]) return null
    return (
        <SalesContextProvider>
            <ContentView>
                <Separator title='Seleccione categoría' />
                <Categories />
                <SaleItemList />
                <Separator title='Seleccione metodo de pago' />
                <Payment />
                <SaleMainButton />
            </ContentView>
        </SalesContextProvider>
    )
}