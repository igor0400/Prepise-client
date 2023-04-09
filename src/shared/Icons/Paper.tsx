import { FC, CSSProperties } from 'react';

interface Props {
  style?: CSSProperties;
  color?: string;
}

const PaperIcon: FC<Props> = ({ style, color = '#C3CAD9' }) => {
  return (
    <svg
      fill="none"
      style={style}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="m6 22h12c1.1046 0 2-.8954 2-2v-10.17157c0-.53044-.2107-1.03914-.5858-1.41422l-5.8284-5.82842c-.3751-.37508-.8838-.58579-1.4142-.58579h-6.1716c-1.10457 0-2 .89543-2 2v16c0 1.1046.89543 2 2 2z" />
        <path d="m13 2.5v6.5h6" />
        <path d="m8 17h7" />
        <path d="m8 13h7" />
        <path d="m8 9h1" />
      </g>
    </svg>
  );
};

export default PaperIcon;
