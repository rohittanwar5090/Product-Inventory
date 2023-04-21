import React from 'react'
import { render ,screen} from '@testing-library/react'
import RegisterPage from './RegisterPage'
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom'



test('full app rendering/', async () => {
    render(<RegisterPage />, {wrapper: BrowserRouter})      
    expect(screen.getByTestId('Register')).toBeInTheDocument()

  })

test('full app child component/', async () => {
    render(<RegisterPage />, {wrapper: BrowserRouter})      
    expect(screen.getByTestId('FirstName')).toBeInTheDocument()

  })
  