import { Button } from '@componets/Button'
import { Separator } from '@componets/Separator'
import { TextInput, View } from 'react-native'
import { styles } from '../utils/buttonStylesSettings'

export function AddPayment() {
    return (
        <View>
            <Separator title='Agregar metodo de pago' />
            <View style={styles.contAdd}>
                <TextInput
                    style={styles.input}
                    onChangeText={() => { }}
                />
                <Button
                    styleButton={[styles.button]}
                    styleText={[styles.text]}
                    onPress={() => { }}
                    content='Agregar'
                />
            </View>
        </View>
    )
}