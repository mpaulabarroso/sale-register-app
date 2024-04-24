import { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Separator } from '@componets/Separator'
import { SectionContext } from '../context/SectionContext'
import { Button } from '@componets/Button'
import { Icon } from '@componets/Icon'

export function SectionHeader() {
    const { title, show, setShow } = useContext(SectionContext)

    return (
        <View style={styles.contRow}>
            <Separator title={title} />
            <Button
                onPress={() => setShow(!show)}
                content={<Icon name={show ? 'arrowUp' : 'arrowDown'} />}
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
})