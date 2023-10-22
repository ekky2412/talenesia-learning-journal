import React, { useState } from "react";
import {
    Stack,
    Text,
    Textarea
} from "@chakra-ui/react";

const Section6 = () => {
    // Handle Value TextArea
    let [value6, setValue6] = React.useState('')
    let handleValue6 = (e) => {
        let inputValue = e.target.value
        setValue6(inputValue)
    }

    return (
        <Stack minH={'100vh'} direction={'column'} align={'center'} justify={'center'}>
            <Text
            fontSize='30px'
            maxW='70vw'
            whiteSpace='wrap'
            >
                Saat gagal, apa yang kamu rasakan atau pikirkan?
            </Text><br/>
            <Textarea
                value={value6}
                onChange={handleValue6}
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

export default Section6