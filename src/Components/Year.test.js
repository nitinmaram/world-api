import { render, screen } from '@testing-library/react';
import Year from './Year';

test('renders learn react link', () => {
    render(<Year handleChange = {()=>{}} yearInput={'as'} onButtonClick={()=>{}}/>);
    const linkElement = screen.getByText(/Submit/i);
    expect(linkElement).toBeInTheDocument();
  });