import {
    Grid, GridItem, Flex, Image, Spacer, Box, Container, Stack, Text, Menu,
    MenuButton,
    MenuList, Link as ChakraLink,
    MenuItem, useSteps, Stepper, Step, StepIndicator, StepStatus, StepIcon, StepNumber, StepTitle, StepSeparator
} from '@chakra-ui/react'
import logoTalenesia from '../assets/images/logo_talenesia.png'
import logo2 from '../assets/images/logo-2.png'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'

const Dashboard = () => {

    const steps = [
        { title: 'Sesi Perkenalan' },
        { title: 'Berkarir Sebagai Admin' },
        { title: 'Persiapan Keahlian Sebagai Admin' },
        { title: 'Mengerjakan Tugas-Tugas Administratif' },
        { title: 'Pengelolaan dan Pengorganisiran Aktivitas Kantor' },
        { title: 'Mengurus Sarana dan Prasarana Kantor' },
        { title: 'Mengurus Keuangan Operasional Kantor' },
        { title: 'Membantu Kegiatan HR' },
        { title: 'Persiapan Kerja' }
    ]

    const { activeStep } = useSteps({
        index: 1,
        count: steps.length,
    })

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
            </GridItem>

            <GridItem>
                <Flex direction={'column'} gap={10} alignItems={'center'} m={8}>
                    <Text fontSize={'3xl'} color={'#2b388c'}>OUR LEARNING JOURNEY</Text>
                    <Stepper index={activeStep} orientation='vertical' height='700px' gap='0'>
                        {steps.map((step, index) => (
                            <Step key={index}>
                                <StepIndicator>
                                    <StepStatus
                                        complete={<StepIcon />}
                                        incomplete={<StepNumber />}
                                        active={<StepNumber />}
                                    />
                                </StepIndicator>

                                <Box>
                                    <StepTitle>
                                        {activeStep === index ?
                                            (<ChakraLink as={ReactRouterLink} to={`/journal/${index + 1}`}>{step.title}</ChakraLink>)
                                            :
                                            (step.title)
                                        }
                                    </StepTitle>
                                </Box>

                                <StepSeparator />
                            </Step>
                        ))}
                    </Stepper>
                </Flex>
            </GridItem>

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
        </Grid >
    )
}

export default Dashboard