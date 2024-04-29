import { useContext } from 'react'
import { SectionContext } from '../context/SectionContext'
import { useNavigation, ParamListBase, NavigationProp } from '@react-navigation/native'
import { addCategory } from 'services/addCategory'
import { dropTables } from 'services/dropTables'
import { addPayment } from 'services/addPayment'

interface Add {
    [key: string]: {
        add: (name: string, id: string) => Promise<unknown>,
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

    const sync = async () => {
        try {
            // First delete items saved in sqlite db
            await dropTables(OBJ_ADD[endpoint].table)
            // Sync items - saved new items
            const arrayPromise = items.map(item => {
                return OBJ_ADD[endpoint].add(item.name, String(item.id))
            })
            await Promise.all(arrayPromise)
            navigation.navigate('SaleOrder')
        } catch (err) {
            console.log(err) // eslint-disable-line no-console
        }

    }
    return sync
}

