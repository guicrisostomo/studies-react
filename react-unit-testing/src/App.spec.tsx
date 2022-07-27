import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App Component', () => {
    
    it('should render list items', () => {
        const { getByText } = render(<App />)

        expect(getByText('Diego')).toBeInTheDocument()
        expect(getByText('Rodz')).toBeInTheDocument()
        expect(getByText('Mayk')).toBeInTheDocument()
    })

    it('should be able to add new item to the list', async() => {
        const {getByText, getByPlaceholderText, findByText} = render(<App />)
        
        const inputElement = getByPlaceholderText('Novo item')
        const addButton = getByText('Adicionar');

        await userEvent.click(addButton);

        await userEvent.type(inputElement, 'Novo')

        expect(await findByText('Novo')).toBeInTheDocument()
    })

    it('should be able to remove item from the list', async() => {
        const {queryByText, getAllByText } = render(<App />)

        const removeButtons = getAllByText('Remover')

        userEvent.click(removeButtons[0])

        await waitFor(() => {
            expect(queryByText('Diego')).not.toBeInTheDocument()
        })
    })
})