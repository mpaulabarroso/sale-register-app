import { Button } from '@componets/Button'
import { TextInput, View } from 'react-native'
import { styles } from '../utils/settingsStyles'
import { Separator } from '@componets/Separator'

export function AddPayment() {
    return (
        <View style={styles.container}>
            <Separator title='Método de pago' />
            <View style={styles.contRow}>
                <TextInput
                    style={styles.input}
                    onChangeText={() => { }}
                    placeholder='Nuevo método de pago...'
                />
                <Button
                    styleButton={[styles.buttonCont]}
                    styleText={[styles.buttonText]}
                    onPress={() => { }}
                    content='Agregar'
                />
            </View>
        </View>
    )
}