import React from 'react'
import { render ,screen} from '@testing-library/react'
import AddNewProductPage from './AddNewProductPage'
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom'


test('full app rendering/navigating', async () => {
    render(<AddNewProductPage />, {wrapper: BrowserRouter})      
    expect(screen.getByText(/Add New Product/i)).toBeInTheDocument()
  })



test('form', async () => {
    render(<AddNewProductPage />, {wrapper: BrowserRouter})  

    expect(screen.getByText(/Product Name/i)).toBeInTheDocument()
  })


test('form 2', async () => {
    render(<AddNewProductPage />, {wrapper: BrowserRouter})  

    expect(screen.getByText(/Product Description/i)).toBeInTheDocument()
  })
