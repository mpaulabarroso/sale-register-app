import { ReactNode, createContext, useState } from 'react'

export const TABS = ['Nueva Venta', 'Historial']

interface MainProviderProp {
    children: ReactNode
}

type typeContext = {
    tab: string,
    setTab: React.Dispatch<React.SetStateAction<string>>
}

export const MainContext = createContext<typeContext>({
    tab: TABS[0],
    setTab: () => { }
})

export const MainProvider = ({children}: MainProviderProp) => {
    const [tab, setTab] = useState<string>(TABS[0])
    return (
        <MainContext.Provider value={{tab, setTab}}>
            {children}
        </MainContext.Provider>
    )
}