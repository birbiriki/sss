import { memo, SVGProps } from 'react';

const Rectangle468Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 390 90' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 0H11.8787C17.476 0 22.9235 1.80859 27.4094 5.15624L28.5215 5.98621C43.5528 17.2035 64.2418 16.9356 78.9775 5.33269V5.33269C83.3646 1.87828 88.7861 0 94.37 0H390V90H0V0Z'
      fill='white'
      fillOpacity={0.3}
      style={{
        mixBlendMode: 'overlay',
      }}
    />
    <path
      d='M0 0H11.8787C17.476 0 22.9235 1.80859 27.4094 5.15624L28.5215 5.98621C43.5528 17.2035 64.2418 16.9356 78.9775 5.33269V5.33269C83.3646 1.87828 88.7861 0 94.37 0H390V90H0V0Z'
      stroke='url(#paint0_linear_228_707)'
      style={{
        mixBlendMode: 'overlay',
      }}
    />
    <defs>
      <linearGradient id='paint0_linear_228_707' x1={195} y1={0} x2={195} y2={36} gradientUnits='userSpaceOnUse'>
        <stop stopColor='white' />
        <stop offset={1} stopColor='white' stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Rectangle468Icon);
export { Memo as Rectangle468Icon };
