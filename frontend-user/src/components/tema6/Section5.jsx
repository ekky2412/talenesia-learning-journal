import React, { useState } from "react";
import { Stack, Text, CheckboxGroup, Checkbox } from "@chakra-ui/react";

const Section5 = (props) => {
  const titles = [
    'Saya mampu untuk menyelesaikan setiap permasalahan pada studi kasus',
    'Saya selalu memperhatikan sumber informasi yang saya dapatkan',
    'Jika ada materi yang membuat saya penasaran, maka saya akan mencoba mencari tahu lebih detail',
    'Jika ada penyampaian pembicara yang berbeda dengan pendapat saya, saya berani menyampaikannya'
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
        Tandai mana saja yang sesuai dengan keadaanmu.
      </Text>
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

export default Section5;
