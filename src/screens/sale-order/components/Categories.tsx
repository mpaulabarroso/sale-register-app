import { ItemsScroll } from '@componets/ItemsScroll'
import { useContext, useEffect, useState } from 'react'
import { SalesContext } from '../context/SalesContext'
import { SaleOrderButton } from './sale-oreder-button/SaleOrderButton'
import { useNavigation } from '@react-navigation/native'
import { getCatagories } from 'services/dataBase'

interface CategoryLabel {
    name: string
}

export type SetCategoryType = React.Dispatch<React.SetStateAction<CategoryLabel[]>>

export function Categories() {
    const { items, setItems } = useContext(SalesContext)
    const navigation = useNavigation()
    const [categories, setCategories] = useState<CategoryLabel[]>([])

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getCatagories(setCategories)
        })
        return unsubscribe
    }, [navigation])

    return (
        <ItemsScroll>
            {
                categories.map(({ name }) => (
                    <SaleOrderButton
                        key={name}
                        onPress={() => setItems([...items, { category: name, price: '' }])}
                        content={name}
                        condition={false}
                    />
                ))
            }
        </ItemsScroll>
    )
}