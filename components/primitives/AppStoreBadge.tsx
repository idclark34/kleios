export const APP_STORE_URL = 'https://apps.apple.com/us/app/kleios/id6765974356';

export function AppStoreBadge({ className = '' }: { className?: string }) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download Kleios on the App Store"
      className={`inline-flex rounded-[11px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-cream focus-visible:outline-offset-2 ${className}`}
    >
      <svg
        width="156"
        height="52"
        viewBox="0 0 156 52"
        role="img"
        aria-hidden="true"
        className="block"
      >
        <rect
          x="0.5"
          y="0.5"
          width="155"
          height="51"
          rx="11"
          fill="#000"
          stroke="rgba(255,255,255,0.28)"
        />
        <g transform="translate(17 12) scale(1.15)" fill="#fff">
          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
        </g>
        <text
          x="50"
          y="21"
          fill="#fff"
          fontFamily="-apple-system, Helvetica, Arial, sans-serif"
          fontSize="9"
          letterSpacing="0.2"
        >
          Download on the
        </text>
        <text
          x="49"
          y="40"
          fill="#fff"
          fontFamily="-apple-system, Helvetica, Arial, sans-serif"
          fontSize="20"
          fontWeight="600"
          letterSpacing="-0.5"
        >
          App Store
        </text>
      </svg>
    </a>
  );
}
