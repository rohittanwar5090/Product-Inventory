import React from 'react'
import {fireEvent, render ,screen} from '@testing-library/react'
import AboutPage from './AboutPage'
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom'

test('full app rendering/', async () => {
    render(<AboutPage />, {wrapper: BrowserRouter})  
    expect(screen.getByText(/Welcome to the Product Inventory System/i)).toBeInTheDocument()

  })
  

test("carousel", () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    );       
    const carousel = screen.getByTestId('carousel')
    expect(carousel).toBeInTheDocument();        
  });
   
  test('loads items eventually',  () => {
    render( <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
      );    
    fireEvent.click(screen.getByRole('signin'))
    const items =  screen.getByText(/Sign In/)
    expect(items).toBeInTheDocument()
  })
  
  
  