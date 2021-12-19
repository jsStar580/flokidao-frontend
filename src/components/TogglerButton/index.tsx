import { HiMoon } from 'react-icons/hi';
import { FaSun } from 'react-icons/fa';

import * as S from './styles';

interface ThemeTogglerProps {
  themeToggler: () => void;
}

function TogglerButton({ themeToggler }: ThemeTogglerProps) {
  return (
    <S.Container>
      <label htmlFor="checkbox" className="switch">
        <input
          id="checkbox"
          type="checkbox"
          onClick={themeToggler}
          onChange={() => false}
          checked={window.localStorage.getItem('theme') === 'light'}
        />
        <S.Icons className="slider round">
          {window.localStorage.getItem('theme') !== 'light' ? (
            <>
              <HiMoon style={{ marginLeft: '6.3px', height: '10px' }} />
            </>
          ) : (
            <>
              <FaSun size={0} style={{ marginLeft: '41px', height: '10px' }} />
            </>
          )}
        </S.Icons>
      </label>
    </S.Container>
  );
}

export default TogglerButton;