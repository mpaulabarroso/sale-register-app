import { Button } from '@componets/Button'
import { TextInput, View } from 'react-native'
import { styles } from '../utils/settingsStyles'
import { Separator } from '@componets/Separator'

export function AddCategories() {
    return (
        <View style={styles.container}>
            <Separator title='Categorías' />
            <View style={styles.contRow}>
                <TextInput
                    style={styles.input}
                    onChangeText={() => { }}
                    placeholder='Nueva categoría...'
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