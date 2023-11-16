import React, { useState } from "react";
import { Stack, Text, CheckboxGroup, Checkbox } from "@chakra-ui/react";

const Section7 = (props) => {
  const titles = [
    'Pada saat tugas kelompok, aku menghargai bahwa setiap kelompok mempunyai kelebihannya masing-masing'
    , 'Aku juga turut memberikan kontribusi pada saat kerja kelompok'
    , 'Aku mampu menerima pendapat orang lain meskipun berbeda dengan pendapatku'
    , 'Aku tidak takut meminta bantuan saat merasa tidak bisa'
  ]

  const [data, setData] = useState({
    tipeSoal: 'pilihan',
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
    <Stack minH={'70vh'} spacing='24px' direction={{ base: 'column', md: 'column' }} justify={'center'} >
      <Text fontSize='25px' maxW='70vw' whiteSpace='wrap'>
        Berikan tanda pada kotak yang paling sesuai dengan diri kamu      </Text>
      <CheckboxGroup colorScheme='teal' value={data.jawaban}>
        <Stack spacing={[1, 5]} direction={'column'}>
          {titles.map((label, index) => (
            <Checkbox key={index} size={'lg'} value={label} onChange={(e) => handleCheckboxChange(e.target.value)}>
              {label}
            </Checkbox>
          ))}
        </Stack>
      </CheckboxGroup>
    </Stack >
  );
};

export default Section7;
