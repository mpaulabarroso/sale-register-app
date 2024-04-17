import { Button } from '@componets/Button'
import { StyleSheet, TextInput, View } from 'react-native'
import { useContext, useRef } from 'react'
import { SectionContext } from '../context/SectionContext'
import { theme } from '@utils/theme'

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
    input: {
        width: 220,
        height: 36,
        textAlign: 'left',
        borderColor: '#CAC4D0',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 16,
        fontSize: 16,
    },
    contRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 4,
        paddingHorizontal: 8,
    },
})