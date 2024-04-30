import { getToSaveHistory } from 'services/getSales'
import { updateSale } from 'services/updateSale'

export function useGetSyncHistory() {
    const syncHistory = async () => {
        try {
            const sales = await getToSaveHistory()
            // If all sales are sync
            if (!sales.length) return null
            // If are sales to sync create body to send
            const data = {
                date: new Date(),
                sales
            }
            // POST request to API
            const response = await fetch(process.env.EXPO_PUBLIC_API_URL + '/sales', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            // Array with ids for set is_sync in true 
            const sync = await response.json()
            if (!sync.length) return null
            const promiseArray = sync.map((id: number) => {
                return updateSale(id)
            })
            await Promise.all(promiseArray) // is_sync = 1
        } catch (err) {
            // eslint-disable-next-line no-console
            console.log(err)
        }
    }

    return syncHistory
}