import { ContentView } from '@componets/ContentView'
import { Section } from './components/Section'

export function Settings() {
    return (
        <ContentView>
            <Section
                title='Categorías'
                placeholder='Nueva Categoria...'
                endpoint='/category'
            />
            <Section
                title='Metodo de Pago'
                placeholder='Nuevo metodo de pago...'
                endpoint='/payment'
            />
        </ContentView>
    )
}