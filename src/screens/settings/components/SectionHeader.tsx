import { useContext } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { styles } from '../utils/settingsStyles'
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