import { ItemsScroll } from '@componets/ItemsScroll'
import { useContext, useEffect, useState } from 'react'
import { SalesContext } from '../context/SalesContext'
import { SaleOrderButton } from './sale-oreder-button/SaleOrderButton'
import { useNavigation } from '@react-navigation/native'
import { getCatagories } from 'services/getCategories'

export interface CategoryLabel {
    name: string
    id: string
}

export type SetCategoryType = React.Dispatch<React.SetStateAction<CategoryLabel[]>>

export function Categories() {
    const { items, setItems } = useContext(SalesContext)
    const navigation = useNavigation()
    const [categories, setCategories] = useState<CategoryLabel[]>([])

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            if (!categories.length) {
                getCatagories()
                    .then((cs) => setCategories(cs))
                    .catch((error: Error) => console.log(error)) // eslint-disable-line no-console
            }
        })
        const unsubscribe2 = navigation.addListener('blur', () => {
            setItems([])
        })

        return () => {
            unsubscribe
            unsubscribe2
        }
    }, [navigation])

    return (
        <ItemsScroll>
            {
                categories.map(({ name, id }) => (
                    <SaleOrderButton
                        key={id}
                        onPress={() => setItems([...items, { id, ammount: '', name }])}
                        content={name}
                        condition={false}
                    />
                ))
            }
        </ItemsScroll>
    )
}