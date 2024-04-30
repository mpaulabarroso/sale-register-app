export interface HistoryButtonsProps {
    isLoading: boolean
    setIsLoading: (v: boolean) => void
}

export interface SaleLabel {
    paymentName: string
    total: string
    isSync: number
}

export type SetHistoryType = React.Dispatch<React.SetStateAction<SaleLabel[]>>