import React from 'react'
import {
    Grid,
    GridItem,
    Button,
    Flex,
    useBreakpointValue,
    Spacer,
    Image,
    Stack,
    Heading,
    Text,
    Box,
    Container,
    SimpleGrid,
    HStack,
    VStack,
    Icon,
    Card,
    CardBody,
    CardHeader,
    Avatar,
    Center
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import logoTalenesia from '../assets/images/logo_talenesia.png'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import logo2 from '../assets/images/logo-2.png'
import heroSvg from '../assets/hero.svg'
import habibie from '../assets/images/habibie.png'
import oprah from '../assets/images/oprah.png'
import { Link } from 'react-router-dom'


const jurnalFill = ['Tujuan belajar di fullstack'
    , 'Habit Tracker'
    , 'Pertanyaan reflektif'
    , 'Checklist tugas'
    , 'Checklist Behaviour'
    , 'Catatan yang bisa digunakan untuk mencatat materi']

const Homepage = () => {
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
            <GridItem p='4' px='8' area={'header'} >
                <Flex minWidth='max-content' alignItems='center' gap='2'>
                    <Image src={logoTalenesia} w='150px'></Image>
                    <Spacer />
                    <Link to={'/login'}>
                        <Button colorScheme='teal'>Log in</Button>
                    </Link>
                </Flex>
            </GridItem>

            <GridItem area={'main'}>
                <Stack minH={'80vh'} direction={{ base: 'column', md: 'row' }}>
                    <Flex p={8} flex={1} align={'center'} justify={'center'}>
                        <Stack spacing={6} w={'full'} maxW={'lg'}>
                            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                                <Text
                                    as={'span'}
                                    position={'relative'}
                                    color={'black'}
                                    _after={{
                                        content: "''",
                                        width: 'full',
                                        height: useBreakpointValue({ base: '20%', md: '30%' }),
                                        position: 'absolute',
                                        bottom: 1,
                                        left: 0,
                                        zIndex: -1,
                                    }}>
                                    Learning
                                    <Text color={'teal.400'} as={'span'}>
                                        {' '}Journal
                                    </Text>
                                </Text>
                                <br />{' '}

                            </Heading>
                            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'black.200'}>
                                Jurnal belajar ini bertujuan untuk membantu kamu untuk
                                merefleksikan perjalanan belajar di fullstack bersama
                                Talenesia. Jurnal ini berisi beberapa pertanyaan yang perlu
                                dijawab. Tenang, tidak ada penilaian dari jawaban di jurnal ini.
                                Semua jawaban adalah benar.
                            </Text>
                            <Stack direction={{ base: 'column', md: 'row' }}>
                                <Button
                                    rounded={'full'}
                                    bg={'teal.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'teal.500',
                                    }}>
                                    Next Step
                                </Button>
                            </Stack>
                        </Stack>
                    </Flex>
                    <Flex flex={1}>
                        <Image
                            alt={'Login Image'}
                            objectFit={'cover'}
                            src={heroSvg}
                        />
                    </Flex>
                </Stack>

                <Box py={7} bg={'#eef8f7'}>
                    <Stack spacing={4} textAlign={'center'}>
                        <Heading fontSize={'4xl'}>Learning Jurnal ini berisi apa?</Heading>
                    </Stack>
                    <Container maxW={'5xl'} my={8} >
                        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
                            {jurnalFill.map((fill, index) => (
                                <HStack key={index} align={'top'}>
                                    <Box color={'green.400'} px={2}>
                                        <Icon as={CheckCircleIcon} />
                                    </Box>
                                    <VStack align={'start'}>
                                        <Text fontWeight={600}>{fill}</Text>
                                    </VStack>
                                </HStack>
                            ))}
                        </SimpleGrid>
                    </Container>
                </Box>

                <Box py={7} m={0}>
                    <Stack spacing={2} align={'center'}>
                        <Heading>Taukah kamu?</Heading>
                        <Text color="teal.400">Menulis jurnal adalah
                            rahasia sukses mereka.</Text>

                    </Stack>
                    <SimpleGrid spacing={5} templateColumns='repeat(auto-fill, minmax(30%, 1fr))' py={8}>
                        <Card>
                            <CardHeader>
                                <Center>
                                    <Avatar size='2xl' name='Segun Adebayo' src={oprah} />
                                </Center>
                            </CardHeader>
                            <CardBody>
                                <Text>Oprah tumbuh dari
                                    keluarga yang miskin
                                    dan tidak punya banyak
                                    kesempatan mendapat
                                    akses pendidikan yang baik.
                                    Namun, dari menuliskan
                                    pemikiran, perasaan, dan
                                    pengalaman pahitnya, ia
                                    malah bisa melihat dengan
                                    jeli kelemahan diri. Hal ini
                                    mendorong dia untuk terus
                                    belajar dan bertumbuh.</Text>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <Center>
                                    <Avatar size='2xl' name='Segun Adebayo' src={habibie} />
                                </Center>
                            </CardHeader>
                            <CardBody>
                                <Text>Siapa yang tidak kenal
                                    ilmuwan dan presiden
                                    Indonesia yang telah banyak
                                    mencetak sejarah ini. Beliau
                                    juga memiliki kebiasaan
                                    menulis jurnal. Bahkan
                                    menulis jurnal membantu
                                    dia untuk bangkit dan
                                    memiliki semangat hidup
                                    saat dirinya terpuruk pasca
                                    kepergian Ibu Ainun Habibie.</Text>
                            </CardBody>
                        </Card>
                    </SimpleGrid>
                </Box >
            </GridItem >
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

export default Homepage