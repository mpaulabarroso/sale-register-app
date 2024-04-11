import { Text, TouchableOpacity, TextStyle, ViewStyle } from 'react-native'

interface ButtonProps {
    styleButton: ViewStyle[]
    styleText: TextStyle[]
    onPress: () => void
    content: string
}

export const Button = ({ styleButton, styleText, onPress, content }: ButtonProps) => (
    <TouchableOpacity
        style={styleButton}
        onPress={onPress}
    >
        <Text style={styleText}>{content}</Text>
    </TouchableOpacity>
)