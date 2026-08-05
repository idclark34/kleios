import { render, screen } from '@testing-library/react';
import { Closing } from '@/components/sections/Closing';
import { Footer } from '@/components/sections/Footer';

describe('Closing', () => {
  it('renders the DAY 1 eyebrow', () => {
    render(<Closing />);
    expect(screen.getByText('DAY 1')).toBeInTheDocument();
  });

  it('renders the headline with italic "day one."', () => {
    render(<Closing />);
    expect(screen.getByText('Tomorrow can be')).toBeInTheDocument();
    expect(screen.getByText('day one.')).toBeInTheDocument();
  });

  it('links the App Store badge to the listing', () => {
    render(<Closing />);
    expect(screen.getByRole('link', { name: /download kleios on the app store/i })).toHaveAttribute(
      'href',
      'https://apps.apple.com/us/app/kleios/id6765974356',
    );
  });
});

describe('Footer', () => {
  it('renders the KLEIOS wordmark', () => {
    render(<Footer />);
    expect(screen.getByText('KLEIOS')).toBeInTheDocument();
  });

  it('renders PRODUCT, COMPANY, and LEGAL column headings', () => {
    render(<Footer />);
    expect(screen.getByText('PRODUCT')).toBeInTheDocument();
    expect(screen.getByText('COMPANY')).toBeInTheDocument();
    expect(screen.getByText('LEGAL')).toBeInTheDocument();
  });

  it('renders the copyright line', () => {
    render(<Footer />);
    expect(screen.getByText(/© 2026 Kleios/)).toBeInTheDocument();
  });

  it('renders a contact email link', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute('href', 'mailto:hello@kleios.app');
  });

  it('renders the Privacy legal link', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: /privacy/i })).toHaveAttribute('href', '/privacy');
  });
});
