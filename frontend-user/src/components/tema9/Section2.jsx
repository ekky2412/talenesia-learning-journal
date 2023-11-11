import {
    Stack,
    Text
} from "@chakra-ui/react";


const Section2 = () => {
    return (
        <Stack minH={'70vh'} direction={{ base: 'column', md: 'row' }} justify={'center'}>
            <Text
                fontSize='25px'
                maxW='70vw'
                whiteSpace='wrap'
            >
                Bagaimana perasaanmu saat mengikuti kelas
                Persiapan Kerja?
            </Text>
        </Stack>
    )
}

export default Section2