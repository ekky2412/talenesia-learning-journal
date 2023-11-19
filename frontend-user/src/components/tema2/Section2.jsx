import { useState } from 'react';
import {
    Flex,
    Stack,
    Text,
    Image,
    Checkbox,
    CheckboxGroup
} from "@chakra-ui/react";
import icon1 from '../../assets/images/happy.png';
import icon2 from '../../assets/images/smile.png';
import icon3 from '../../assets/images/icon3.png';
import icon4 from '../../assets/images/icon4.png';
import icon5 from '../../assets/images/icon5.png';

const icons = [
    { src: icon1, value: "icon 1" },
    { src: icon2, value: "icon 2" },
    { src: icon3, value: "icon 3" },
    { src: icon4, value: "icon 4" },
    { src: icon5, value: "icon 5" }
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
        <Stack minH={'70vh'} spacing='24px' direction={{ base: 'column', md: 'column' }} justify={'center'}>
            <Text
                fontSize='25px'
                maxW='70vw'
                whiteSpace='wrap'
            >
                Gambar mana yang paling menggambarkan
                perasaanmu mengikuti kelas pertama?
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
