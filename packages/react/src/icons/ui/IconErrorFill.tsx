import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export const IconErrorFill = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
  <svg
    className={classNames(styles.icon, styles[size], className)}
    style={style}
    viewBox="0 0 24 24"
    {...rest}
    role="img"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fillRule="evenodd">
      <rect width="24" height="24" />
      <path
        fill="currentColor"
        d="M11.1749534,3.45608205 C11.5239234,2.86969084 12.3977071,2.8487483 12.7841638,3.39325442 L12.8250466,3.45608205 L21.8770534,18.6666084 C22.2201691,19.2431624 21.8055019,19.9510257 21.123493,19.997576 L21.0520068,20 L2.94799316,20 C2.24813009,20 1.7986969,19.3113552 2.09013491,18.7266878 L2.1229466,18.6666084 L11.1749534,3.45608205 Z M13,16 L13,18 L11,18 L11,16 L13,16 Z M13,8.5 L13,14.5 L11,14.5 L11,8.5 L13,8.5 Z"
      />
    </g>
  </svg>
);
