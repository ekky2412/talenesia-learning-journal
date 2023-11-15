import React from "react";
import { Text, Stack } from "@chakra-ui/react";

const Section11 = () => {

  return (
    <Stack minH={'70vh'} direction={{ base: 'column', md: 'column' }} justify={'center'} gap={8}>
      <Text
        fontSize='25px'
        maxW='70vw'
        whiteSpace='wrap'
        textAlign={'justify'}
      >
        Jangan khawatir, kita selalu bisa mengganti kebiasaan buruk
        kita dengan kebiasaan pengganti. Ale yang biasanya tidak
        serius mengerjakan tugas, mencoba membagi tugas menjadi
        bagian-bagian yang terasa lebih mudah. Ale pun menjadi
        lebih semangat dan serius mengerjakan tugas.
      </Text>
      <Text
        fontSize='25px'
        maxW='70vw'
        whiteSpace='wrap'
        textAlign={'justify'}
      >
        Tuliskan kebiasaan-kebiasaanmu yang ingin kamu ubah
      </Text>
    </Stack>
  );
};

export default Section11;
