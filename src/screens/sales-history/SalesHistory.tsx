import { useContext } from 'react'
import { MainContext, TABS } from '@context/MainContext'
import { ContentView } from '@componets/ContentView'
import { Separator } from '@componets/Separator'
import { HistoryItemList } from './components/HistoryItemList'
import { HistoryMainButton } from './components/HistoryMainButton'
import { HistoryContextProvider } from './context/HistoryContext'

export function SalesHistory() {
    const { tab } = useContext(MainContext)

    if (tab !== TABS[1]) return null

    const DATE = new Date().toISOString().split('T')[0].split('-').reverse().join('/')

    return (
        <HistoryContextProvider>
            <ContentView>
                <Separator title={DATE} />
                <HistoryItemList />
                <HistoryMainButton />
            </ContentView>
        </HistoryContextProvider>
    )
}
