import { NavigationContainer } from '@react-navigation/native'
import { useEffect } from 'react'
import { createDataBase } from 'services/dataBase'
import { DrawerNav } from 'navigation/DrawerNav'

export default function App() {
    useEffect(() => (createDataBase()), [])

    return (
        <NavigationContainer>
            <DrawerNav />
        </NavigationContainer>

    )
}