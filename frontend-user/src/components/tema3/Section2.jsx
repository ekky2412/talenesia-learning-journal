import React, { useState } from "react";
import {
    Flex,
    Stack,
    Text,
    Image,
    Checkbox,
    CheckboxGroup
} from "@chakra-ui/react";
import heart from '../../assets/images/heart.png';
import happy from '../../assets/images/happy.png';
import like from '../../assets/images/like.png';
import sick from '../../assets/images/sick.png';
import sad from '../../assets/images/sad.png';

const icons = [
    { src: heart, value: "icon 1" },
    { src: happy, value: "icon 2" },
    { src: like, value: "icon 3" },
    { src: sick, value: "icon 4" },
    { src: sad, value: "icon 5" }
];

const Section2 = (props) => {
    const [data, setData] = useState({
        tipeSoal: 'reaksi',
        jawaban: ''
    });

    const handleCheckboxChange = (value) => {
        setData(prevData => ({
            ...prevData,
            jawaban: value
        }));
        props.onSectionDataChange({ ...data, jawaban: value });
    };

    return (
        <Stack minH={'70vh'} spacing='24px' direction={{ base: 'column', md: 'column' }} justify={'center'} gap={10}>
            <Text
                fontSize='25px'
                maxW='70vw'
                whiteSpace='wrap'
            >
                Bagaimana perasaanmu saat mengikuti kelas Persiapan Keahlian Sebagai Admin?
            </Text>
            <CheckboxGroup value={data.jawaban}>
                <Flex justifyContent={'space-evenly'} alignItems={'center'}>
                    {icons.map((icon) => (
                        <Flex key={icon.value} direction="column" alignItems="center" gap={5}>
                            <Image borderRadius="full" boxSize="100px" src={icon.src} alt={`icon${icon.value}`} />
                            <Checkbox
                                colorScheme="teal"
                                size="lg"
                                value={icon.value}
                                onChange={(e) => handleCheckboxChange(e.target.value)}
                            ></Checkbox>
                        </Flex>
                    ))}
                </Flex>
            </CheckboxGroup>
        </Stack>
    );
}

export default Section2;
