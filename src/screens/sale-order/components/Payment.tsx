import { ItemsScroll } from '@componets/ItemsScroll'
import { useContext, useEffect, useState } from 'react'
import { SalesContext } from '../context/SalesContext'
import { SaleOrderButton } from './sale-oreder-button/SaleOrderButton'
import { useNavigation } from '@react-navigation/native'
import { getPayment } from 'services/dataBase'

interface PaymentLabel {
    name: string
}

export type SetPaymentsType = React.Dispatch<React.SetStateAction<PaymentLabel[]>>

export function Payment() {
    const { payment, setPayment } = useContext(SalesContext)
    const navigation = useNavigation()
    const [payments, setPayments] = useState<PaymentLabel[]>([])

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            if (!payments.length) {
                // Set payments
                getPayment(setPayments)
            }
        })
        return unsubscribe
    }, [navigation])

    return (
        <ItemsScroll>
            {
                payments.map(({ name }) => (
                    <SaleOrderButton
                        key={name}
                        onPress={() => setPayment(name)}
                        content={name}
                        condition={name === payment}
                    />
                ))
            }
        </ItemsScroll>
    )
}