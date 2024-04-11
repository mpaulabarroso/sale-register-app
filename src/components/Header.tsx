import { View, StyleSheet } from 'react-native'
import { useContext } from 'react'
import { theme } from '@utils/theme'
import { MainContext, TABS } from '@context/MainContext'
import { Button } from './Button'


export const Header = () => {
    const { tab, setTab } = useContext(MainContext)

    return (
        <View style={styles.container}>
            {
                TABS.map(item => (
                    <Button key={item}
                        content={item}
                        onPress={() => setTab(item)}
                        styleButton={[
                            styles.tab,
                            { width: `${100 / TABS.length}%` },
                            tab === item ? styles.activeTab : {},
                        ]}
                        styleText={[
                            styles.title,
                            tab === item ? styles.activeTabTitle : {},
                        ]}
                    />
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: theme.colors.bgPrimary,
        height: 64,
    },
    tab: {
        height: 64,
        justifyContent: 'center',
    },
    activeTab: {
        borderBottomColor: theme.colors.primary,
        borderBottomWidth: 2,
    },
    title: {
        textAlign: 'center',
        color: theme.colors.primary,
        fontSize: 18,
        fontWeight: '500',
    },
    activeTabTitle: {
        color: '#185485',
    }
})