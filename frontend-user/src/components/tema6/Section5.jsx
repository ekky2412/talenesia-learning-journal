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
                Salah satu kunci kesuksesan adalah memiliki "Growth Mindet" 
                atau mental berkembang. Orang-orang yang memiliki growth mindset
                tidak takut untuk gagal, tidak ragu-ragu mengerjakan pekerjaan
                yang sulit, dan selalu percaya bahwa tantangan dan kesulitan
                merupakan kesempatan untuk mereka belajar. <br/>
                Penelitian menemukan bahwa orang yang memiliki growth mindset
                cenderung lebih cepat mencapai kesuksesan dibandingkan
                orang-orang yang memilih untuk mengerjakan hal-hal yang
                sudah dia kuasai saja atau yang dia yakin pasti berhasil
                <br/><br/>Pernahkah kamu gagal?
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