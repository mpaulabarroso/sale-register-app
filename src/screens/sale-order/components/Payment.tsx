import { Button } from '@componets/Button'
import { ItemsScroll } from '@componets/ItemsScroll'
import { useContext } from 'react'
import { styles } from '../utils/buttonStyles'
import { SalesContext } from '../context/SalesContext'

const METODOS = ['Efectivo', 'Tarjeta', 'Tranferencia', 'Billetera', 'Otros']

export function Payment() {
    const { payment, setPayment } = useContext(SalesContext)

    return (
        <ItemsScroll>
            {
                METODOS.map((pay) => (
                    <Button
                        key={pay}
                        styleButton={[
                            styles.button,
                            pay === payment ? styles.buttonPressed : {},
                        ]}
                        styleText={[
                            styles.textLabel,
                            pay === payment ? styles.textLabelPressed : {},
                        ]}
                        onPress={() => setPayment(pay)}
                        content={pay}
                    />
                ))
            }
        </ItemsScroll>
    )
}