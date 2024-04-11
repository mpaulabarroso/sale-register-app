import { ContentView } from '@componets/ContentView'
import { Text } from 'react-native'
import { AddCategories } from './components/AddCategories'


export function Settings() {
    return (
        <ContentView>
            <AddCategories />
            <Text>esto es la configuracion</Text>
        </ContentView>
    )
}