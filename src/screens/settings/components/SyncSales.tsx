import { Button } from '@componets/Button'
import { Separator } from '@componets/Separator'
import { View } from 'react-native'
import { styles } from '../utils/buttonStylesSettings'

export function SyncSales() {
    return (
        <View style={styles.contAdd}>
            <Separator title='Sincronizar ventas' />
            <Button
                styleButton={[styles.button]}
                styleText={[styles.text]}
                onPress={() => { }}
                content='Sincronizar'
            />
        </View>
    )
}