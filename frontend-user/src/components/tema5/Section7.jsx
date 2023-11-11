import React, { useState } from "react";
import { Stack, Text } from "@chakra-ui/react";
import QuestionTextArea from "../commons/QuestionTextArea";

const Section7 = () => {
  const [value7, setValue7] = useState("");

  const handleValue7 = (e) => {
    setValue7(e.target.value);
  };

  return (
    <Stack minH={'70vh'} maxW='70vw' direction={{ base: 'column', md: 'column' }} justify={'center'} gap={10} >
      <Text fontSize='25px' whiteSpace='wrap' >
        Apa hadiah yang ingin kamu berikan ke dirimu sendiri?
      </Text>
      <Text fontSize={20} fontWeight={400}>
        Bagi Ale, hadiah tidak usah mahal-mahal. Yang penting adalah
        rasa bahagia dan berhasil yang dirasakan saat menikmati
        hadiah tersebut.
        Ssst... jangan bilang-bilang ya... Ale mengajak gebetannya
        jalan-jalan naik motor keliling kota dan makan di warung
        bakmie favorit sebagai hadiah karena telah menyelesaikan
        satu bulan kursus di Talenesia.
      </Text>
      <QuestionTextArea value={value7}
        onValueChange={handleValue7} />
    </Stack>
  );
};

export default Section7;
