import { ImageResponse } from 'next/og';

export const alt = 'Kleios — habits run on proof, not willpower';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
// Required for `output: export` (static HTML export).
export const dynamic = 'force-static';

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(180deg, #ff9870 0%, #ff5b8a 55%, #a558d3 100%)',
          color: '#FFF5E8',
          fontFamily: 'Georgia, serif',
          fontSize: 140,
          letterSpacing: 12,
          fontWeight: 700,
        }}
      >
        KLEIOS
      </div>
    ),
    size,
  );
}
