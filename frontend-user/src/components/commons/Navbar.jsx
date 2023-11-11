import React from 'react'
import { Spacer, Menu, MenuButton, MenuList, MenuItem, Flex, Image } from '@chakra-ui/react'
import logoTalenesia from '../../assets/images/logo_talenesia.png'

const Navbar = () => {
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
                            alt='Dan Abramov'
                        />
                        Nama Peserta
                    </Flex>
                </MenuButton>
                <MenuList>
                    <MenuItem>Dashboard</MenuItem>
                    <MenuItem>Logout</MenuItem>
                </MenuList>
            </Menu>
        </Flex>
    )
}

export default Navbar