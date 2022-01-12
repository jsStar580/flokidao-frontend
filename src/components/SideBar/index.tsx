import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  VStack,
} from '@chakra-ui/react'
import { ButtonGroup, IconButton } from '@chakra-ui/button';
import { SpinnerIcon } from '@chakra-ui/icons'
import { FaBook, FaDiscord, FaGithub, FaMedium, FaRegListAlt, FaSlidersH, FaStroopwafel, FaTelegram, FaTwitter } from 'react-icons/fa';
import { useTypedSelector } from 'hooks/useTypeSelector';
import { useEffect } from 'react';
import * as S from './styles';

const SidebarContent = ({ onClick }: { onClick: Function }) => (
  <VStack className='sidebar-content'>
    <Link to="/dashboard">
      <Button className="sidebar-link" leftIcon={<FaSlidersH />} variant="link" onClick={() => { onClick() }} w="100%">
        Dashboard
      </Button>
    </Link>
    <Link to="/presale">
      <Button className="sidebar-link" leftIcon={<FaStroopwafel />} variant="link" onClick={() => { onClick() }} w="100%">
        Presale
      </Button>
    </Link>
    <Link to="/stack">
      <Button className="sidebar-link" leftIcon={<FaRegListAlt />} variant="link" onClick={() => { onClick() }} w="100%">
        Stack
      </Button>
    </Link>
    <Link to="/calculator">
      <Button className="sidebar-link" leftIcon={<SpinnerIcon />} variant="link" onClick={() => { onClick() }} w="100%">
        Calculator
      </Button>
    </Link>

    <Link to="/doc">
      <Button mt={50} className="sidebar-link" leftIcon={<FaBook />} variant="link" onClick={() => { onClick() }} w="100%">
        Docs
      </Button>
    </Link>


  </VStack>
)

export default function SideBar(props: any) {

  const { wallet } = useTypedSelector((state) => state.wallet)

  return props.variant === 'sidebar' ? (
    <S.Container>
      <Box
        position="fixed"
        left={0}
        p={5}
        w="280px"
        top={0}
        h="100%"
        className='sidebar'

      >
        <div className="sidebar-logo">
          <Link to="/"><img src='Images/Logo/logo1.png' alt="logo" style={{ width: '60%' }} /></Link>
          <span>Floki Dao</span>
          {(wallet && wallet != "") && <small>
            {String(wallet).substring(0, 6) +
              "..." +
              String(wallet).substring(38)}</small>
          }
        </div>
        <SidebarContent onClick={props.onClose} />
        <Box />
        <Box />
        <div className="sidebar-footer">
          <ButtonGroup spacing="2">
            <Button variant="link"><FaTwitter /></Button>
            <Button variant="link"><FaTelegram /></Button>
            <Button variant="link"><FaMedium /></Button>
          </ButtonGroup>
        </div>
      </Box >
    </S.Container>

  ) : (
    <Drawer isOpen={props.isOpen} placement="left" onClose={() => { props.onClose() }}>
      <DrawerOverlay>
        <DrawerContent bgColor="#496193">
          <DrawerCloseButton onClick={() => { props.onClose() }} />
          <DrawerHeader>
          <Link to="/"><img src='Images/Logo/logo.png' alt="logo" style={{ height: '50px' }} /><br /></Link>
            {(wallet && wallet != "") && <small>
              {String(wallet).substring(0, 6) +
                "..." +
                String(wallet).substring(38)}</small>
            }</DrawerHeader>
          <DrawerBody>
            <SidebarContent onClick={() => { props.onClose() }} />
            <div className="sidebar-footer">
              <ButtonGroup spacing="2">
                <Button variant="link"><FaTwitter /></Button>
                <Button variant="link"><FaTelegram /></Button>
                <Button variant="link"><FaMedium /></Button>
              </ButtonGroup>
            </div>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

//   export default Sidebar