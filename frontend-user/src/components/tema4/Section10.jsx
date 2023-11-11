import React from "react";
import { Text, Stack } from "@chakra-ui/react";

const Section10 = () => {

  return (
    <Stack minH={'70vh'} direction={{ base: 'column', md: 'column' }} justify={'center'} gap={8}>
      <Text
        fontSize='20px'
        maxW='70vw'
        whiteSpace='wrap'
        textAlign={'justify'}
      >
        Wah, tidak terasa sudah sebulan kamu mencatat di kalender
        kebiasaan-kebiasaan baru yang kamu terapkan. Di bulan
        kedua, tantangan belajar tentu saja lebih susah. Mungkin kamu
        menemukan kebiasan lain yang menghambat kamu untuk
        melangkah lebih jauh dalam belajar dan mengembangkan
        karir.
      </Text>
      <Text
        fontSize='20px'
        maxW='70vw'
        whiteSpace='wrap'
        textAlign={'justify'}
      >
        Tuliskan kebiasaan-kebiasaanmu yang ingin kamu ubah!
      </Text>
    </Stack>
  );
};

export default Section10;
