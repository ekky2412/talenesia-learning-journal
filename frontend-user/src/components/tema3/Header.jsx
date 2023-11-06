import {
    Flex,
    Heading,
    Button,
    Stack,
    Box,
    GridItem,
    Image,
    Text,
} from "@chakra-ui/react";
import tema3bg from '../../assets/tema3bg.png'

const Header = () => {
    return (
        <Box padding='4' color='black'>
            <GridItem area={'header'}>
                <Stack minH={'80vh'} direction={{ base: 'column', md: 'row' }}>
                    <Flex flex={1} align={'center'} justify={'center'}>
                        <Image
                            alt="Login Image"
                            objectFit="cover"
                            src={tema3bg}
                        />
                    </Flex>

                    <Flex p={9} flex={1} align={'center'} justify={'center'}>
                        <Stack spacing={6} w={'full'} >
                            <Text textAlign={'center'} color={'#2b388c'} fontSize={'4xl'}>Tema 3</Text>
                            <Heading fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>
                                <Text color={'#8a85bf'} >
                                    Mengerjakan Tugas-Tugas Administratif
                                </Text>
                            </Heading>

                            <Stack direction={{ base: 'column', md: 'row' }} align={'center'} justify={'center'} mt={4}>
                                <Button
                                    rounded={'full'}
                                    width={'30%'}
                                    bg={'#2b388c'}
                                    color={'white'}
                                    _hover={{
                                        opacity: 0.9,
                                    }}>
                                    Mulai
                                </Button>
                            </Stack>
                        </Stack>
                    </Flex>
                </Stack>
            </GridItem >
        </Box >
    )
}

export default Header