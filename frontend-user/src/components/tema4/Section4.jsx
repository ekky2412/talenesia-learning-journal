import React, { useState } from "react";
import QuestionTextArea from "../commons/QuestionTextArea";
import { Stack, Text } from "@chakra-ui/react";

const Section4 = (props) => {
  const [data, setData] = useState({
    tipeSoal: 'isian',
    jawaban: ''
  });

  const handleValue = (e) => {
    const newValue = e.target.value;
    setData(prevData => ({
      ...prevData,
      jawaban: newValue
    }));
    props.onSectionDataChange({ ...data, jawaban: newValue });
  };

  return (
    <Stack minH={'70vh'} direction={{ base: 'column', md: 'column' }} justify={'center'} gap={8}>
      <Text
        fontSize='23px'
        maxW='70vw'
        whiteSpace='wrap'
        textAlign={'justify'}
      >
        Bersama Talenesia, minggu ini Ale belajar membuat
        database barang-barang yang ada di kantor.
        Setelah Ale tahu cara membuat database, Ale

        bertekad untuk menerapkan dalam kegiatan sehari-
        hari. Ia pun membuat database untuk mendata

        stok bahan makanan di rumahnya agar terpantau
        tanggal kadaluarsa bahan tersebut.

      </Text>
      <QuestionTextArea
        question="Setelah mempelajari berbagai tugas administrasi, Apa yang akan kamu terapkan di kegiatan sehari-hari untuk meningkatkan keterampilanmu?"
        value={data.jawaban}
        onValueChange={handleValue}
      />
    </Stack>

  );
};

export default Section4;
