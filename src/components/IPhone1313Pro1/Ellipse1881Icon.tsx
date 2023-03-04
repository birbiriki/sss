import { memo, SVGProps } from 'react';

const Ellipse1881Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 58 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={29} cy={9} rx={29} ry={9} fill='#0DA6C2' />
  </svg>
);

const Memo = memo(Ellipse1881Icon);
export { Memo as Ellipse1881Icon };
