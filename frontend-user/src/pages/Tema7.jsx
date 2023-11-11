import { Grid, GridItem, Container, Box, Flex, Button } from "@chakra-ui/react";
import {
    Section1, Section2, Section3, Section4, Section5, Section6,
    Section7
} from "../components/tema7";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import Navbar from "../components/commons/Navbar";

const Template = (props) => {

    const prevClick = () => {
        props.navigate(`/journal/${props.themeid}/section/${props.section - 1}`)
    }
    const nextClick = () => {
        props.navigate(`/journal/${props.themeid}/section/${props.section + 1}`)
    }


    return (
        <Grid
            templateAreas={`"nav"
                        "header"
                        "main"
                        "footer"`}
            h='100vh'
            color='blackAlpha.700'
            fontWeight='bold'
        >
            <GridItem p='4' px='8' area={'nav'} >
                <Navbar />
            </GridItem>

            <Container maxW='8xl' centerContent>

                <Box padding='4' color='black'>
                    <GridItem area={'main'}>

                        {props.children}

                    </GridItem >

                    <Flex justifyContent='space-between' p='4'>
                        {props.section > 1 ? <Button onClick={prevClick}>Previous</Button> : <div></div>}
                        {props.section < 7 ? <Button onClick={nextClick}>Next</Button> : <div></div>}

                    </Flex>

                </Box>
            </Container>


        </Grid >

    )
}

const Tema7 = (props) => {
    const [section, setSection] = useState(0)
    const navigate = useNavigate()
    useEffect(() => {
        setSection(props.sectionid)
    }, [props.sectionid])

    switch (section) {
        case 1:
            return (
                <Template section={section} setSection={setSection} navigate={navigate} themeid={props.themeid}>
                    <Section1 />
                </Template>
            )
        case 2:
            return (
                <Template section={section} setSection={setSection} navigate={navigate} themeid={props.themeid}>
                    <Section2 />
                </Template>
            )
        case 3:
            return (
                <Template section={section} setSection={setSection} navigate={navigate} themeid={props.themeid}>
                    <Section3 />
                </Template>
            )
        case 4:
            return (
                <Template section={section} setSection={setSection} navigate={navigate} themeid={props.themeid}>
                    <Section4 />
                </Template>
            )
        case 5:
            return (
                <Template section={section} setSection={setSection} navigate={navigate} themeid={props.themeid}>
                    <Section5 />
                </Template>
            )
        case 6:
            return (
                <Template section={section} setSection={setSection} navigate={navigate} themeid={props.themeid}>
                    <Section6 />
                </Template>
            )
        case 7:
            return (
                <Template section={section} setSection={setSection} navigate={navigate} themeid={props.themeid}>
                    <Section7 />
                </Template>
            )
    }
}

export default Tema7