import React from 'react'
import { render, fireEvent, cleanup, waitForElement, getAllByText } from '@testing-library/react'
import Button from './Button'

afterEach(cleanup)
it('should text', () => {
    const {getByTestId} = render(<Button text="hello" />)
    expect(getByTestId('test-id')).toHaveTextContent('hello')
});

it('changes text when button is clicked', async() => {
    const { getByText, getByTestId} = render(<Button text="hello" />)
    fireEvent.click(getByText('click me'))
    const printedText = await waitForElement(() => getByText('Hey you clicked!'))
    expect(printedText).toBeInTheDocument()
});