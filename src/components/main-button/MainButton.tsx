import { Text, Pressable } from 'react-native'
import { styles } from './MainButton.styles'

interface MainButtonProps {
    isValid: boolean
    onPress: () => void
    text: string | React.ReactNode
}

export function MainButton({ isValid, onPress, text }: MainButtonProps) {
    return (
        <Pressable
            testID='mainButton'
            style={[
                styles.buttonSubmit,
                isValid ? styles.buttonSubmitActive : styles.buttonSubmitDisable
            ]}
            disabled={!isValid}
            onPress={onPress}
        >
            <Text style={[
                styles.textLabel,
                isValid ? styles.textLabelActive : styles.textLabelDisable
            ]}>{text}</Text>
        </Pressable>
    )
}