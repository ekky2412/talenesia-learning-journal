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
import tema8bg from '../../assets/tema8bg.png'

const Header = () =>{
    return (
        <Box padding='4' color='black'>
            <GridItem area={'header'}>
                <Stack minH={'80vh'} direction={{ base: 'column', md: 'row' }}>
                    <Flex flex={1} align={'center'} justify={'center'}>
                        <Image
                            alt="Login Image"
                            objectFit="cover"
                            src={tema8bg}
                        />
                    </Flex>

                    <Flex p={8} flex={1} align={'center'} justify={'center'}>
                        <Stack spacing={6} w={'full'} maxW={'lg'}>
                            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                                <Text>
                                    Persiapan
                                    <Text color={'teal.400'} as={'span'}>
                                        {' '}Kerja{' '}
                                    </Text>
                                </Text>
                            </Heading>
                            
                            <Stack direction={{ base: 'column', md: 'row' }} align={'center'} justify={'center'}>
                                <Button
                                    rounded={'full'}
                                    bg={'teal.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'teal.500',
                                    }}>
                                    Mulai
                                </Button>
                            </Stack>
                        </Stack>
                    </Flex>
                </Stack>
            </GridItem >

            <GridItem area={'main'}>
                
            </GridItem >
        </Box>
    )
}

export default Header