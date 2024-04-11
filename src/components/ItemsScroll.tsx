import { ReactNode } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'


export function ItemsScroll({ children }: { children: ReactNode }) {
    return (
        <View style={{ marginVertical: 8 }}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollCat}
            >
                {children}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    scrollCat: {
        flexDirection: 'row',
        paddingHorizontal: 8,
        paddingVertical: 4,
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: 8,
    },
})