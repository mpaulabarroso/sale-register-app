import { Button } from '@componets/Button'
import { Separator } from '@componets/Separator'
import { useContext, useState } from 'react'
import { Item, SectionContext } from '../context/SectionContext'
import { StyleSheet, TextInput, View } from 'react-native'
import { theme } from '@utils/theme'
import { useDeleteItem } from '../hooks/useDeleteItem'
import { useEditItem } from '../hooks/useEditItem'

export function SectionList() {
    const [edit, setEdit] = useState(false)
    const { items } = useContext(SectionContext)

    const deleteItem = useDeleteItem()

    const editItem = useEditItem()

    const handleEditItem = (item: Item) => {
        editItem(item)
            .then(() => setEdit(false))
            .catch((error) => alert(error))
    }

    if (!(items && items.length > 0)) return null

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
                                />
                        }
                        <View style={styles.contRow}>
                            <Button
                                styleButton={styles.buttonCont}
                                styleText={styles.buttonText}
                                onPress={() => edit ? handleEditItem(item) : setEdit(true)}
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
        paddingHorizontal: 8,
        justifyContent: 'center',
        alignItems: 'center',
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