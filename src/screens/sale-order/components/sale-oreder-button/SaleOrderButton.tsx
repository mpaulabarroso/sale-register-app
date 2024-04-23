import { Button } from '@componets/Button'
import { styles } from './SaleOrderButton.styles'

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