import { ActionIcon } from '@mantine/core';
import { IconArrowBigDownLine } from '@tabler/icons-react';
import React from 'react';

export const ButtonBottomScroll: React.FC = () => {
  const handleScrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <ActionIcon
      onClick={() => handleScrollToBottom()}
      style={{
        position: 'fixed',
        bottom: '25px',
        right: '30px',
        color: 'white',
        backgroundColor: '#00C48F',
      }}
      size="xl">
      <IconArrowBigDownLine />
    </ActionIcon>
  );
};
