import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import About from '../src/components/About3';

describe('About Component (About3)', () => {
  it('renders hero and services headings', () => {
    render(<About />);
    expect(
      screen.getByRole('heading', { name: /welcome to jones logistics/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /our services/i })
    ).toBeInTheDocument();
  });

  it('shows company description in hero', () => {
    render(<About />);
    expect(
      screen.getByText(/priority 1, inc\./i)
    ).toBeInTheDocument();
  });

  it('renders service tabs and switches content', async () => {
    const user = userEvent.setup();
    render(<About />);

    // Tabs are rendered as role="tab"
    expect(screen.getByRole('tab', { name: /experience/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /special projects/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /services/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /warehousing/i })).toBeInTheDocument();

    // Switch to Special Projects and assert section heading appears
    await user.click(screen.getByRole('tab', { name: /special projects/i }));
    expect(
      screen.getByRole('heading', { name: /special projects/i })
    ).toBeInTheDocument();
  });
});
