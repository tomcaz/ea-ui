import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import App from './App'

beforeAll(()=> render(<App />))

test('Should have add element', async () => {  
    await userEvent.type(screen.getByPlaceholderText("Add Task"), "Test 1")
    await userEvent.click(screen.getByText('Add'))
    expect(screen.getByText('Test 1')).toHaveClass("form-check-label")
})
