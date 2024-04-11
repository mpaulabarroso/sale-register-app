import { theme } from '@utils/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    button: {
        height: 36,
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: theme.colors.primary,
    },
    text: {
        color: theme.colors.txtSecondary,
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 18,
    },
    input: {
        width: 260,
        height: 36,
        textAlign: 'left',
        borderColor: '#CAC4D0',
        borderWidth: 1,
        paddingHorizontal: 16,
        fontSize: 16,
    },
    contAdd: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 8,
        marginVertical: 4,
        paddingVertical: 12,
        paddingHorizontal: 8,
    }
})