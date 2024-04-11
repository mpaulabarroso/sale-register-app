import { ReactNode } from 'react'
import { StyleSheet, View, Dimensions, Platform } from 'react-native'

const { height } = Dimensions.get('window')
const fragment = Platform.OS === 'ios' ? 160 : 96

export function ContentView({ children }: { children: ReactNode }) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: height - fragment,
        margin: 8,
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 8,
    },
})