import React, { useState } from "react";
import { Stack, Text, CheckboxGroup, Checkbox } from "@chakra-ui/react";

const Section7 = (props) => {
  const titles = [
    'Aku sudah berani berpendapat di dalam kelas'
    , 'Aku mampu menyampaikan pendapat secara runtun (tidak berbelit-belit) '
    , 'Aku sudah berani mengungkapkan pendapatku di dalam kelompok mentoring'
    , 'Aku sudah berani menyampaikan/ presentasi hasil studi kasus di dalam kelas'
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
