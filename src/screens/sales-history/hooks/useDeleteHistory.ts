import { deleteSales } from 'services/deleteSales'

export function useDeleteHistory() {
    const deleteHistory = async () => {
        await deleteSales()
    }

    return deleteHistory
}