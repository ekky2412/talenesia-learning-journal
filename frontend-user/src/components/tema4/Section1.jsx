import {
    Stack,
    Text
} from "@chakra-ui/react";

const Section1 = () => {
    return (
        <Stack minH={'70vh'} direction={{ base: 'column', md: 'row' }} justify={'center'}>
            <Text
                fontSize='25px'
                maxW='70vw'
                whiteSpace='wrap'
            >
                Memantau Tugas di Tema 4
            </Text>
        </Stack>
    )
}

export default Section1