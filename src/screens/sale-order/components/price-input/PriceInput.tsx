import { Text, TextInput, View } from 'react-native'
import { Item } from '../../context/SalesContext'
import { styles } from './PriceInput.styles'

export function PriceInput({ item }: { item: Item }) {
    return (
        <View testID='priceInput' style={styles.viewInput}>
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