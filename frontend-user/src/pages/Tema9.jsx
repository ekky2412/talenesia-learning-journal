import { Grid, GridItem, Container, Box, Flex, Button, useToast } from "@chakra-ui/react";
import {
    Section1, Section2, Section3, Section4, Section5, Section6,
    Section7, Section8, Section9
} from "../components/tema9";
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import Navbar from "../components/commons/Navbar";
import { axiosInstance } from "../services/axiosInstance";

const Template = (props) => {
    const [buttonClick, setButtonClick] = useState(true)
    const [hiddenButton, setHiddenButton] = useState(false)
    const toast = useToast()

    const submitButton = () => {
        if (props.section === 1) {
            const data = props.sectionData
            const newData = data.map(({ noTugas, sedangDikerjakan, sudahDikumpulkan, masukan }) => ({
                noTugas,
                sedangDikerjakan,
                sudahDikumpulkan,
                masukan,
            }));
            axiosInstance.post(`journal/tugas/${props.username}/${props.themeid}`,
                newData
            ).then((response) => {
                toast({
                    title: response.data.message,
                    status: 'success',
                    duration: 5000,
                    position: 'top-right',
                    isClosable: true,
                })
                console.log(response)
            }).catch((error) => {
                console.log(error)
            });
        } else {
            axiosInstance.post(`journal/${props.username}/${props.themeid}/${props.section}`,
                (props.sectionData)
            ).then((response) => {
                toast({
                    title: response.data.message,
                    status: 'success',
                    duration: 5000,
                    position: 'top-right',
                    isClosable: true,
                })
            }).catch((error) => {
                console.log(error)
            });
        }
        setButtonClick(false)
    }
    const nextClick = () => {
        props.navigate(`/journal/${props.username}/${props.themeid}/${props.section + 1}`)
        setButtonClick(true)
        setHiddenButton(false)
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
                        <Button colorScheme="teal" hidden={hiddenButton} onClick={submitButton} isDisabled={!buttonClick}>Submit</Button>
                        {props.section < 9 ?
                            <Button colorScheme='teal' isDisabled={buttonClick} onClick={nextClick}>Next</Button>
                            :
                            <Link to='/dashboard'><Button colorScheme="teal" isDisabled={buttonClick}>Close</Button></Link>
                        }
                    </Flex>

                </Box>
            </Container>


        </Grid >

    )
}

const Tema9 = (props) => {
    const [section, setSection] = useState(0)
    const navigate = useNavigate()
    const [sectionData, setSectionData] = useState({})

    const handleSectionData = (data) => {
        setSectionData(data)
    };

    useEffect(() => {
        setSection(props.sectionid)
    }, [props.sectionid])

    switch (section) {
        case 1:
            return (
                <Template section={section} setSection={setSection} navigate={navigate} themeid={props.themeid} username={props.username} sectionData={sectionData}>
                    <Section1 onSectionDataChange={handleSectionData} />
                </Template>
            )
        case 2:
            return (
                <Template section={section} setSection={setSection} navigate={navigate} themeid={props.themeid} username={props.username} sectionData={sectionData}>
                    <Section2 onSectionDataChange={handleSectionData} />
                </Template>
            )
        case 3:
            return (
                <Template section={section} setSection={setSection} navigate={navigate} themeid={props.themeid} username={props.username} sectionData={sectionData}>
                    <Section3 onSectionDataChange={handleSectionData} />
                </Template>
            )
        case 4:
            return (
                <Template section={section} setSection={setSection} navigate={navigate} themeid={props.themeid} username={props.username} sectionData={sectionData}>
                    <Section4 onSectionDataChange={handleSectionData} />
                </Template>
            )
        case 5:
            return (
                <Template section={section} setSection={setSection} navigate={navigate} themeid={props.themeid} username={props.username} sectionData={sectionData}>
                    <Section5 onSectionDataChange={handleSectionData} />
                </Template>
            )
        case 6:
            return (
                <Template section={section} setSection={setSection} navigate={navigate} themeid={props.themeid} username={props.username} sectionData={sectionData}>
                    <Section6 onSectionDataChange={handleSectionData} />
                </Template>
            )
        case 7:
            return (
                <Template section={section} setSection={setSection} navigate={navigate} themeid={props.themeid} username={props.username} sectionData={sectionData}>
                    <Section7 onSectionDataChange={handleSectionData} />
                </Template>
            )
        case 8:
            return (
                <Template section={section} setSection={setSection} navigate={navigate} themeid={props.themeid} username={props.username} sectionData={sectionData}>
                    <Section8 onSectionDataChange={handleSectionData} />
                </Template>
            )
        case 9:
            return (
                <Template section={section} setSection={setSection} navigate={navigate} themeid={props.themeid} username={props.username} sectionData={sectionData}>
                    <Section9 onSectionDataChange={handleSectionData} />
                </Template>
            )

    }
}

export default Tema9