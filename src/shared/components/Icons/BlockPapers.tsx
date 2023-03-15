import { FC, CSSProperties } from 'react';

interface Props {
  style?: CSSProperties;
  color?: string;
}

const BlockPapersIcon: FC<Props> = ({ style, color = '#C3CAD9' }) => {
  return (
    <svg
      style={style}
      viewBox="0 0 28 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 21H25C26.1046 21 27 20.1046 27 19V8.82843C27 8.29799 26.7893 7.78929 26.4142 7.41421L20.5858 1.58579C20.2107 1.21071 19.702 1 19.1716 1H13C11.8954 1 11 1.89543 11 3V19C11 20.1046 11.8954 21 13 21Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 1V8H26"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 16H22"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 12H22"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 8H16"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="15" y="10" width="5" height="4" rx="2" fill="white" />
      <rect x="13" y="7" width="5" height="4" rx="2" fill="white" />
      <rect x="6" y="7" width="10" height="7" rx="2" fill="white" />
      <rect x="6" y="12" width="16" height="14" rx="4" fill="white" />
      <path
        d="M8 26H20C21.1046 26 22 25.1046 22 24V13.8284C22 13.298 21.7893 12.7893 21.4142 12.4142L15.5858 6.58579C15.2107 6.21071 14.702 6 14.1716 6H8C6.89543 6 6 6.89543 6 8V24C6 25.1046 6.89543 26 8 26Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 6V13H21"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 21H17"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 17H17"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 13H11"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="1" y="12" width="14" height="14" rx="4" fill="white" />
      <rect x="1" y="17" width="16" height="14" rx="4" fill="white" />
      <path
        d="M3 31H15C16.1046 31 17 30.1046 17 29V18.8284C17 18.298 16.7893 17.7893 16.4142 17.4142L10.5858 11.5858C10.2107 11.2107 9.702 11 9.1716 11H3C1.89543 11 1 11.8954 1 13V29C1 30.1046 1.89543 31 3 31Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 11V18H16"
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
    </svg>
  );
};

export default BlockPapersIcon;
