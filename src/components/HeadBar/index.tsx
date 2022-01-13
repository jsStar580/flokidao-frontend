import { Box, Center, IconButton, Flex, Button, ButtonGroup } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { FaInfoCircle } from 'react-icons/fa'
import TogglerButton from '../TogglerButton';
import ConnectWallet from '../ConnectWallet';
import * as S from './styles';
import { useEffect, useState } from 'react';

interface Props {
  onShowSidebar: Function
  showSidebarButton?: boolean
}



const Header = ({ showSidebarButton = true, onShowSidebar }: Props) => {

  const [scrollState, setScrollState] = useState(false);

  useEffect(() => {
    document.addEventListener('scroll', (e: Event) => {
      const state = document.scrollingElement?.scrollTop ? document.scrollingElement?.scrollTop : 0;
      if (state > 50) {
        setScrollState(true)
      } else {
        setScrollState(false)
      }
      console.log(scrollState);
    })
  })
  return (
    <S.Container  className={scrollState?`Header solid`:`Header`}>
      <Flex bg="transparent" p={4} color="white" justifyContent="center" className={showSidebarButton?'':'Header-Flex'}>
        <Box flex="1">
          {showSidebarButton && (
            <IconButton
              aria-label=""
              className='headerAction'
              icon={<ChevronRightIcon w={8} h={8} />}
              variant="solid"
              bgColor="#5c82a547"
              onClick={() => { onShowSidebar() }}
            />
          )}
        </Box>
        <Box flex="1" />
        <Center flex="1" h="40px">
          <ButtonGroup spacing="2">
            {/* <TogglerButton /> */}
            <Button className='headerAction' leftIcon={<FaInfoCircle />} size="md" variant="solid" >FlokiDao</Button>
            <ConnectWallet />
          </ButtonGroup>
        </Center>
      </Flex>
    </S.Container>
  )
}

export default Header
