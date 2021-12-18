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
import { FaDiscord, FaGithub, FaRegListAlt, FaSlidersH, FaStroopwafel, FaTelegram, FaTwitter } from 'react-icons/fa';
import { useTypedSelector } from 'hooks/useTypeSelector';
import { useEffect } from 'react';


const SidebarContent = ({ onClick }: { onClick: Function }) => (
  <VStack>
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
    <div className="sidebar-footer">
      <ButtonGroup spacing="2">
        <IconButton size="sm" aria-label='github' icon={<FaGithub />} />
        <IconButton size="sm" aria-label='twitter' icon={<FaTwitter />} />
        <IconButton size="sm" aria-label='telegram' icon={<FaTelegram />} />
        <IconButton size="sm" aria-label='discord' icon={<FaDiscord />} />
      </ButtonGroup>
    </div>
  </VStack>
)

export default function SideBar(props: any) {

  const { wallet } = useTypedSelector((state) => state.wallet)

  return props.variant === 'sidebar' ? (
    <Box
      position="fixed"
      left={0}
      p={5}
      w="200px"
      top={0}
      h="100%"
      bg="#1a2230"
    >
      <div className="sidebar-logo">
      <img src='Images/Logo/logo.png' alt="logo" style={{height:'50px'}}/><br />
        {(wallet && wallet != "") && <small>
          {String(wallet).substring(0, 6) +
            "..." +
            String(wallet).substring(38)}</small>
        }
      </div>
      <SidebarContent onClick={props.onClose} />
    </Box >
  ) : (
    <Drawer isOpen={props.isOpen} placement="left" onClose={() => { props.onClose() }}>
      <DrawerOverlay>
        <DrawerContent bgColor="#496193">
          <DrawerCloseButton onClick={() => { props.onClose() }} />
          <DrawerHeader>
          <img src='Images/Logo/logo.png' alt="logo" style={{height:'50px'}}/><br />
            {(wallet && wallet != "") && <small>
              {String(wallet).substring(0, 6) +
                "..." +
                String(wallet).substring(38)}</small>
            }</DrawerHeader>
          <DrawerBody>
            <SidebarContent onClick={() => { props.onClose() }} />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

//   export default Sidebar