import React from 'react'
import '@testing-library/jest-native/extend-expect'
import { fireEvent, render } from '@testing-library/react-native'
import { PriceInput } from './PriceInput'

describe('price input', () => {
    const mockItem = {
        name: 'Verduleria',
        id: '',
        ammount: ''
    }

    //renderiza correctamente
    test('renders correctly', () => {
        const { getByPlaceholderText } = render(<PriceInput item={mockItem} />)
        const inputField = getByPlaceholderText('111.11')

        expect(inputField).toBeDefined()
    })

    //cambia el precio del item
    test('update item price when text is entered into TextInput', () => {
        const { getByPlaceholderText } = render(<PriceInput item={mockItem} />)
        const inputField = getByPlaceholderText('111.11')

        fireEvent.changeText(inputField, '234')

        expect(mockItem.ammount).toBe('234')

    })
})