/**
 * Real quotes from real people only.
 *
 * Every entry here is published on kleios.app with a name attached, so it has
 * to be something someone actually said and is happy to be quoted on. Paste
 * from App Store reviews, TestFlight feedback, DMs, or texts — lightly trimmed
 * for length is fine, reworded is not.
 *
 * The section renders nothing at all while this array is empty, so it is safe
 * to ship half-finished.
 */
export type Testimonial = {
  /** The quote itself. One or two sentences reads best in the card. */
  quote: string;
  /** How they want to be credited — first name, @handle, whatever they agreed to. */
  name: string;
  /** Optional context under the name: "day 46", "TestFlight", "App Store review". */
  context?: string;
};

export const TESTIMONIALS: Testimonial[] = [];
