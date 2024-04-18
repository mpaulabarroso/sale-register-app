import { Alert } from 'react-native'
import { Item, SectionContext } from '../context/SectionContext'
import { useContext } from 'react'

export function useDeleteItem() {
    const { endpoint, setItems } = useContext(SectionContext)

    const deleteItem = ({id, name}: Item) => { 
        Alert.alert(
            'Eliminar categoria',
            `Esta seguro que desea elimnar ${name}?`,
            [
                {
                    text: 'Cancel',
                    onPress: () => { },
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
    return deleteItem
}