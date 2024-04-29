import { ItemsScroll } from '@componets/ItemsScroll'
import { useContext, useEffect, useState } from 'react'
import { PaymentLabel, SalesContext } from '../context/SalesContext'
import { SaleOrderButton } from './sale-oreder-button/SaleOrderButton'
import { useNavigation } from '@react-navigation/native'
import { getPayments } from 'services/getPayments'

export type SetPaymentsType = React.Dispatch<React.SetStateAction<PaymentLabel[]>>

export function Payment() {
    const { payment, setPayment } = useContext(SalesContext)
    const navigation = useNavigation()
    const [payments, setPayments] = useState<PaymentLabel[]>([])

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            if (!payments.length) {
                // Set payments
                getPayments()
                    .then((ps) => setPayments(ps))
                    .catch((error: Error) => console.log(error)) // eslint-disable-line no-console
            }
        })
        return unsubscribe
    }, [navigation])

    return (
        <ItemsScroll>
            {
                payments.map(({ id, name }) => (
                    <SaleOrderButton
                        key={id}
                        onPress={() => setPayment({ id, name })}
                        content={name}
                        condition={name === payment.name}
                    />
                ))
            }
        </ItemsScroll>
    )
}