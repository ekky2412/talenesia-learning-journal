import React, { useState } from "react";
import {
    Stack,
    Text,
    Checkbox
} from "@chakra-ui/react";

const checkBox = ['Aku sudah berani berpendapat di dalam kelas'
    , 'Aku mampu menyampaikan pendapat secara runtun (tidak berbelit-belit) '
    , 'Aku sudah berani mengungkapkan pendapatku di dalam kelompok mentoring'
    , 'Aku sudah berani menyampaikan/ presentasi hasil studi kasus di dalam kelas'
]

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
                Berikan tanda pada kotak yang paling sesuai dengan diri kamu
            </Text><br/>
            
            {checkBox.map((cb, index) =>(
                <Checkbox key={index} 
                        value = {index}
                        colorScheme='green'
                        borderRadius={20} 
                        borderColor='teal.400'
                        size='lg'
                        alignSelf="flex-start"> {cb}
                </Checkbox>
            ))}

        </Stack>
    )
}

export default Section6