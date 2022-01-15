import { HiMoon } from 'react-icons/hi';
import { FaSun } from 'react-icons/fa';

import * as S from './styles';
import { Button } from '@chakra-ui/react';

interface ThemeTogglerProps {
  themeToggler: () => void;
}

function TogglerButton({ themeToggler }: ThemeTogglerProps) {
  return (
    <S.Container>
      <Button  className="headerAction toggleThemeBtn" onClick={themeToggler}>
        {window.localStorage.getItem('theme') !== 'light' ? (
          <>
            <HiMoon  />
          </>
        ) : (
          <>
            <FaSun />
          </>
        )}
      </Button>
    </S.Container>
  );
}

export default TogglerButton;