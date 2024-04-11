import { ReactNode } from 'react'
import { View, StyleSheet } from 'react-native'

export function ItemToShow({ children }: { children: ReactNode }) {
    return (
        <View style={styles.itemCont}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    itemCont: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 8,
        marginVertical: 4,
        paddingVertical: 12,
        paddingHorizontal: 8,
    },
})