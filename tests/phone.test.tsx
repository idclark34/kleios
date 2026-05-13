import { render, screen } from '@testing-library/react';
import { Phone } from '@/components/primitives/Phone';

describe('Phone', () => {
  it('renders children inside the phone frame', () => {
    render(<Phone><div data-testid="screen-content">hi</div></Phone>);
    expect(screen.getByTestId('screen-content')).toBeInTheDocument();
  });

  it('applies a left tilt class when tilt="left"', () => {
    const { container } = render(<Phone tilt="left"><div /></Phone>);
    expect(container.firstChild).toHaveClass('-rotate-[5deg]');
  });

  it('applies a right tilt class when tilt="right"', () => {
    const { container } = render(<Phone tilt="right"><div /></Phone>);
    expect(container.firstChild).toHaveClass('rotate-[5deg]');
  });

  it('applies no tilt class when tilt="none" or omitted', () => {
    const { container: explicit } = render(<Phone tilt="none"><div /></Phone>);
    const { container: omitted } = render(<Phone><div /></Phone>);
    expect(explicit.firstChild).not.toHaveClass('-rotate-[5deg]');
    expect(explicit.firstChild).not.toHaveClass('rotate-[5deg]');
    expect(omitted.firstChild).not.toHaveClass('-rotate-[5deg]');
    expect(omitted.firstChild).not.toHaveClass('rotate-[5deg]');
  });
});
