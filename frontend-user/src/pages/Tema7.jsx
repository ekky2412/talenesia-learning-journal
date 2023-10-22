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
import { Header, Section1, Section2, Section3, Section4, Section5, Section6, Section7, Section8, Section9, Section10, Section11 } from "../components/tema7";


const Tema7 = () => {
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
                        <Section8/>
                        <Section9/>
                        <Section10/>
                        <Section11/>


                    </GridItem >

                </Box>
            </Container>
            
            
        </Grid >
    )
}

export default Tema7