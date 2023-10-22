import React, { useState } from "react";
import {
    Stack,
    Text,
    Textarea
} from "@chakra-ui/react";

const Section3 = () => {
    // Handle Value TextArea
    let [value3, setValue3] = React.useState('')
    let handleValue3 = (e) => {
        let inputValue = e.target.value
        setValue3(inputValue)
    }

    return (
        <Stack minH={'100vh'} direction={'column'} align={'center'} justify={'center'}>
            <Text
            fontSize='30px'
            maxW='70vw'
            whiteSpace='wrap'
            >
                Materi apa yang paling kamu sukai?
            </Text><br/>
            <Textarea
                value={value3}
                onChange={handleValue3}
                placeholder='Tulis Di Sini'
                size='sm'
                borderWidth={3}
                borderRadius={20}
                borderColor='teal.400' // Set the border color
                boxShadow="md"
            />
        </Stack>
    )
}

export default Section3