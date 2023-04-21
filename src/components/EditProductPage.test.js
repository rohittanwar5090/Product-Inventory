import React from 'react'
import { render ,screen} from '@testing-library/react'
import EditProductPage from './EditProductPage'
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom'

test('full app rendering/navigating',  () => {
    render(<EditProductPage />, {wrapper: BrowserRouter})      
    expect(screen.getByText(/Edit Product/i)).toBeInTheDocument()
  })

  test('loads child items ',  () => {
    render( <MemoryRouter>
        <EditProductPage />
      </MemoryRouter>
      );
    const items =  screen.getByText(/Sign In/)
    expect(items).toBeInTheDocument()
  })


