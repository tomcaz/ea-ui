import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { AddTaskComponent } from './add-task.component'

test('Input should show error', async () => {  
    render(<AddTaskComponent />)
    await userEvent.click(screen.getByText('Add'))

    expect(screen.getByTestId('addComponentDiv')).toHaveClass('error')
})

test('Input should not show', async () => {  
    const handleFilter = jest.fn()
    render(<AddTaskComponent handleAdd={handleFilter} />)
    await userEvent.type(screen.getByPlaceholderText("Add Task"), "Test 1")
    await userEvent.click(screen.getByText('Add'))

    expect(screen.getByTestId('addComponentDiv')).not.toHaveClass('error')
    expect(screen.getByPlaceholderText("Add Task")).toHaveValue('')
    expect(handleFilter).toHaveBeenCalledWith("Test 1")
})