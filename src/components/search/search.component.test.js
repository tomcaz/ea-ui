import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { SearchComponent } from './search.component'

test('Search should have called', async () => {  
    const handleSearch = jest.fn()
    render(<SearchComponent handleSearch={handleSearch} />)
    await userEvent.type(screen.getByPlaceholderText("Search..."), "Task")

    expect(handleSearch).toHaveBeenCalledWith("Task")
})