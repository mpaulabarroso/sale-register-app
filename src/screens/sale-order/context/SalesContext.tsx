import { ReactNode, createContext, useState } from 'react'

interface SalesContextProviderProps {
    children: ReactNode
}

export interface Item {
    category: string
    price: string
}

type typeContext = {
    payment: string
    setPayment: React.Dispatch<React.SetStateAction<string>>
    items: Item[]
    setItems: React.Dispatch<React.SetStateAction<Item[]>>
}

export const SalesContext = createContext<typeContext>({
    payment: 'Efectivo',
    setPayment: () => { },
    items: [],
    setItems: () => { }
})

export const SalesContextProvider = ({ children }: SalesContextProviderProps) => {
    const [payment, setPayment] = useState<string>('Efectivo')
    const [items, setItems] = useState<Item[]>([])

    return (
        <SalesContext.Provider value={{ payment, setPayment, items, setItems }}>
            {children}
        </SalesContext.Provider>
    )
}