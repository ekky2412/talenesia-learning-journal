import {
  Flex,
  Button,
  Box,
  Grid,
  GridItem,
  Image,
  Spacer,
  Container,
} from "@chakra-ui/react";
import logoTalenesia from '../assets/images/logo_talenesia.png'
import Header from "../components/tema6/Header"
import Section1 from "../components/tema6/section1";
import Section2 from "../components/tema6/section2";
import Section3 from "../components/tema6/Section3";
import Section4 from "../components/tema6/Section4";
import Section5 from "../components/tema6/Section5";
import Section6 from "../components/tema6/Section6";
import Section7 from "../components/tema6/Section7";

const Tema6 = () => {
    return(
        <Grid
            templateAreas={`"nav"
                            "header"
                            "main"
                            "footer"`}
            h='100vh'
            w='100vw'
            color='blackAlpha.700'
            fontWeight='bold'
        >
            <GridItem p='4' px='8' area={'nav'} >
                <Flex minWidth='max-content' alignItems='center' gap='2'>
                    <Image src={logoTalenesia} w='150px'></Image>
                    <Spacer />
                    <Button colorScheme='teal'>Log in</Button>
                </Flex>
            </GridItem>

            <Container maxW='8xl' centerContent>
                <Header />

                <Box padding='4' color='black'>
                    <GridItem area={'main'}>

                        <Section1/>
                        <Section2/>
                        <Section3/>
                        <Section4/>
                        <Section5/>
                        <Section6/>
                        <Section7/>


                    </GridItem >

                </Box>
            </Container>
            
            
        </Grid >
    )
}

export default Tema6