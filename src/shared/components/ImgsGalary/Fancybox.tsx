import React, { useRef, useEffect, FC } from 'react';

import { Fancybox as NativeFancybox } from '@fancyapps/ui';
import { ComponentOptionsType as FancyboxOptionsType } from '@fancyapps/ui/types/Fancybox/options';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

interface Props {
  children?: React.ReactNode;
  delegate?: string;
  options?: Partial<FancyboxOptionsType>;
  className?: string;
}

const Fancybox: FC<Props> = (props) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const delegate = props.delegate ?? '[data-fancybox]';
    const options = props.options ?? {};

    NativeFancybox.bind(container, delegate, options);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  });

  return (
    <div ref={containerRef} className={props?.className}>
      {props.children}
    </div>
  );
};

export default Fancybox;
