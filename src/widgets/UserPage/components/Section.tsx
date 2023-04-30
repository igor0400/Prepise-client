import { FC, ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
}

const Section: FC<Props> = ({ title, children }) => {
  return (
    <div className="pt-4">
      <h3 className="font-semibold text-base sm:text-lg">{title}</h3>
      {children}
    </div>
  );
};

export default Section;
