import { Button } from '@componets/Button'
import { Separator } from '@componets/Separator'
import { styles } from '../utils/settingsStyles'
import { View } from 'react-native'

export function SyncSales() {
    return (
        <View style={styles.contRow}>
            <Separator title='Sincronizar ventas' />
            <Button
                styleButton={[styles.buttonCont]}
                styleText={[styles.buttonText]}
                onPress={() => { }}
                content='Sincronizar'
            />
        </View>
    )
}