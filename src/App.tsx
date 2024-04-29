import { NavigationContainer } from '@react-navigation/native'
import { useCallback, useEffect, useState } from 'react'
import { DrawerNav } from 'navigation/DrawerNav'
import { Container } from '@componets/Container'
import { createCategoryTable, createHistoryTable, createPaymenTable } from 'services/createTables'
import { ActivityIndicator } from 'react-native'

export default function App() {
    const [isLoading, setIsloading] = useState(true)

    const loadData = useCallback(async () => {
        try {
            await createCategoryTable()
            await createPaymenTable()
            await createHistoryTable()
            setIsloading(false)
        } catch (err) {
            // eslint-disable-next-line no-console
            console.log('Load data', err)
        }
    }, [])

    useEffect(() => {
        loadData()
    }, [])

    return (
        <NavigationContainer>
            <Container>
                {isLoading
                    ? <ActivityIndicator />
                    : <DrawerNav />
                }
            </Container>
        </NavigationContainer>
    )
}