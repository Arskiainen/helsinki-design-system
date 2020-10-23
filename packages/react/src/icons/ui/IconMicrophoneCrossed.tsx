import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export const IconMicrophoneCrossed = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
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
        d="M19,11.5 C19,15.0261219 16.3928118,17.9433024 13.0010101,18.4289666 L12.9998932,21 L16,21 L16,23 L8,23 L8,21 L10.9998932,21 L11,18.42911 C10.4779709,18.3544401 9.97452935,18.2221752 9.49631076,18.038959 L11.1140992,16.4217592 C11.401632,16.4731693 11.6976827,16.5 12,16.5 C14.6887547,16.5 16.8818181,14.3776933 16.9953805,11.7168896 L17,11.5 L19,11.5 Z M19.7928932,2.79289322 L21.2071068,4.20710678 L4.70710678,20.7071068 L3.29289322,19.2928932 L19.7928932,2.79289322 Z M7,11.5 C7,12.0885063 7.10167356,12.6532655 7.28841324,13.1776701 L5.7699238,14.6948072 C5.31220839,13.804027 5.0399257,12.8023134 5.00405902,11.7406498 L5,11.5 L7,11.5 Z M12,1 C13.6568542,1 15,2.34314575 15,4 L15,5.463 L8.99995167,11.464 L8.99995167,4 C8.99995167,2.34314575 10.3431458,1 12,1 Z"
      />
    </g>
  </svg>
);
