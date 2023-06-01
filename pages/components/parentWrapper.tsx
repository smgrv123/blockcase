import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, IconButton, useColorMode } from '@chakra-ui/react';
import React from 'react';
import styles from '@/styles/Home.module.css';

function ParentWrapper({ children }): React.JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className={styles.main}>
      <Box display={'flex'} p={4} width={'100%'} flexDirection={'column'}>
        <IconButton
          icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
          isRound={true}
          size="lg"
          alignSelf="flex-end"
          onClick={toggleColorMode}
          aria-label={''}
        />
        {children}
      </Box>
    </div>
  );
}

export default ParentWrapper;
