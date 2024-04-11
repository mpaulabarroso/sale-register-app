import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants'
import { ReactNode } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

interface ContainerProp {
    children: ReactNode
}

export function Container({ children }: ContainerProp) {
    return (
        <SafeAreaView style={styles.container}>
            {children}
            <StatusBar style="auto" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#fff'
    },
})