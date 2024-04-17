import { useContext } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Separator } from '@componets/Separator'
import { SectionContext } from '../context/SectionContext'

export function SectionHeader() {
    const { title, show, setShow } = useContext(SectionContext)

    return (
        <View style={styles.contRow}>
            <Separator title={title} />
            <TouchableOpacity
                style={styles.desplegable}
                onPress={() => setShow(!show)}
            />
        </View>
    )
}

export const styles = StyleSheet.create({
    contRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 4,
        paddingHorizontal: 8,
    },
    desplegable: {
        height: 24,
        width: 24,
        backgroundColor: 'pink',
    },
})