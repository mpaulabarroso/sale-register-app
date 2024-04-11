import { Container } from '@componets/Container'
import { Header } from '@componets/Header'
import { SaleOrder } from '@screens/sale-order/SaleOrder'
import { SalesHistory } from '@screens/sales-history/SalesHistory'
import { MainProvider } from '@context/MainContext'
import { useEffect } from 'react'
import { createDataBase } from 'services/dataBase'

export default function App() {
    useEffect(() => (createDataBase()), [])

    return (
        <MainProvider>
            <Container>
                <Header />
                <SaleOrder />
                <SalesHistory />
            </Container>
        </MainProvider>
    )
}
