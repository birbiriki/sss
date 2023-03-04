import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './HomeIndicator.module.css';

interface Props {
  className?: string;
  classes?: {
    homeIndicator?: string;
    root?: string;
  };
}
/* @figmaId 2:648 */
export const HomeIndicator: FC<Props> = memo(function HomeIndicator(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.homeIndicator || ''} ${classes.homeIndicator}`}></div>
    </div>
  );
});
