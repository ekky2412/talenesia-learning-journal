import {
    Flex,
    Stack,
    Text,
    Image,
    Checkbox
} from "@chakra-ui/react";
import heart from '../../assets/images/heart.png';
import happy from '../../assets/images/happy.png';
import like from '../../assets/images/like.png';
import sick from '../../assets/images/sick.png';
import sad from '../../assets/images/sad.png';
import QuestionTextArea from "../commons/QuestionTextArea";
import { useState } from "react";


const Section2 = () => {
    const [value42, setValue42] = useState("");

    const handleValue42 = (e) => {
        setValue42(e.target.value);
    };
    return (
        <Stack minH={'70vh'} spacing='24px' direction={{ base: 'column', md: 'column' }} justify={'center'}>
            <Text
                fontSize='25px'
                maxW='70vw'
                whiteSpace='wrap'
            >
                Bagaimana perasaanmu saat mengikuti kelas Pengelolaan
                dan Pengorganisiran Aktivitas Kantor?   
            </Text>
            <Flex justifyContent={'space-evenly'} alignItems={'center'}>
                <Flex direction={"column"} alignItems={'center'} gap={5}>
                    <Image
                        borderRadius='full'
                        boxSize='100px'
                        src={heart}
                        alt='heart'
                    />
                    <Checkbox colorScheme="teal" size='lg'></Checkbox>
                </Flex>
                <Flex direction={"column"} alignItems={'center'} gap={5}>
                    <Image
                        borderRadius='full'
                        boxSize='100px'
                        src={happy}
                        alt='happy'
                    />
                    <Checkbox colorScheme="teal" size='lg'></Checkbox>
                </Flex>
                <Flex direction={"column"} alignItems={'center'} gap={5}>
                    <Image
                        borderRadius='full'
                        boxSize='100px'
                        src={like}
                        alt='like'
                    />
                    <Checkbox colorScheme="teal" size='lg'></Checkbox>
                </Flex>
                <Flex direction={"column"} alignItems={'center'} gap={5}>
                    <Image
                        borderRadius='full'
                        boxSize='100px'
                        src={sick}
                        alt='sick'
                    />
                    <Checkbox colorScheme="teal" size='lg'></Checkbox>
                </Flex>
                <Flex direction={"column"} alignItems={'center'} gap={5}>
                    <Image
                        borderRadius='full'
                        boxSize='100px'
                        src={sad}
                        alt='sad'
                    />
                    <Checkbox size='lg'></Checkbox>
                </Flex>
            </Flex>
            <QuestionTextArea
                question="Mengapa kamu memilih gambar itu?"
                value={value42}
                onValueChange={handleValue42}
            />
        </Stack>
    )
}

export default Section2