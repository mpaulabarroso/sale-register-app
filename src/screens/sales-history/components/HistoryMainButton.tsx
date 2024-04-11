import { MainButton } from '@componets/MainButton'
import { useContext } from 'react'
import { HistoryContext } from '../context/HistoryContext'

export function HistoryMainButton() {
    const { history, setHistory } = useContext(HistoryContext)

    return (
        <MainButton
            isValid={history.length > 0}
            onPress={() => {
                setHistory([])
            }}
            text='Sincronizar'
        />
    )
}