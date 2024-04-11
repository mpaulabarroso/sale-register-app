import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Item } from '../context/SalesContext'

export function PriceInput({ item }: { item: Item }) {
    return (
        <View style={styles.viewInput}>
            <Text style={styles.textStyle}>$ </Text>
            <TextInput
                style={styles.input}
                keyboardType={'numeric'}
                onChangeText={(txt) => item.price = txt}
                placeholder='111.11'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        textAlign: 'center',
        borderColor: '#CAC4D0',
        borderBottomWidth: 1,
        paddingHorizontal: 16,
        fontSize: 16,
    },
    viewInput: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        columnGap: 8,
    },
    textStyle: {
        fontSize: 16,
        fontWeight: '500'
    }
})