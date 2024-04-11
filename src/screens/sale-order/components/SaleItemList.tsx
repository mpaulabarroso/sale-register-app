import { useContext } from 'react'
import { SalesContext } from '../context/SalesContext'
import { Text } from 'react-native'
import { ItemsList } from '@componets/ItemsList'
import { ItemToShow } from '@componets/ItemToShow'
import { PriceInput } from './PriceInput'

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




// import { useContext } from 'react'
// import { View, FlatList, Platform, Text } from 'react-native'
// import { ItemToShow } from './ItemToShow'
// import { PriceInput } from '@screens/sale-order/components/PriceInput'

// //item y renderitem
// export function ItemsList() {
//     const { items } = useContext(SalesContext)

//     return (
//         <View style={{ flex: 1, paddingVertical: 8 }}>
//             <FlatList
//                 data={items}
//                 keyExtractor={(_item, index) => index.toString()}
//                 renderItem={({ item }) => (
//                     <ItemToShow>
//                         <Text style={{ fontSize: 16 }}>{item.category}</Text>
//                         <PriceInput item={item} />
//                     </ItemToShow>
//                 )}
//                 ListFooterComponent={<View style={{ height: Platform.OS === 'ios' ? 24 : 80 }} ></View>}
//             />
//         </View>
//     )
// }