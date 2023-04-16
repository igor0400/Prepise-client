import Link from 'next/link';
import React, { FC, useMemo } from 'react';
import { parseText } from '../../../../shared';

interface Props {
  description: string;
}

const Description: FC<Props> = ({ description }) => {
  const { texts, links } = useMemo(() => parseText(description), []);

  return (
    <>
      {texts.map((item, i) => (
        <React.Fragment key={i}>
          {item}
          {links && links[i] ? (
            <Link href={links[i].link} className="text-blue-600">
              {links[i].text}
            </Link>
          ) : null}
        </React.Fragment>
      ))}
    </>
  );
};

export default Description;
