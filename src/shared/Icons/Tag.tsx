import { FC, CSSProperties } from 'react';

interface Props {
  style?: CSSProperties;
  color?: string;
}

const TagIcon: FC<Props> = ({ style, color = '#C3CAD9' }) => {
  return (
    <svg
      style={style}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.58853 16.1729L9.30728 20.8917C10.2406 21.8223 11.5049 22.3449 12.8229 22.3449C14.1409 22.3449 15.4052 21.8223 16.3385 20.8917L20.9114 16.3187C21.8421 15.3854 22.3646 14.1211 22.3646 12.8031C22.3646 11.4851 21.8421 10.2208 20.9114 9.2875L16.1823 4.57917C15.6933 4.08886 15.1069 3.70664 14.4609 3.45722C13.815 3.20781 13.1239 3.09676 12.4323 3.13125L7.22395 3.38125C5.14061 3.475 3.48436 5.13125 3.3802 7.20417L3.1302 12.4125C3.0677 13.8187 3.59895 15.1833 4.58853 16.1729V16.1729Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.1407 12.7354C10.8313 12.7354 11.4937 12.4611 11.9821 11.9727C12.4705 11.4843 12.7448 10.8219 12.7448 10.1313C12.7448 9.44058 12.4705 8.7782 11.9821 8.28983C11.4937 7.80145 10.8313 7.52708 10.1407 7.52708C9.45 7.52708 8.78762 7.80145 8.29924 8.28983C7.81087 8.7782 7.5365 9.44058 7.5365 10.1313C7.5365 10.8219 7.81087 11.4843 8.29924 11.9727C8.78762 12.4611 9.45 12.7354 10.1407 12.7354V12.7354Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M13.7865 17.9438L17.9532 13.7771"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TagIcon;
