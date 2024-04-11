import { ReactNode, createContext, useState } from 'react'

interface HistoryContextProviderProps {
    children: ReactNode
}

export interface SaleType {
    items: string
    payment: string
    total: string
}

export type SetHistoryType = React.Dispatch<React.SetStateAction<SaleType[]>>

type typeContext = {
    history: SaleType[]
    setHistory: SetHistoryType
}

export const HistoryContext = createContext<typeContext>({
    history: [],
    setHistory: () => { }
})

export function HistoryContextProvider({ children }: HistoryContextProviderProps) {
    const [history, setHistory] = useState<SaleType[]>([])

    return (
        <HistoryContext.Provider value={{ history, setHistory }}>
            {children}
        </HistoryContext.Provider>
    )
}