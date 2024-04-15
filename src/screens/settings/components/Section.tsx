import { useState } from 'react'
import { View } from 'react-native'
import { SectionHeader } from './SectionHeader'
import { SectionContent } from './SectionContent'
import { Item, SectionContext, SectionProps } from '../context/SectionContext'

export function Section({ title, placeholder, endpoint }: SectionProps) {
    const [show, setShow] = useState(false)
    const [items, setItems] = useState<Item[]>([])

    return (
        <SectionContext.Provider value={{
            title,
            placeholder,
            endpoint,
            show,
            setShow,
            items,
            setItems
        }}>
            <View style={{ margin: 4 }}>
                <SectionHeader />
                <SectionContent />
            </View>
        </SectionContext.Provider>
    )
}