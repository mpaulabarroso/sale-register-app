import { ReactNode, createContext, useState } from 'react'

interface SalesContextProviderProps {
    children: ReactNode
}

export interface Item {
    category: string
    price: string
}

interface typeContext {
    payment: string
    setPayment: React.Dispatch<React.SetStateAction<string>>
    items: Item[]
    setItems: React.Dispatch<React.SetStateAction<Item[]>>
}

export const SalesContext = createContext<typeContext>({
    payment: '',
    setPayment: () => { },
    items: [],
    setItems: () => { }
})

export const SalesContextProvider = ({ children }: SalesContextProviderProps) => {
    const [payment, setPayment] = useState<string>('')
    const [items, setItems] = useState<Item[]>([])

    return (
        <SalesContext.Provider value={{
            payment, // Payment method selected
            setPayment,
            items, // Category and price for list
            setItems,
        }}>
            {children}
        </SalesContext.Provider>
    )
}