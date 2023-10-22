import React, { useState } from "react";
import {
    Stack,
    Text,
    Textarea
} from "@chakra-ui/react";


const Section4 = () => {
    // Handle Value TextArea
    let [value4, setValue4] = React.useState('')
    let handleValue4 = (e) => {
        let inputValue = e.target.value
        setValue4(inputValue)
    }


    return (
        <Stack minH={'100vh'} direction={'column'} align={'center'} justify={'center'}>
            <Text
            fontSize='30px'
            maxW='70vw'
            whiteSpace='wrap'
            >
                Apa saja hal yang baru saja kamu ketahui setelah mengikuti kelas?
            </Text><br/>
            <Textarea
                value={value4}
                onChange={handleValue4}
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

export default Section4