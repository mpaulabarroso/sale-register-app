import { useContext } from 'react'
import { Item, SectionContext } from '../context/SectionContext'

export function useEditItem() {
    const { endpoint } = useContext(SectionContext)

    const editItem = ({ id, name }: Item) => {
        return fetch(process.env.EXPO_PUBLIC_API_URL + endpoint + '/' + id, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name })
        })
            .then((res) => res.json())
            .catch((error) => error)
    }
    return editItem
}