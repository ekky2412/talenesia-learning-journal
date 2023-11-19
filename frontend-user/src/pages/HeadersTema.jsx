import React from 'react'
import {
    Grid, GridItem, Flex, Image, Box, Stack, Heading, Button, Text
} from '@chakra-ui/react'
import { useParams, Link } from 'react-router-dom'
import { steps } from '../components/commons/TemaTitle'
import Navbar from '../components/commons/Navbar'
import { useAuth } from '../services/AuthContext'

const HeadersTema = () => {
    const themeId = useParams().themeid
    const themeShow = steps.filter((step, index) => index + 1 == themeId);

    return (
        <Grid
            templateAreas={`"header"
              "main"
              "footer"`}
            gridTemplateRows={'80px 1fr 80px'}
            gridTemplateColumns={'1fr'}
            h='100vh'
            color='blackAlpha.700'
            fontWeight='bold'
        >
            <GridItem p='3' px='8' area={'header'} >
                <Navbar />
            </GridItem>
            <Box padding='4' color='black'>
                <GridItem area={'header'}>
                    {themeShow.map((theme, index) => (
                        <Stack key={index} minH={'80vh'} direction={{ base: 'column', md: 'row' }}>
                            <Flex flex={1} align={'center'} justify={'center'}>
                                <Image
                                    alt="bg Image"
                                    objectFit="cover"
                                    src={theme.img}
                                />
                            </Flex>

                            <Flex p={9} flex={1} align={'center'} justify={'center'}>
                                <Stack spacing={6} w={'full'} >
                                    <Text textAlign={'center'} color={'#2b388c'} fontSize={'4xl'}>Tema {themeId}</Text>
                                    <Heading fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>
                                        <Text color={'#8a85bf'} textAlign={'center'} >
                                            {theme.title}
                                        </Text>
                                    </Heading>

                                    <Stack direction={{ base: 'column', md: 'row' }} align={'center'} justify={'center'} mt={4}>
                                        <Link to={'./1'}>
                                            <Button
                                                bg={'#2b388c'}
                                                rounded={'full'}
                                                color={'white'}
                                                _hover={{
                                                    bg: '#2b388c',
                                                    opacity: 0.9,
                                                }}>
                                                Mulai
                                            </Button>
                                        </Link>
                                    </Stack>
                                </Stack>
                            </Flex>

                        </Stack>
                    ))}
                </GridItem >
            </Box >

        </Grid >
    )
}

export default HeadersTema