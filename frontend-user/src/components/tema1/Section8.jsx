import {
  Image,
  Stack,
  Text
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import hero from '../../assets/hero.svg'

const Section8 = () => {
  return (
    <Stack minH={'70vh'} direction={{ base: 'column', md: 'column' }} justifyContent={'center'} alignItems={'center'}>
      <Text
        fontSize='25px'
        width={'40vw'}
        textAlign={'center'}
        textTransform={'uppercase'}
        fontWeight={'800'}
      >
        Setelah Mengenal Potensi
        Diri, Yuk Kita Rencanakan
        Lebih Detail Lagi Agar
        Fullstack Ini Sukses      </Text>
      <Image src={hero} alt="Image Bg Hero" height={'390px'} />
    </Stack >
  )
}

export default Section8