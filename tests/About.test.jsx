import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from '../src/components/About2';

describe('About Component', () => {
  it('renders main headings', () => {
    render(<About />);
    expect(screen.getByText('Jones Logistics')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Special Projects')).toBeInTheDocument();
    expect(screen.getByText('Service')).toBeInTheDocument();
  });

  it('displays company description', () => {
    render(<About />);
    expect(screen.getByText(/Jones Logistics Corp is an agency owned by Chad Hubble/i)).toBeInTheDocument();
  });

  it('has View details buttons', () => {
    render(<About />);
    const buttons = screen.getAllByText('View details »');
    expect(buttons).toHaveLength(3);
  });
});
