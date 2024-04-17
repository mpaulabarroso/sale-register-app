import { Button } from '@componets/Button'
import { theme } from '@utils/theme'
import { StyleSheet } from 'react-native'

interface SaleOrderButtonProps {
    onPress: () => void
    content: string
    condition: boolean
}

export function SaleOrderButton({ onPress, content, condition }: SaleOrderButtonProps) {
    return (
        <Button
            styleButton={[
                styles.button,
                condition ? styles.buttonPressed : {},
            ]}
            styleText={[
                styles.textLabel,
                condition ? styles.textLabelPressed : {},
            ]}
            onPress={onPress}
            content={content}
        />
    )
}

export const styles = StyleSheet.create({
    button: {
        height: 40,
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#0B1920',
        backgroundColor: theme.colors.bgPrimary,
    },
    buttonPressed: {
        backgroundColor: theme.colors.primary,
        borderWidth: 0,
    },
    textLabel: {
        color: theme.colors.txtPrimary,
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 18,
    },
    textLabelPressed: {
        color: theme.colors.txtSecondary,
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 18,
    }
})