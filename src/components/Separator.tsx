import { StyleSheet, Text } from 'react-native'

export function Separator({ title }: { title: string }) {
    return (
        <Text style={styles.textSeparator}>{title}</Text>
    )
}

const styles = StyleSheet.create({
    textSeparator: {
        fontSize: 18,
        letterSpacing: 0.25,
        lineHeight: 20,
        fontStyle: 'normal',
        fontWeight: '500',
        textAlignVertical: 'center',
        marginHorizontal: 0,
        paddingVertical: 8,
    }
})