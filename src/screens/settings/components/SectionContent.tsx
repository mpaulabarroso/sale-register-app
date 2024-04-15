import { useContext, useEffect, useState } from 'react'
import { TextInput, View } from 'react-native'
import { styles } from '../utils/settingsStyles'
import { Button } from '@componets/Button'
import { Separator } from '@componets/Separator'
import { SectionContext } from '../context/SectionContext'

interface Item {
    id: string
    name: string
}

export function SectionContent() {
    const [items, setItems] = useState<Item[]>([])
    const { placeholder, show, endpoint } = useContext(SectionContext)

    useEffect(() => {
        if (show) {
            fetch(process.env.EXPO_PUBLIC_API_URL + endpoint)
                .then(res => res.json())
                .then(data => setItems(data))
        }
    }, [show])

    if (show === false) return null

    return (
        <>
            <View style={styles.contRow}>
                <TextInput
                    style={styles.input}
                    onChangeText={() => { }}
                    placeholder={placeholder}
                />
                <Button
                    styleButton={[styles.buttonCont]}
                    styleText={[styles.buttonText]}
                    onPress={() => { }}
                    content='Agregar'
                />
            </View>
            {
                items && items.length > 0 &&
                <View>
                    {
                        items.map((item: Item) => <Separator key={item.id} title={item.name} />)
                    }
                    <Button
                        styleButton={[styles.buttonCont]}
                        styleText={[styles.buttonText]}
                        onPress={() => { }}
                        content='Sincronizar'
                    />
                </View>
            }
        </>
    )
}