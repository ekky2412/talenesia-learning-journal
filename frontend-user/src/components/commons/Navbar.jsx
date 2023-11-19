import React from 'react'
import { Spacer, Menu, MenuButton, MenuList, MenuItem, Flex, Image } from '@chakra-ui/react'
import logoTalenesia from '../../assets/images/logo_talenesia.png'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../services/AuthContext'

const Navbar = () => {
    const { user, logout } = useAuth()
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <Flex minWidth='max-content' alignItems='center' gap='2'>
            <Image src={logoTalenesia} w='150px'></Image>
            <Spacer />
            <Menu>
                <MenuButton padding={1}>
                    <Flex alignItems={'center'} gap={3}>
                        <Image
                            borderRadius='full'
                            boxSize='40px'
                            src='https://bit.ly/dan-abramov'
                            alt='User Profile'
                        />
                        {user.username}
                    </Flex>
                </MenuButton>
                <MenuList>
                    <Link to='/dashboard'><MenuItem>Dashboard</MenuItem></Link>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </MenuList>
            </Menu>
        </Flex>
    )
}

export default Navbar