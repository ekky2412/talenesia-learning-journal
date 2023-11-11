import {
    Stack,
    Text,
} from "@chakra-ui/react";



const Section2 = () => {

    return (
        <Stack minH={'70vh'} spacing='24px' direction={{ base: 'column', md: 'column' }} justify={'center'}>
            <Text
                fontSize='25px'
                maxW='70vw'
                whiteSpace='wrap'
            >
                Bagaimana perasaanmu saat mengikuti kelas
                Membantu Kegiatan HR?
            </Text>
        </Stack>
    )
}

export default Section2