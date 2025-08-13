import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Contact from '../src/components/Contact';

describe('Contact Component', () => {
  it('renders contact information', () => {
    render(<Contact />);
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    expect(screen.getByText('Chad Hubble')).toBeInTheDocument();
    expect(screen.getByText('Hayden Bellamy')).toBeInTheDocument();
  });

  it('displays email links', () => {
    render(<Contact />);
    expect(screen.getByText('chubble@priority1inc.net')).toBeInTheDocument();
    expect(screen.getByText('chad.hubble@gmail.com')).toBeInTheDocument();
    expect(screen.getByText('hayden.bellamy@priority1inc.net')).toBeInTheDocument();
  });

  it('displays phone numbers', () => {
    render(<Contact />);
    expect(screen.getByText('303-667-9595 (direct)')).toBeInTheDocument();
    expect(screen.getByText('303-847-8919 (direct)')).toBeInTheDocument();
  });
});
