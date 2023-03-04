import { memo, SVGProps } from 'react';

const WorkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={24} cy={24} r={24} fill='white' />
    <path
      d='M29 27.5V29C29 29.6 28.6 30 28 30C27.4 30 27 29.6 27 29V27.5H21V29C21 29.6 20.6 30 20 30C19.4 30 19 29.6 19 29V27.5H17C16.3 27.5 15.6 27.3 15 27V31C15 32.7 16.3 34 18 34H30C31.7 34 33 32.7 33 31V27C32.4 27.3 31.7 27.5 31 27.5H29ZM33 18H29V17C29 15.3 27.7 14 26 14H22C20.3 14 19 15.3 19 17V18H15C14.4 18 14 18.4 14 19V23C14 24.7 15.3 26 17 26H31C32.7 26 34 24.7 34 23V19C34 18.4 33.6 18 33 18ZM27 18H21V17C21 16.4 21.4 16 22 16H26C26.6 16 27 16.4 27 17V18Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(WorkIcon);
export { Memo as WorkIcon };
