import React, { useState } from "react";
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
    Link,
    Avatar,
    FormControl,
    FormHelperText,
    InputRightElement,
    Grid,
    GridItem,
    Image,
    Spacer,
    useToast
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import logoTalenesia from '../assets/images/logo_talenesia.png'
import loginbg from '../assets/login.jpg'
import Footer from "../components/commons/Footer";
import { useMediaQuery } from "@chakra-ui/react";
import { axiosInstance } from "../services/axiosInstance";
import { useAuth } from "../services/AuthContext";
import { useNavigate } from "react-router-dom";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
    const [isLargerThanMd] = useMediaQuery("(min-width: 768px)");
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const toast = useToast()
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleShowClick = () => setShowPassword(!showPassword);

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosInstance.post('/login/auth', {
            username: username,
            password: password
        }).then((response) => {
            if (response.data.data.userType === 'user') {
                toast({
                    title: response.data.message,
                    status: 'success',
                    duration: 5000,
                    position: 'top-right',
                    isClosable: true,
                })
                login(response.data.data)
                navigate('/dashboard')

            } else {
                toast({
                    title: 'Login Failed',
                    status: 'error',
                    duration: 5000,
                    position: 'top-right',
                    isClosable: true,
                })
            }
        }
        ).catch((error) =>
            toast({
                title: error.response.data.message,
                status: 'error',
                duration: 5000,
                position: 'top-right',
                isClosable: true,
            }))
    }


    return (
        <Grid
            templateAreas={`"header"
                            "main"
                            "footer"`}
            gridTemplateRows={'80px 1fr 80px'}
            gridTemplateColumns={'1fr'}
            h='120vh'
            color='blackAlpha.700'
            fontWeight='bold'
        >
            <GridItem p='4' px='8' area={'header'} >
                <Flex minWidth='max-content' alignItems='center' gap='2'>
                    <Image src={logoTalenesia} w='150px'></Image>
                </Flex>
            </GridItem>

            <GridItem p='1' px='5' area={'main'}>
                <Stack minH={'80vh'} direction={{ base: 'column', md: 'row' }}>
                    {isLargerThanMd && ( // Render the image only on screens larger than md
                        <Flex flex={1}>
                            <Image
                                alt="Login Image"
                                objectFit="cover"
                                src={loginbg}
                            />
                        </Flex>
                    )}

                    <Flex p={8} flex={1.5} align={'center'} justify={'center'}>
                        <Stack spacing={6} w={'full'} maxW={'lg'} align="center" justify="center">
                            <Avatar bg="teal.500" />
                            <Heading color="teal.400">Masuk Akun Talenesia</Heading>
                            <Box minW={{ base: "100%", md: "468px" }}>
                                <form onSubmit={(e) => handleSubmit(e)} >
                                    <Stack
                                        spacing={7}
                                        p="2rem"
                                        backgroundColor="whiteAlpha.900"
                                        boxShadow="lg"
                                    >
                                        <FormControl>
                                            <InputGroup>
                                                <InputLeftElement
                                                    pointerEvents="none"
                                                    children={<CFaUserAlt color="gray.300" />}
                                                />
                                                <Input
                                                    type="text"
                                                    placeholder="Username"
                                                    value={username}
                                                    onChange={(e) => setUsername(e.target.value)}
                                                />
                                            </InputGroup>
                                        </FormControl>

                                        <FormControl>
                                            <InputGroup>
                                                <InputLeftElement
                                                    pointerEvents="none"
                                                    color="gray.300"
                                                    children={<CFaLock color="gray.300" />}
                                                />
                                                <Input
                                                    type={showPassword ? "text" : "password"}
                                                    placeholder="Password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                                <InputRightElement width="4.5rem">
                                                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                                        {showPassword ? "Hide" : "Show"}
                                                    </Button>
                                                </InputRightElement>
                                            </InputGroup>
                                            <FormHelperText textAlign="right">
                                                <Link>forgot password?</Link>
                                            </FormHelperText>
                                        </FormControl>

                                        <Button
                                            borderRadius={0}
                                            type="submit"
                                            variant="solid"
                                            colorScheme="teal"
                                            width="full"
                                        >Masuk</Button>
                                    </Stack>
                                </form>
                            </Box>
                        </Stack>
                    </Flex>
                </Stack>
            </GridItem>

            <Footer />

        </Grid>
    )

};

export default Login;
