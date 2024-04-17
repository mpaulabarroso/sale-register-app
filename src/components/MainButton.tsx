import { Text, StyleSheet, Pressable } from 'react-native'
import { theme } from '@utils/theme'

interface MainButtonProps {
    isValid: boolean
    onPress: () => void
    text: string
}

export function MainButton({ isValid, onPress, text }: MainButtonProps) {
    return (
        <Pressable
            style={[styles.botonSubmitDisable, isValid ? styles.botonSubmitActive : null]}
            disabled={!isValid}
            onPress={onPress}
        >
            <Text style={[styles.textLabel, isValid ? styles.textLabelPressed : null]}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    botonSubmitDisable: {
        alignSelf: 'center',
        width: 312,
        height: 48,
        marginVertical: 8,
        paddingVertical: 10,
        paddingHorizontal: 24,
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: 0,
        borderRadius: 28,
        borderWidth: 1,
        borderColor: theme.colors.primary,
        borderStyle: 'solid',
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    botonSubmitActive: {
        backgroundColor: theme.colors.primary,
        borderWidth: 0,
    },
    textLabel: {
        color: theme.colors.primary,
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 20,
    },
    textLabelPressed: {
        color: theme.colors.txtSecondary,
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 20,
    }
})