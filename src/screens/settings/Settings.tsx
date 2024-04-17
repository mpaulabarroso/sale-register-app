import { ContentView } from '@componets/ContentView'
import { SyncSales } from './components/SyncSales'
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
            <SyncSales />
        </ContentView>
    )
}