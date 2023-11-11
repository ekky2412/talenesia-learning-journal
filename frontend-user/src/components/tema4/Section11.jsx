import React, { useState } from "react";
import { Stack, Text } from "@chakra-ui/react";

const Section11 = () => {
  const [value11, setValue11] = useState("");

  const handleValue11 = (e) => {
    setValue11(e.target.value);
  };

  return (
    <Stack minH={'70vh'} direction={{ base: 'column', md: 'column' }} justify={'center'} gap={8}>
      <Text
        fontSize='20px'
        maxW='70vw'
        whiteSpace='wrap'
        textAlign={'justify'}
      >
        Dari banyaknya rencana yang akan dilakukan, pilih maksimal
        tiga hal yang akan kamu terapkan selama mengikuti kelas
        kelas intensif ini
      </Text>
    </Stack>
  );
};

export default Section11;
