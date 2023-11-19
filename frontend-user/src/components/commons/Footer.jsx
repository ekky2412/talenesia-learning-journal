import React from 'react'
import {
    GridItem,
    Image,
    Stack,
    Text,
    Box,
    Container,
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import logo2 from '../../assets/images/logo-2.png'

const Footer = () => {
    return(
        <GridItem bg='teal.600' area={'footer'} textColor={'white'}>
                <Box>
                    <Container
                        as={Stack}
                        maxW={'6xl'}
                        py={4}
                        direction={{ base: 'column', md: 'row' }}
                        spacing={4}
                        justify={{ base: 'center', md: 'space-between' }}
                        align={{ base: 'center', md: 'center' }}>
                        <Image src={logo2} w='130px'></Image>
                        <Text>© Copyright 2023 by Talenesia</Text>
                        <Stack direction={'row'} spacing={6}>
                            <FaTwitter />
                            <FaYoutube />
                            <FaInstagram />
                        </Stack>
                    </Container>
                </Box>
            </GridItem>
    )
}

export default Footer