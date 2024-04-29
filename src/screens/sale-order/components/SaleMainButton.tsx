import { MainButton } from '@componets/main-button/MainButton'
import { useContext } from 'react'
import { Item, PaymentLabel, SalesContext } from '../context/SalesContext'
import { Alert } from 'react-native'
import { addSale } from 'services/addSale'

type ItemToSave = Pick<Item, 'id' | 'ammount'>

export interface SaleItem {
    payment: PaymentLabel
    total: string
    items: ItemToSave[]
}

export function SaleMainButton() {
    const { items, payment, setItems } = useContext(SalesContext)

    return (
        <MainButton
            isValid={items.length > 0}
            onPress={() => {
                const total = items.map((i) => i.ammount).reduce((sum, item) => sum + Number(item), 0).toString()
                Alert.alert(
                    'Confirmar venta?',
                    `Metodo de Pago: ${payment.name}\nTotal: $ ${total}`,
                    [
                        { text: 'Cancelar', style: 'cancel' },
                        {
                            text: 'Confirmar', onPress: async () => {
                                try {
                                    await addSale({ payment, total, items })
                                    setItems([])
                                } catch (err) {
                                    // eslint-disable-next-line no-console
                                    console.log(err)
                                }
                            }
                        },
                    ]
                )
            }}
            text='Confirmar'
        />
    )
}