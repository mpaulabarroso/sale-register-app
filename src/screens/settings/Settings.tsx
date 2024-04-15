import { ContentView } from '@componets/ContentView'
import { SyncSales } from './components/SyncSales'
import { Section } from './components/Section'

export function Settings() {
    return (
        <ContentView>
            <Section
                title='Categorias'
                placeholder='Nueva Categoria...'
                endpoint='/category'
            />
            <Section
                title='Metodo de Pago'
                placeholder='Nueva metodo de pago...'
                endpoint='/payment'
            />
            <SyncSales />
        </ContentView>
    )
}