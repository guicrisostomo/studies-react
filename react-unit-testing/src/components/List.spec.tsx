import { render, waitFor, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import List from './List'

describe('List Component', () => {
    
    it('should render list items', async() => {
        const { getByText, queryByText } = render(<List initialItems={['Diego', 'Rodz', 'Mayk']} />)
        
        expect(getByText('Diego')).toBeInTheDocument()
        expect(getByText('Rodz')).toBeInTheDocument()
        expect(getByText('Mayk')).toBeInTheDocument()

        const { rerender } = await render(<List initialItems={['Julia']} />)

        await rerender(<List initialItems={['Julia']} />)

        await expect(screen.getByText('Julia')).toBeInTheDocument()
        await expect(screen.queryByText('Mayk')).toBeInTheDocument()

    })

    it('should be able to add new item to the list', async() => {
        const {getByText, getByPlaceholderText, findByText} = render(<List initialItems={[]}/>)
        
        const inputElement = getByPlaceholderText('Novo item')
        const addButton = getByText('Adicionar');

        await userEvent.click(addButton);

        await userEvent.type(inputElement, 'Novo')

        expect(await findByText('Novo')).toBeInTheDocument()
    })

    it('should be able to remove item from the list', async() => {
        const {queryByText, getAllByText } = render(<List initialItems={['Diego', 'Rodz', 'Mayk']} />)

        const removeButtons = getAllByText('Remover')

        userEvent.click(removeButtons[0])

        await waitFor(() => {
            expect(queryByText('Diego')).not.toBeInTheDocument()
        })
    })
})