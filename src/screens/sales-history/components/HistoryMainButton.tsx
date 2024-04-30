import { MainButton } from '@componets/main-button/MainButton'
import { Alert } from 'react-native'
import { useGetSyncHistory } from '../hooks/useGetSyncHistory'

interface HistoryMainButtonProps {
    isLoading: boolean
    setIsLoading: (v: boolean) => void
}

export function HistoryMainButton({ isLoading, setIsLoading }: HistoryMainButtonProps) {
    const syncHistory = useGetSyncHistory()

    const handleSync = () => {
        Alert.alert(
            'Iniciar',
            'Sincronizar el historial.',
            [
                { text: 'Cancelar', style: 'cancel' },
                {
                    text: 'Confirmar', onPress: async () => {
                        try {
                            setIsLoading(true)
                            await syncHistory()
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
        <MainButton
            isValid={!isLoading}
            onPress={!isLoading ? handleSync : () => { }}
            text='Sincronizar'
        />
    )
}