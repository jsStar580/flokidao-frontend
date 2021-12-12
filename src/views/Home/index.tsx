import { Button, ButtonGroup } from '@chakra-ui/react';
import { IconButton } from "@chakra-ui/button"
import { Link } from 'react-router-dom';
import { FaDiscord, FaGithub, FaTelegram, FaTwitter } from 'react-icons/fa';
export default function Home() {
    return (
        <div className="home">
            <div className="page-header">
                <div className="page-logo">FLOKIDAO</div>
                <div className="page-links">
                <ButtonGroup spacing="2">
                    <IconButton size="sm" colorScheme="facebook" aria-label='github' icon={<FaGithub />} />
                    <IconButton size="sm" colorScheme="twitter" aria-label='twitter' icon={<FaTwitter />} />
                    <IconButton size="sm" colorScheme="telegram" aria-label='telegram' icon={<FaTelegram />} />
                    <IconButton size="sm" colorScheme="whatsapp" aria-label='discord' icon={<FaDiscord />} />
                </ButtonGroup>
                </div>
            </div>
            <div className="section">
                <img src="Images/Home/Chershire_Cat.24ee16b9.jpeg" width="400px" alt="main-logo"/>
            </div>
            <div className="section">
                <ButtonGroup spacing='6'>
                    <Link to="/dashboard">
                        <Button size="md" colorScheme="blue" width='200px' bgColor="#60636896" fontFamily="Montserrat Semibold">Enter App</Button>
                    </Link>
                    <Link to="/presale">
                        <Button size="md" colorScheme='blue' width='200px' bgColor="#60636896" fontFamily="Montserrat Semibold">Presale</Button>
                    </Link>
                </ButtonGroup>
            </div>
            <div className="section">
                <span className="description_title">
                    The Defi Flokidao
                </span>
            </div>
            <div className="section">
                <span className="description_body">
                    Financial tools to grow your wealth-stake<br />
                    and earn compounding interest
                </span>
            </div>
        </div>
    )
}