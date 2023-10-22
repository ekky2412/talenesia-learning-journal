import React, { useState } from "react";
import {
    Stack,
    Text,
    Textarea
} from "@chakra-ui/react";


const Section5 = () => {
    // Handle Value TextArea
    let [value5, setValue5] = React.useState('')
    let handleValue5 = (e) => {
        let inputValue = e.target.value
        setValue5(inputValue)
    }


    return (
        <Stack minH={'100vh'} direction={'column'} align={'center'} justify={'center'}>
            <Text
            fontSize='25px'
            maxW='70vw'
            whiteSpace='wrap'
            >
                Apa saja materi yang membuatmu penasaran ingin belajar lebih lagi?
            </Text><br/>
            <Textarea
                value={value5}
                onChange={handleValue5}
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

export default Section5