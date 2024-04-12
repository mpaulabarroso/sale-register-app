import { theme } from '@utils/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        padding: 8,
    },
    buttonCont: {
        height: 30,
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: theme.colors.primary,
    },
    buttonText: {
        color: theme.colors.txtSecondary,
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 18,
    },
    input: {
        width: 220,
        height: 36,
        textAlign: 'left',
        borderColor: '#CAC4D0',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 16,
        fontSize: 16,
    },
    contRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 4,
    },
    syncContRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 8,
    }
})