import { createContext } from 'react'

export interface SectionProps {
    title: string
    placeholder: string
    endpoint: string
}

interface typeContext extends SectionProps {
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}

export const SectionContext = createContext<typeContext>({
    title: '',
    placeholder: '',
    endpoint: '',
    show: false,
    setShow: () => { }
})