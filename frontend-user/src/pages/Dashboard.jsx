import {
    Grid, GridItem, Flex, Image, Spacer, Box, Text, Menu,
    MenuButton,
    MenuList, Link as ChakraLink,
    MenuItem, useSteps, Stepper, Step, StepIndicator, StepStatus, StepIcon, StepNumber, StepTitle, StepSeparator
} from '@chakra-ui/react'
import logoTalenesia from '../assets/images/logo_talenesia.png'
import React, { useEffect, useState } from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { steps } from '../components/commons/TemaTitle'
import Footer from '../components/commons/Footer'
import { axiosInstance } from '../services/axiosInstance'
import { useAuth } from '../services/AuthContext'
import Navbar from '../components/commons/Navbar'

const Dashboard = () => {
    const [loading, setLoading] = useState(true)
    const [indexSteps, setIndexStep] = useState(0);
    const { user } = useAuth();

    useEffect(() => {
        axiosInstance.get('/progress/peserta/Rezkyyy')
            .then((response) => {
                let latestIndex = 0;
                for (let i = response.data.data.length - 1; i >= 0; i--) {
                    if (response.data.data[i].finished) {
                        latestIndex = i + 1;
                        break;
                    }
                }
                setIndexStep(latestIndex);
                setLoading(false)
            }).catch((error) =>
                console.error(error))
    }, [loading])


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
            <Navbar />
            
            <GridItem>
                <Flex direction={'column'} gap={10} alignItems={'center'} m={8}>
                    <Text fontSize={'3xl'} color={'#2b388c'}>OUR LEARNING JOURNEY</Text>
                    <Stepper index={indexSteps} orientation='vertical' height='700px' gap='0'>
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
                                    <StepTitle fontSize={'17px'}>
                                        {indexSteps === index ?
                                            (<ChakraLink as={ReactRouterLink} to={`/journal/${user.username}/${index + 1}`}>{step.title}</ChakraLink>)
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
            <Footer />
        </Grid >
    )
}

export default Dashboard