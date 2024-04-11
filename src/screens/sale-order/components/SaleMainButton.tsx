import { MainButton } from '@componets/MainButton'
import { useContext } from 'react'
import { SalesContext } from '../context/SalesContext'
import { Alert } from 'react-native'
import { add } from 'services/dataBase'

export function SaleMainButton() {
    const { items, payment, setItems } = useContext(SalesContext)

    return (
        <MainButton
            isValid={items.length > 0}
            onPress={() => {
                const total = items.map((i) => i.price).reduce((sum, item) => sum + Number(item), 0).toString()
                Alert.alert(
                    'Confirmar venta?',
                    `Metodo de Pago: ${payment}\nTotal: $ ${total}`,
                    [
                        {
                            text: 'Cancelar',
                            style: 'cancel',
                        },
                        {
                            text: 'Confirmar', onPress: () => {
                                add({ payment, total, items: JSON.stringify(items) })
                                setItems([])
                            }
                        },
                    ]
                )

            }}
            text='Confirmar'
        />
    )
}