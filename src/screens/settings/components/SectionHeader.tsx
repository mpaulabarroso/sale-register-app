import { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Separator } from '@componets/Separator'
import { SectionContext } from '../context/SectionContext'
import { Button } from '@componets/Button'

export function SectionHeader() {
    const { title, show, setShow } = useContext(SectionContext)

    return (
        <View style={styles.contRow}>
            <Separator title={title} />
            <Button
                styleButton={styles.desplegable}
                styleText={{}}
                onPress={() => setShow(!show)}
                content={''}
            />
        </View>
    )
}

export const styles = StyleSheet.create({
    contRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 4,
    },
    desplegable: {
        height: 24,
        width: 24,
        backgroundColor: 'pink',
    },
})