import { useContext } from 'react'
import { SalesContext } from '../context/SalesContext'
import { Text } from 'react-native'
import { ItemsList } from '@componets/ItemsList'
import { ItemToShow } from '@componets/ItemToShow'
import { PriceInput } from './price-input/PriceInput'

export function SaleItemList() {
    const { items } = useContext(SalesContext)

    return (
        <ItemsList
            items={items}
            itemToRender={({ item }) => (
                <ItemToShow>
                    <Text style={{ fontSize: 16 }}>{item.category}</Text>
                    <PriceInput item={item} />
                </ItemToShow>
            )}
        />
    )
}