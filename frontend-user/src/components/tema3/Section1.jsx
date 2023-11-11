import {
    Stack,
    Text
} from "@chakra-ui/react";

const Section1 = () => {
    return (
        <Stack minH={'80vh'} direction={{ base: 'column', md: 'row' }} justify={'center'}>
            <Text
                fontSize='25px'
                maxW='70vw'
                whiteSpace='wrap'
            >
                Memantau Tugas di Tema 3
            </Text>
        </Stack>
    )
}

export default Section1