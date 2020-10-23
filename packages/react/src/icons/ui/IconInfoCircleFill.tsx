import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export const IconInfoCircleFill = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
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
        d="M12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 Z M13,10 L13,16.5 L15,16.5 L15,18 L9,18 L9,16.5 L11,16.5 L11,11.5 L9,11.5 L9,10 L13,10 Z M11.8125239,6 C12.5373649,6 13.125,6.58759799 13.125,7.3125 C13.125,8.03735415 12.5373649,8.625 11.8125239,8.625 C11.0876351,8.625 10.5,8.03735415 10.5,7.3125 C10.5,6.58759799 11.0876351,6 11.8125239,6 Z"
      />
    </g>
  </svg>
);
