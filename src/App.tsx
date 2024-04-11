import { NavigationContainer } from '@react-navigation/native'
import { useEffect } from 'react'
import { createDataBase } from 'services/dataBase'
import { DrawerNav } from 'navigation/DrawerNav'
import { Container } from '@componets/Container'

export default function App() {
    useEffect(() => (createDataBase()), [])
    return (
        <NavigationContainer>
            <Container>
                <DrawerNav />
            </Container>
        </NavigationContainer>
    )
}