import { useState } from 'react'
import { View } from 'react-native'
import { styles } from '../utils/settingsStyles'
import { SectionHeader } from './SectionHeader'
import { SectionContent } from './SectionContent'
import { SectionContext, SectionProps } from '../context/SectionContext'

export function Section({ title, placeholder, endpoint }: SectionProps) {
    const [show, setShow] = useState(false)

    return (
        <SectionContext.Provider value={{
            title,
            placeholder,
            endpoint,
            show,
            setShow
        }}>
            <View style={styles.container}>
                <SectionHeader />
                <SectionContent />
            </View>
        </SectionContext.Provider>
    )
}