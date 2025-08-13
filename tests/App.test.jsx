import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { App } from '../src/App';
import Contact from '../src/components/Contact';
import About from '../src/components/About2';

describe('App Component', () => {
  const renderApp = () => {
    return render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  };

  it('renders without crashing', async () => {
    renderApp();
    expect(screen.getByText(/Jones Logistics Corp/i)).toBeInTheDocument();
  });

  it('has working navigation links', () => {
    renderApp();
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    // We expect two contact links (nav and footer)
    const contactLinks = screen.getAllByRole('link', { name: /contact/i });
    expect(contactLinks).toHaveLength(2);
  });

  it('displays footer content', () => {
    renderApp();
    expect(screen.getByText(/Jones Logistics, Inc/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /back to top/i })).toBeInTheDocument();
  });

  it('renders about page at root path', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/Our team has over 50 years/i)).toBeInTheDocument();
  });

  it('renders contact page at /contact path', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/Let's discuss your transportation needs/i)).toBeInTheDocument();
  });
});
