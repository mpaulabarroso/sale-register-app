import { Icon } from '@componets/Icon'
import { useDeleteHistory } from '../hooks/useDeleteHistory'
import { Button } from '@componets/Button'
import { HistoryButtonsProps } from '../types'
import { Alert } from 'react-native'

export function HistoryDeleteButton({ isLoading, setIsLoading }: HistoryButtonsProps) {
    const deleteHistory = useDeleteHistory()

    const handleDelete = () => {
        Alert.alert(
            'Confirmar',
            'Borrar el historial.',
            [
                { text: 'Cancelar', style: 'cancel' },
                {
                    text: 'Confirmar', onPress: async () => {
                        try {
                            setIsLoading(true)
                            deleteHistory()
                        } catch (err) {
                            // eslint-disable-next-line no-console
                            console.log(err)
                        } finally {
                            setIsLoading(false)
                        }
                    }
                },
            ]
        )
    }

    return (
        <Button
            content={<Icon name="delete" />}
            onPress={isLoading ? () => { } : handleDelete}
        />
    )
}