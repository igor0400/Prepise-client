import { FC, ReactNode } from 'react';

type Themes = 'accent' | 'lined' | 'shadow';

interface Props {
   theme?: Themes;
   children: ReactNode;
}

const Button: FC<Props> = ({ theme = 'accent', children }) => {
    return (
        <button
            className={`btn-${theme} btn px-7 flex items-center font-bold text-base`}
        >
            {children}
        </button>
    );
};

export default Button;
