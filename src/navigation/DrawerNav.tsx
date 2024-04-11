import { createDrawerNavigator } from '@react-navigation/drawer'
import { SaleOrder } from '@screens/sale-order/SaleOrder'

const Drawer = createDrawerNavigator()

export function DrawerNav() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="SaleOrder" component={SaleOrder} />
        </Drawer.Navigator>
    )
}