import { FC, ReactNode } from 'react';
import Circles from '../../../ui/Circles/Circles.jsx';

interface Props {
    children: ReactNode;
}

const CirclesWrapper: FC<Props> = ({ children }) => {
    return (
        <div className="h-full relative">
            <Circles />
            {children}
        </div>
    );
};

export default CirclesWrapper;
