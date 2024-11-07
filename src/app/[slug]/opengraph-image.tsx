import { ImageResponse } from 'next/og';
import { getLauncherColor } from '@css-module-reprex/ui';

export const runtime = 'edge';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image(props: { params: { slug: string } }) {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          paddingLeft: '180px',
          fontFamily: 'Manrope',
          backgroundColor: getLauncherColor('canvas'),
        }}
      >
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
          }}
        >
          <h1>{props.params.slug}</h1>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
