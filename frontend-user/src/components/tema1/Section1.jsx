import {
    Image,
    Stack,
    Text
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ImgBakat from '../../assets/images/bakat.png'

const Section1 = () => {
    return (
        <Stack minH={'70vh'} direction={{ base: 'column', md: 'column' }} justifyContent={'center'} alignItems={'center'}>
            <Text
                fontSize='25px'
                maxW='70vw'
                width={'30vw'}
                textAlign={'center'}
            >
                PERTAMA, YUK KITA TES MINAT BAKAT DAHULU DI WEBSITE
            </Text>
            <Link to={'HTTPS://TALENESIA.COM/CEK_BAKAT'} target="_blank">
                <Text
                    fontSize='25px'
                    maxW='70vw'
                    color={'#2b388c'}
                >
                    HTTPS://TALENESIA.COM/CEK_BAKAT
                </Text>
            </Link>
            <Image src={ImgBakat} alt="Image Bg Bakat" height={'400px'} />
        </Stack >
    )
}

export default Section1