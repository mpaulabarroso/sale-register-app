import { createDrawerNavigator } from '@react-navigation/drawer'
import { SaleOrder } from '@screens/sale-order/SaleOrder'
import { SalesHistory } from '@screens/sales-history/SalesHistory'

const Drawer = createDrawerNavigator()

export function DrawerNav() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="SaleOrder" component={SaleOrder} />
            <Drawer.Screen name="SalesHistory" component={SalesHistory} />
        </Drawer.Navigator>
    )
}