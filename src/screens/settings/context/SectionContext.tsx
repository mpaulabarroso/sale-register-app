import { createContext } from 'react'

export interface Item {
    id: string
    name: string
}

export interface SectionProps {
    title: string
    placeholder: string
    endpoint: string
}

interface typeContext extends SectionProps {
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    items: Item[]
    setItems: React.Dispatch<React.SetStateAction<Item[]>>
}

export const SectionContext = createContext<typeContext>({
    title: '',
    placeholder: '',
    endpoint: '',
    show: false,
    setShow: () => { },
    items: [],
    setItems: () => { }
})