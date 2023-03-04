import { memo, SVGProps } from 'react';

const SubtractIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 390 798' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M194.5 130C266.021 130 324 72.0209 324 0.5C324 0.333252 324 0.166595 323.999 0H390V798H0V0H65.0009C65.0003 0.166595 65 0.333252 65 0.5C65 72.0209 122.979 130 194.5 130Z'
      fill='#262450'
    />
    <path
      d='M194.5 130C266.021 130 324 72.0209 324 0.5C324 0.333252 324 0.166595 323.999 0H390V798H0V0H65.0009C65.0003 0.166595 65 0.333252 65 0.5C65 72.0209 122.979 130 194.5 130Z'
      stroke='url(#paint0_linear_228_644)'
      strokeOpacity={0.5}
      style={{
        mixBlendMode: 'overlay',
      }}
    />
    <defs>
      <linearGradient id='paint0_linear_228_644' x1={195} y1={0} x2={195} y2={268} gradientUnits='userSpaceOnUse'>
        <stop stopColor='white' />
        <stop offset={1} stopColor='white' stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(SubtractIcon);
export { Memo as SubtractIcon };
