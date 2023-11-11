import React from "react";
import { Stack, Text, CheckboxGroup, Checkbox } from "@chakra-ui/react";

const Section4 = () => {


  return (
    <Stack minH={'70vh'} spacing='24px' direction={{ base: 'column', md: 'column' }} justify={'center'}>
      <Text
        fontSize='25px'
        maxW='70vw'
        whiteSpace='wrap'
      >
        Berikan tanda pada kotak yang paling sesuai dengan
        keadaan kamu.
      </Text>
      <CheckboxGroup colorScheme='teal' defaultValue={['naruto', 'kakashi']}>
        <Stack spacing={[1, 5]} direction={'column'}>
          <Checkbox size={'lg'} value='one'>Saya mampu untuk menyelesaikan setiap permasalahan pada studi kasus</Checkbox>
          <Checkbox size={'lg'} value='two'>Saya selalu memperhatikan sumber informasi yang saya dapatkan</Checkbox>
          <Checkbox size={'lg'} value='tree'>Jika ada materi yang membuat saya penasaran, maka saya akan mencoba mencari tahu lebih detail</Checkbox>
          <Checkbox size={'lg'} value='four'>Jika ada penyampaian pembicara yang berbeda dengan pendapat saya, saya berani menyampaikannya</Checkbox>
        </Stack>
      </CheckboxGroup>
    </Stack>
  );
};

export default Section4;
