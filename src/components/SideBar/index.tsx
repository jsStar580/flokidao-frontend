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
import { FaBook, FaBuffer, FaCalculator, FaCog, FaDiscord, FaDonate, FaMedium, FaTelegram, FaTwitter } from 'react-icons/fa';

import * as S from './styles';
import { HiAdjustments, HiLightningBolt, HiOutlineUsers } from 'react-icons/hi';
import { useWeb3Context } from 'hooks';

const SidebarContent = ({ onClick }: { onClick: Function }) => (
  <VStack className='sidebar-content'>
    <Link to="/dashboard">
      <Button className="sidebar-link" leftIcon={<HiAdjustments />} variant="link" onClick={() => { onClick() }} w="100%">
        Dashboard
      </Button>
    </Link>
    <Link to="/presale">
      <Button className="sidebar-link" leftIcon={<FaDonate />} variant="link" onClick={() => { onClick() }} w="100%">
        Presale
      </Button>
    </Link>
    <Link to="/stake">
      <Button className="sidebar-link" leftIcon={<FaBuffer />} variant="link" onClick={() => { onClick() }} w="100%">
        Stake
      </Button>
    </Link>
    <Link to="/Wrap">
      <Button className="sidebar-link" leftIcon={<HiLightningBolt />} variant="link" onClick={() => { onClick() }} w="100%">
        Wrap
      </Button>
    </Link>
    <Link to="/Bond">
      <Button className="sidebar-link" leftIcon={<FaCog />} variant="link" onClick={() => { onClick() }} w="100%">
        Bond
      </Button>
    </Link>
    <Link to="/calculator">
      <Button className="sidebar-link" leftIcon={<FaCalculator />} variant="link" onClick={() => { onClick() }} w="100%">
        Calculator
      </Button>
    </Link>
    <Box height={50} />
    <Link to="/governance">
      <Button  className="sidebar-link" leftIcon={<HiOutlineUsers />} variant="link" onClick={() => { onClick() }} w="100%">
        Governance
      </Button>
    </Link>
    <a href='https://Docs.flokidao.io' target="_blank">
      <Button className="sidebar-link" leftIcon={<FaBook />} variant="link" onClick={() => { onClick() }} w="100%">
        Docs
      </Button>
    </a>


  </VStack>
)

export default function SideBar(props: any) {

  const { address } = useWeb3Context();

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
          <Link to="/"><img src='Images/Logo/logo1.png' alt="logo" style={{ width: '140px' }} /></Link>
          <span>FLOKI DAO</span>
          {(address && address != "") && <small>
            {String(address).substring(0, 6) +
              "..." +
              String(address).substring(38)}</small>
          }
        </div>
        <SidebarContent onClick={props.onClose} />
        <Box />
        <Box />
        <div className="sidebar-footer">
          <ButtonGroup spacing="2">
            <a href='https://twitter.com/TheFlokiDao?t=gpOTMl8Pgd3kLdZpn4i0sw&s=09' target="_blank"><Button variant="link"><FaTwitter /></Button></a>
            <a href='https://discord.gg/C9UYjPXpr8' target="_blank"><Button variant="link"><FaDiscord /></Button></a>
            <a href='https://flokidao.medium.com' target="_blank"><Button variant="link"><FaMedium /></Button></a>
            <a href='https://t.me/theflokidaochat' target="_blank"><Button variant="link"><FaTelegram /></Button></a>
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
            <div className="sidebar-logo">
              <Link to="/"><img src='Images/Logo/logo1.png' alt="logo" style={{ width: '60%' }} /></Link>
              <span>FLOKI DAO</span>
              {(address && address != "") && <small>
                {String(address).substring(0, 6) +
                  "..." +
                  String(address).substring(38)}</small>
              }
            </div>
          </DrawerHeader>
          <DrawerBody className='sidebar-mini'>
            <SidebarContent onClick={() => { props.onClose() }} />
            <div className="sidebar-footer">
              <ButtonGroup spacing="2">
                <a href='https://twitter.com/TheFlokiDao?t=gpOTMl8Pgd3kLdZpn4i0sw&s=09' target="_blank"><Button variant="link"><FaTwitter /></Button></a>
                <a href='https://discord.gg/C9UYjPXpr8' target="_blank"><Button variant="link"><FaDiscord /></Button></a>
                <a href='https://flokidao.medium.com' target="_blank"><Button variant="link"><FaMedium /></Button></a>
                <a href='https://t.me/theflokidaochat' target="_blank"><Button variant="link"><FaTelegram /></Button></a>
              </ButtonGroup>
            </div>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

//   export default Sidebar