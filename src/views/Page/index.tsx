
import { Outlet } from "react-router"
import { useState } from 'react'
import { Box, useBreakpointValue } from '@chakra-ui/react'

import Sidebar from '../../components/SideBar';
import Header from "../../components/HeadBar";

import * as S from './styles';

const smVariant = { navigation: 'drawer', navigationButton: true }
const mdVariant = { navigation: 'sidebar', navigationButton: false }

export default function Page(props:any) {
  const [isSidebarOpen, setSidebarOpen] = useState(true)
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant })

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen)
  }

  return (
    <S.Container>
      <div className="page">
        <Sidebar
          variant={variants?.navigation}
          isOpen={isSidebarOpen}
          onClose={toggleSidebar}
        />
        <Box ml={!variants?.navigationButton ? 280 : 0}>
          <Header
            toggleTheme={props.themeToggle}
            showSidebarButton={variants?.navigationButton}
            onShowSidebar={toggleSidebar}
          />
          <div className="page-container">
            <Outlet />
          </div>
        </Box>
      </div>
    </S.Container>
  )
}
