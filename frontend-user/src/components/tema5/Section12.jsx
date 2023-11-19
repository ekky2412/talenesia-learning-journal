import React from "react";
import { Text, Stack, Image } from "@chakra-ui/react";
import img6 from '../../assets/images/tema6.png';

const Section12 = () => {

    return (
        <Stack minH={'70vh'} direction={{ base: 'column', md: 'column' }} justify={'center'} gap={3} textAlign={'center'}>
            <Text fontSize='40px' >
                HEBAT!
            </Text>
            <Text fontSize='30px' maxW={'35vw'} textAlign={'center'}>
                Berikan Apresiasi Kepada Diri Kamu Karena Sudah Satu Bulan Mengikuti Pelatihan Intensif
            </Text>
            <Image src={img6} alt="imgTema6" />
        </Stack>
    );
};

export default Section12;
