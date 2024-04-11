import { Button } from '@componets/Button'
import { ItemsScroll } from '@componets/ItemsScroll'
import { styles } from '../utils/buttonStyles'
import { useContext } from 'react'
import { SalesContext } from '../context/SalesContext'

const CATEGORIAS = ['Almacén', 'Limpieza', 'Higiene', 'Fiambrería', 'Verduleria', 'Categoria1', 'Categoria2', 'Categoria3']

export function Categories() {
    const { items, setItems } = useContext(SalesContext)

    return (
        <ItemsScroll>
            {
                CATEGORIAS.map((cat) => (
                    <Button
                        key={cat}
                        styleButton={[styles.button]}
                        styleText={[styles.textLabel]}
                        onPress={() => setItems([...items, {category: cat, price: ''}])}
                        content={cat}
                    />
                ))
            }
        </ItemsScroll>
    )
}