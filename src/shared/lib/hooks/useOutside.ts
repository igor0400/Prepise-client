import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

interface TypeOut {
  ref: any;
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

export const useOutside = (initialIsVisible: boolean = false): TypeOut => {
  const [isActive, setIsActive] = useState<boolean>(initialIsVisible);
  const ref = useRef<HTMLElement>(null);

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return { ref, isActive, setIsActive };
};
