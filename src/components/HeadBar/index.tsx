import { Box, Center, IconButton, Flex, Button, ButtonGroup } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { FaInfoCircle } from 'react-icons/fa'

interface Props {
  onShowSidebar: Function
  showSidebarButton?: boolean
}

const Header = ({ showSidebarButton = true, onShowSidebar }: Props) => {
  return (
    <Flex bg="transparent" p={4} color="white" justifyContent="center">
      <Box flex="1">
        {showSidebarButton && (
          <IconButton
            aria-label=""
            icon={<ChevronRightIcon w={8} h={8} />}
            colorScheme="blue"
            variant="solid"
            bgColor="#5c82a547"
            onClick={()=>{onShowSidebar()}}
          />
        )}
      </Box>
      <Box flex="1" />
      <Center flex="1" h="40px">
        <ButtonGroup spacing="2">
          <Button leftIcon={<FaInfoCircle />} size="md" colorScheme="blue" variant="solid" bgColor="#5c82a547">FLOKIDAO</Button>
          <Button size="md" colorScheme="blue" variant="solid" bgColor="#5c82a547">Connect Wallet</Button>
        </ButtonGroup>
      </Center>
    </Flex>
  )
}

export default Header
