import { theme } from '@utils/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    buttonSubmit: {
        alignSelf: 'center',
        width: 312,
        height: 48,
        marginVertical: 8,
        paddingVertical: 10,
        paddingHorizontal: 24,
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: 0,
        borderRadius: 28,
        borderStyle: 'solid',
    },
    buttonSubmitDisable: {
        borderWidth: 1,
        borderColor: theme.colors.primary,
        backgroundColor: theme.colors.bgPrimary,
    },
    buttonSubmitActive: {
        backgroundColor: theme.colors.primary,
        borderWidth: 0,
    },
    textLabel: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 20,
    },
    textLabelDisable: {
        color: theme.colors.primary,
    },
    textLabelActive: {
        color: theme.colors.txtSecondary,
    },
})