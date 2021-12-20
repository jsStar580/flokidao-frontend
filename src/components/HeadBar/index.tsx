import { Box, Center, IconButton, Flex, Button, ButtonGroup } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { FaInfoCircle } from 'react-icons/fa'
import TogglerButton from '../TogglerButton';
import ConnectWallet from '../ConnectWallet';
import * as S from './styles';

interface Props {
  onShowSidebar: Function
  showSidebarButton?: boolean
}

const Header = ({ showSidebarButton = true, onShowSidebar }: Props) => {

  return (
    <S.Container>
    <Flex bg="transparent" p={4} color="white" justifyContent="center">
      <Box flex="1">
        {showSidebarButton && (
          <IconButton
            aria-label=""
            className='headerAction'
            icon={<ChevronRightIcon w={8} h={8} />}
            variant="solid"
            bgColor="#5c82a547"
            onClick={()=>{onShowSidebar()}}
          />
        )}
      </Box>
      <Box flex="1" />
      <Center flex="1" h="40px">
        <ButtonGroup spacing="2">
          {/* <TogglerButton /> */}
          <Button className='headerAction' leftIcon={<FaInfoCircle />} size="md"  variant="solid" >FlokiDao</Button>
          <ConnectWallet/>
        </ButtonGroup>
      </Center>
    </Flex>
    </S.Container>
  )
}

export default Header
