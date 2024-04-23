import { ItemsScroll } from '@componets/ItemsScroll'
import { useContext } from 'react'
import { SalesContext } from '../context/SalesContext'
import { SaleOrderButton } from './sale-oreder-button/SaleOrderButton'

const CATEGORIAS = ['Almacén', 'Limpieza', 'Higiene', 'Fiambrería', 'Verduleria', 'Categoria1', 'Categoria2', 'Categoria3']

export function Categories() {
    const { items, setItems } = useContext(SalesContext)

    return (
        <ItemsScroll>
            {
                CATEGORIAS.map((cat) => (
                    <SaleOrderButton
                        key={cat}
                        onPress={() => setItems([...items, { category: cat, price: '' }])}
                        content={cat}
                        condition={false}
                    />
                ))
            }
        </ItemsScroll>
    )
}