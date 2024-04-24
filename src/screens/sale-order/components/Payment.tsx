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
            // Set payments
            getPayment(setPayments)
            // Set default payment of list
            setPayment({
                current: payments[0]?.name,
                default: payments[0]?.name
            })
        })
        return unsubscribe
    }, [navigation])

    return (
        <ItemsScroll>
            {
                payments.map(({ name }) => (
                    <SaleOrderButton
                        key={name}
                        onPress={() => setPayment({ current: name, default: payment.default })}
                        content={name}
                        condition={name === payment.current}
                    />
                ))
            }
        </ItemsScroll>
    )
}