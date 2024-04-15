import { useContext, useEffect } from 'react'
import { SectionContext } from '../context/SectionContext'
import { SectionInput } from './SectionInput'
import { SectionList } from './SectionList'

export function SectionContent() {
    const { show, endpoint, setItems } = useContext(SectionContext)

    useEffect(() => {
        if (show) {
            fetch(process.env.EXPO_PUBLIC_API_URL + endpoint)
                .then(res => res.json())
                .then(data => setItems(data))
        }
    }, [show])

    if (show === false) return null

    return (
        <>
            <SectionInput />
            <SectionList />
        </>
    )
}