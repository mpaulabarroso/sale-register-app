import { createDrawerNavigator } from '@react-navigation/drawer'
import { CategoryReport } from '@screens/reports/CategoryReport'
import { PaymentReport } from '@screens/reports/PaymentReport'
import { SaleOrder } from '@screens/sale-order/SaleOrder'
import { SalesHistory } from '@screens/sales-history/SalesHistory'
import { Settings } from '@screens/settings/Settings'

const Drawer = createDrawerNavigator()

export function DrawerNav() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="SaleOrder"
                component={SaleOrder}
                options={{ drawerLabel: 'Nueva Venta', headerTitle: 'Nueva Venta' }}
            />
            <Drawer.Screen
                name="SalesHistory"
                component={SalesHistory}
                options={{ drawerLabel: 'Historial', headerTitle: 'Historial' }}
            />
            <Drawer.Screen
                name="PaymentReport"
                component={PaymentReport}
                options={{ drawerLabel: 'Reporte Pagos', headerTitle: 'Reporte Pagos' }}
            />
            <Drawer.Screen
                name="CategoryReport"
                component={CategoryReport}
                options={{ drawerLabel: 'Reporte categorias', headerTitle: 'Reporte categorias' }}
            />
            <Drawer.Screen
                name="Settings"
                component={Settings}
                options={{ drawerLabel: 'Configuración', headerTitle: 'Configuración' }}
            />
        </Drawer.Navigator>
    )
}
