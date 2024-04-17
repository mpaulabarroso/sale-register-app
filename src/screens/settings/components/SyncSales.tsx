import { Button } from '@componets/Button'
import { Separator } from '@componets/Separator'
import { theme } from '@utils/theme'
import { StyleSheet, View } from 'react-native'

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

export const styles = StyleSheet.create({
    buttonCont: {
        height: 30,
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: theme.colors.primary,
    },
    buttonText: {
        color: theme.colors.txtSecondary,
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 18,
    },
    contRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 4,
        paddingHorizontal: 8,
    },
})