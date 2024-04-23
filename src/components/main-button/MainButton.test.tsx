import React from 'react'
import '@testing-library/jest-native/extend-expect'
import { fireEvent, render } from '@testing-library/react-native'
import { MainButton } from './MainButton'
import { theme } from '@utils/theme'

describe('main button', () => {

    //que renderice sin props
    test('renders correctly with missing props', () => {
        const { getByTestId } = render(<MainButton onPress={() => { }} isValid={false} text='' />)
        const button = getByTestId('mainButton')

        expect(button).toBeDefined()
    })

    //se renderiza con el texto
    test('renders correctly with text', () => {
        const text = 'Confirmar'
        const { getByText } = render(<MainButton onPress={() => { }} isValid={false} text={text} />)
        const button = getByText(text)

        expect(button.props.children).toEqual(text)
        expect(button.props.children).not.toEqual('bad label')
    })

    //se renderizan los estilos del boton inactivo correctamente
    test('renders disable styles correctly', () => {
        const text = 'Confirmar'
        const { getByTestId, getByText } = render(<MainButton onPress={() => { }} isValid={false} text={text} />)
        const button = getByTestId('mainButton')
        const buttonText = getByText(text)

        expect(button).toHaveStyle({
            borderWidth: 1,
            borderColor: theme.colors.primary,
            backgroundColor: theme.colors.bgPrimary,
        })
        expect(buttonText).toHaveStyle({
            color: theme.colors.primary,
        })
    })

    //se renderizan los estilos del boton activo correctamente
    test('renders active styles correctly', () => {
        const text = 'Confirmar'
        const { getByTestId, getByText } = render(<MainButton onPress={() => { }} isValid={true} text={text} />)
        const button = getByTestId('mainButton')
        const buttonText = getByText(text)

        expect(button).toHaveStyle({
            backgroundColor: theme.colors.primary,
            borderWidth: 0,
        })
        expect(buttonText).toHaveStyle({
            color: theme.colors.txtSecondary,
        })
    })

    //se llama la funcion cuando isvalid es true
    test('calls onpress handler when isvalid is true and button is pressed', () => {
        const text = 'Confirmar'
        const onPressMock = jest.fn()
        const { getByTestId } = render(<MainButton onPress={onPressMock} isValid={true} text={text} />)
        const button = getByTestId('mainButton')

        fireEvent.press(button)

        expect(onPressMock).toHaveBeenCalled()
    })

    //la funcion no es llamada cuando isvalid es false
    test('not call onpress handler when isvalid is false and button is pressed', () => {
        const text = 'Confirmar'
        const onPressMock = jest.fn()
        const { getByTestId } = render(<MainButton onPress={onPressMock} isValid={false} text={text} />)
        const button = getByTestId('mainButton')

        fireEvent.press(button)

        expect(onPressMock).not.toHaveBeenCalled()
    })

})