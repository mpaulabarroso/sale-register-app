import { Button } from '@componets/Button'
import { TextInput, View } from 'react-native'
import { styles } from '../utils/settingsStyles'
import { useContext, useRef } from 'react'
import { SectionContext } from '../context/SectionContext'

const INPUTITEM = {
    name: ''
}

export function SectionInput() {
    const { placeholder, endpoint, items, setItems } = useContext(SectionContext)

    const ref = useRef<TextInput>(null)

    const postItem = () => {
        fetch(process.env.EXPO_PUBLIC_API_URL + endpoint, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(INPUTITEM),
        })
            .then((res) => res.json())
            .then((data) => {
                setItems([...items, data])
            })
        ref.current?.clear()
    }

    return (
        <View style={styles.contRow}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={txt => INPUTITEM.name = txt}
                ref={ref}
            />
            <Button
                styleButton={styles.buttonCont}
                styleText={styles.buttonText}
                onPress={() => postItem()}
                content='Agregar'
            />
        </View>
    )
}