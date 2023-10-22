import React, { useState } from "react";
import {
    Stack,
    Text,
    Textarea
} from "@chakra-ui/react";


const Section7 = () => {
    // Handle Value TextArea
    let [value7, setValue7] = React.useState('')
    let handleValue7 = (e) => {
        let inputValue = e.target.value
        setValue7(inputValue)
    }

    return (
        <Stack minH={'100vh'} direction={'column'} align={'center'} justify={'center'}>
            <Text
            fontSize='25px'
            maxW='70vw'
            whiteSpace='wrap'
            >
                Apa yang bisa lakukan untuk mengatasi hambatan tersebut?
            </Text><br/>
            <Textarea
                value={value7}
                onChange={handleValue7}
                placeholder='Tulis Di Sini'
                size='sm'
                borderWidth={3}
                borderRadius={20}
                borderColor='teal.400'
                boxShadow="md"
            />
        </Stack>
    )
}

export default Section7