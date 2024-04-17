import { Button } from '@componets/Button'
import { Separator } from '@componets/Separator'
import { useContext, useState } from 'react'
import { Item, SectionContext } from '../context/SectionContext'
import { Alert, StyleSheet, TextInput, View } from 'react-native'
import { theme } from '@utils/theme'

export function SectionList() {
    const [edit, setEdit] = useState(false)
    const { items, setItems, endpoint } = useContext(SectionContext)

    if (!(items && items.length > 0)) return null

    const deleteItem = ({ id, name }: Item) => {
        Alert.alert(
            'Eliminar categoria',
            `Esta seguro que desea elimnar ${name}?`,
            [
                {
                    text: 'Cancel',
                    onPress: () => {},
                },
                {
                    text: 'OK',
                    onPress: () => fetch(process.env.EXPO_PUBLIC_API_URL + endpoint + '/' + id, {
                        method: 'DELETE',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                    })
                        .then((res) => {
                            if (res.ok) {
                                setItems((newItems: Item[]) => newItems.filter(item => item.id !== id))
                            }
                        })
                }
            ])

    }

    const editItem = ({ id, name }: Item) => {
        fetch(process.env.EXPO_PUBLIC_API_URL + endpoint + '/' + id, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name })
        })
            .then((res) => res.json())
            .then(() => setEdit(false))

    }

    return (
        <>
            {
                items.map((item: Item) =>
                    <View style={styles.contRow} key={item.id}>
                        {
                            !edit
                                ? <Separator title={item.name} />

                                : <TextInput
                                    style={{}}
                                    placeholder={item.name}
                                    onChangeText={txt => item.name = txt}
                                // value={item.name}
                                />
                        }
                        <View style={styles.contRow}>
                            <Button
                                styleButton={styles.buttonCont}
                                styleText={styles.buttonText}
                                onPress={() => edit ? editItem(item) : setEdit(true)}
                                content={edit ? 'Guardar' : 'Editar'}
                            />
                            <Button
                                styleButton={styles.buttonCont}
                                styleText={styles.buttonText}
                                onPress={() => edit ? setEdit(false) : deleteItem(item)}
                                content={edit ? 'Cancelar' : 'Borrar'}
                            />
                        </View>
                    </View>
                )
            }
            <Button
                styleButton={styles.buttonCont}
                styleText={styles.buttonText}
                onPress={() => { }}
                content='Sincronizar'
            />
        </>
    )
}

export const styles = StyleSheet.create({
    buttonCont: {
        height: 30,
        paddingHorizontal: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.bgPrimary,
    },
    buttonText: {
        color: theme.colors.txtPrimary,
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