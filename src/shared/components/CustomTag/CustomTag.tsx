import { Tag, TagCloseButton, TagLabel } from '@chakra-ui/react';
import { FC } from 'react';

interface Props {
  label: string;
  size?: 'sm' | 'md' | 'lg';
  close?: boolean;
  onClose?: Function;
  className?: string;
  onClick?: Function;
}

const CustomTag: FC<Props> = ({
  label,
  size = 'md',
  close,
  onClose,
  className,
  onClick,
}) => {
  return (
    <Tag
      size={size}
      borderRadius="full"
      variant="solid"
      colorScheme="green"
      className={className}
      style={{
        background: 'rgba(27, 165, 33, 0.1)',
        color: '#000',
      }}
      onClick={() => (onClick ? onClick() : null)}
    >
      <TagLabel>{label}</TagLabel>
      {close && <TagCloseButton onClick={() => (onClose ? onClose() : null)} />}
    </Tag>
  );
};

export default CustomTag;
