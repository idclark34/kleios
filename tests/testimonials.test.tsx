import { render, screen } from '@testing-library/react';
import type { Testimonial } from '@/content/testimonials';
import { Testimonials } from '@/components/sections/Testimonials';

// vi.mock is hoisted above the imports, so the array it closes over has to be
// created by vi.hoisted — a plain const here would not exist yet when the
// factory runs.
const { mockList } = vi.hoisted(() => ({ mockList: [] as Testimonial[] }));
vi.mock('@/content/testimonials', () => ({ TESTIMONIALS: mockList }));

describe('Testimonials', () => {
  beforeEach(() => {
    mockList.length = 0;
  });

  it('renders nothing while there are no quotes', () => {
    const { container } = render(<Testimonials />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders a card per quote once populated', () => {
    mockList.push(
      { quote: 'It is the only tracker I have not quit.', name: 'Sam', context: 'day 46' },
      { quote: 'The AI caught me faking it. Fair enough.', name: '@rou' },
    );
    render(<Testimonials />);
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
    expect(screen.getByText(/only tracker I have not quit/)).toBeInTheDocument();
    expect(screen.getByText('Sam')).toBeInTheDocument();
    expect(screen.getByText('day 46')).toBeInTheDocument();
  });

  it('omits the context line when a quote has none', () => {
    mockList.push({ quote: 'Genuinely good.', name: '@rou' });
    render(<Testimonials />);
    expect(screen.getByText('@rou')).toBeInTheDocument();
    expect(screen.queryByText('undefined')).not.toBeInTheDocument();
  });
});
