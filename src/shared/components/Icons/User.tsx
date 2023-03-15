import { FC, CSSProperties } from 'react';

interface Props {
  style?: CSSProperties;
  color?: string;
}

const UserIcon: FC<Props> = ({ style, color = '#C3CAD9' }) => {
  return (
    <svg
      style={style}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.8958 22.5208C17.9791 22.7917 16.8958 22.9167 15.625 22.9167H9.37496C8.10413 22.9167 7.02079 22.7917 6.10413 22.5208C6.33329 19.8125 9.11454 17.6771 12.5 17.6771C15.8854 17.6771 18.6666 19.8125 18.8958 22.5208V22.5208Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.625 2.08333H9.37504C4.16671 2.08333 2.08337 4.16666 2.08337 9.37499V15.625C2.08337 19.5625 3.27087 21.7187 6.10421 22.5208C6.33337 19.8125 9.11462 17.6771 12.5 17.6771C15.8855 17.6771 18.6667 19.8125 18.8959 22.5208C21.7292 21.7187 22.9167 19.5625 22.9167 15.625V9.37499C22.9167 4.16666 20.8334 2.08333 15.625 2.08333ZM12.5 14.7604C10.4375 14.7604 8.77087 13.0833 8.77087 11.0208C8.77087 8.95833 10.4375 7.29166 12.5 7.29166C14.5625 7.29166 16.2292 8.95833 16.2292 11.0208C16.2292 13.0833 14.5625 14.7604 12.5 14.7604Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.2292 11.0208C16.2292 13.0833 14.5625 14.7604 12.5 14.7604C10.4375 14.7604 8.77087 13.0833 8.77087 11.0208C8.77087 8.95834 10.4375 7.29167 12.5 7.29167C14.5625 7.29167 16.2292 8.95834 16.2292 11.0208Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UserIcon;