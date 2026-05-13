import { render, screen, fireEvent } from '@testing-library/react';
import { Closing } from '@/components/sections/Closing';
import { Footer } from '@/components/sections/Footer';

describe('Closing', () => {
  it('renders the DAY 1 eyebrow', () => {
    render(<Closing onNotifyClick={() => {}} />);
    expect(screen.getByText('DAY 1')).toBeInTheDocument();
  });

  it('renders the headline with italic "day one."', () => {
    render(<Closing onNotifyClick={() => {}} />);
    expect(screen.getByText('Tomorrow can be')).toBeInTheDocument();
    expect(screen.getByText('day one.')).toBeInTheDocument();
  });

  it('calls onNotifyClick when the Android notify button is clicked', async () => {
    const handler = vi.fn();
    render(<Closing onNotifyClick={handler} />);
    fireEvent.click(screen.getByRole('button', { name: /notify me on android/i }));
    expect(handler).toHaveBeenCalledOnce();
  });

  it('renders an App Store link', () => {
    render(<Closing onNotifyClick={() => {}} />);
    expect(screen.getByRole('link', { name: /app store/i })).toBeInTheDocument();
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
