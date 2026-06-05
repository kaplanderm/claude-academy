import { ImageResponse } from 'next/og';

export const alt = 'Claude for Physicians - DermUnbound';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Default social preview image. Latin text only, so it renders without loading a
// Hebrew font (ImageResponse default font has no Hebrew glyphs).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #FFF8F0 0%, #FEF0E1 60%, #FDDCB5 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', height: 14, width: 160, background: '#B5560E', borderRadius: 8 }} />
        <div style={{ marginTop: 32, fontSize: 78, fontWeight: 800, color: '#1a1a2e', lineHeight: 1.1 }}>
          Claude for Physicians
        </div>
        <div style={{ marginTop: 24, fontSize: 36, color: '#4a4a6a' }}>
          Practical AI training. No code required.
        </div>
        <div style={{ marginTop: 'auto', fontSize: 28, color: '#B5560E', fontWeight: 600 }}>
          DermUnbound - academy.dermunbound.com
        </div>
      </div>
    ),
    size
  );
}
