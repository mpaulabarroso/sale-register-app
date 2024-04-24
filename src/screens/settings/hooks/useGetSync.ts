import { useContext } from 'react'
import { SectionContext } from '../context/SectionContext'
import { addCategory, addPayment, dropItems } from 'services/dataBase'
import { useNavigation, ParamListBase, NavigationProp } from '@react-navigation/native'

interface Add {
    [key: string]: {
        add: (name: string) => void,
        table: string
    }
}

const OBJ_ADD: Add = {
    '/category': { add: addCategory, table: 'category' },
    '/payment': { add: addPayment, table: 'payment' }
}

export function useGetSync() {
    const { endpoint, items } = useContext(SectionContext)
    const navigation: NavigationProp<ParamListBase> = useNavigation()

    const sync = () => {
        // First delete items saved in sqlite db
        dropItems(OBJ_ADD[endpoint].table)
        // Sync items - saved new items
        items.forEach(item => {
            OBJ_ADD[endpoint].add(item.name)
        })
        navigation.navigate('SaleOrder')
    }
    return sync
}

