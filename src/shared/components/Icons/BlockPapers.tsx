import { FC, CSSProperties } from 'react';

interface Props {
  style?: CSSProperties;
  color?: string;
}

const BlockPapersIcon: FC<Props> = ({ style, color = '#C3CAD9' }) => {
  return (
    <svg
      width="28"
      height="32"
      viewBox="0 0 28 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <g clipPath="url(#clip0_1_14)">
        <path
          d="M17 26H20C21.1046 26 22 25.1046 22 24V13.8284C22 13.298 21.7893 12.7893 21.4142 12.4142L15.5858 6.58579C15.2107 6.21071 14.702 6 14.1716 6H8C6.89543 6 6 6.89543 6 8V11"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 6.5V13H21"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 17H16"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g clipPath="url(#clip1_1_14)">
        <path
          d="M3 31H15C16.1046 31 17 30.1046 17 29V18.8284C17 18.298 16.7893 17.7893 16.4142 17.4142L10.5858 11.5858C10.2107 11.2107 9.702 11 9.1716 11H3C1.89543 11 1 11.8954 1 13V29C1 30.1046 1.89543 31 3 31Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 11.1679V18H16"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 26H12"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 22H12"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 18H6"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g clipPath="url(#clip2_1_14)">
        <path
          d="M22 21H25C26.1046 21 27 20.1046 27 19V8.82843C27 8.29799 26.7893 7.78929 26.4142 7.41421L20.5858 1.58579C20.2107 1.21071 19.702 1 19.1716 1H13C11.8954 1 11 1.89543 11 3V6"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 1.5V8H26"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 12H21"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_14">
          <rect
            width="18"
            height="22"
            fill="white"
            transform="translate(5 5)"
          />
        </clipPath>
        <clipPath id="clip1_1_14">
          <rect
            width="18"
            height="22"
            fill="white"
            transform="translate(0 10)"
          />
        </clipPath>
        <clipPath id="clip2_1_14">
          <rect width="18" height="22" fill="white" transform="translate(10)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BlockPapersIcon;
