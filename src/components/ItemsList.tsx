import { View, FlatList, Platform } from 'react-native'

interface ItemsListProps<T> {
    items: T[]
    itemToRender: (info: { item: T }) => React.ReactElement
}

export function ItemsList<T>({ items, itemToRender }: ItemsListProps<T>) {
    return (
        <View style={{ flex: 1, paddingVertical: 4 }}>
            <FlatList
                data={items}
                keyExtractor={(_item, index) => index.toString()}
                renderItem={itemToRender}
                ListFooterComponent={<View style={{ height: Platform.OS === 'ios' ? 60 : 80 }} ></View>}
            />
        </View>
    )
}