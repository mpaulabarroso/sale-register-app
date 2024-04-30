import { StyleSheet, Text } from 'react-native'

export function ItemText({ txt }: { txt: string }) {
    return (
        <Text style={styles.textStyles}>{txt}</Text>
    )
}

const styles = StyleSheet.create({
    textStyles: {
        paddingHorizontal: 8,
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: 0.1,
        fontWeight: '500',
        textAlignVertical: 'bottom',
    },
})