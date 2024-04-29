import { ReactNode, createContext, useState } from 'react'

interface SalesContextProviderProps {
    children: ReactNode
}

export interface Item {
    id: string
    ammount: string
    name: string
}

export interface PaymentLabel {
    name: string
    id: string
}

interface typeContext {
    payment: PaymentLabel
    setPayment: React.Dispatch<React.SetStateAction<PaymentLabel>>
    items: Item[]
    setItems: React.Dispatch<React.SetStateAction<Item[]>>
}

export const SalesContext = createContext<typeContext>({
    payment: { name: '', id: '' },
    setPayment: () => { },
    items: [],
    setItems: () => { }
})

export const SalesContextProvider = ({ children }: SalesContextProviderProps) => {
    const [payment, setPayment] = useState<PaymentLabel>({ name: '', id: '' })
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