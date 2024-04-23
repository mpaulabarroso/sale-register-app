import { ItemsScroll } from '@componets/ItemsScroll'
import { useContext } from 'react'
import { SalesContext } from '../context/SalesContext'
import { SaleOrderButton } from './sale-oreder-button/SaleOrderButton'

const METODOS = ['Efectivo', 'Tarjeta', 'Tranferencia', 'Billetera', 'Otros']

export function Payment() {
    const { payment, setPayment } = useContext(SalesContext)

    return (
        <ItemsScroll>
            {
                METODOS.map((pay) => (
                    <SaleOrderButton
                        key={pay}
                        onPress={() => setPayment(pay)}
                        content={pay}
                        condition={pay === payment}
                    />
                ))
            }
        </ItemsScroll>
    )
}