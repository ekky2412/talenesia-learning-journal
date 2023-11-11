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
        Tandai mana saja yang sesuai dengan keadaanmu.
      </Text>
      <CheckboxGroup colorScheme='teal' defaultValue={['naruto', 'kakashi']}>
        <Stack spacing={[1, 5]} direction={'column'}>
          <Checkbox size={'lg'} value='one'>Aku sudah berani berpendapat di dalam kelas</Checkbox>
          <Checkbox size={'lg'} value='two'>Aku sudah berani bertanya dalam group mentoring</Checkbox>
          <Checkbox size={'lg'} value='tree'>Aku sudah berani mengungkapkan pendapatku kepada di group mentoring</Checkbox>
          <Checkbox size={'lg'} value='four'>Aku sudah berani mengungkapkan pendapatku kepada mentor</Checkbox>
        </Stack>
      </CheckboxGroup>
    </Stack>
  );
};

export default Section4;
