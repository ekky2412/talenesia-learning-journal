import React, { useState } from "react";
import QuestionTextArea from "../commons/QuestionTextArea";
import { Stack, Text } from "@chakra-ui/react";

const Section6 = (props) => {
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
        fontSize='25px'
        maxW='70vw'
        whiteSpace='wrap'
      >
        Sebelum mengikuti kelas ini, salah satu peserta bernama
        Ale sudah pernah belajar mengenai profesi menjadi admin.
        Sayangnya beberapa bulan kemudian ia lupa apa yang
        dipelajari karena tidak pernah mempraktekkannya.
      </Text>
      <QuestionTextArea
        question="Supaya belajarmu tidak sia-sia seperti Ale, materi apa
        saja yang akan kamu praktekkan? Bagaimana kamu akan
        mempraktekkannya?"
        value={data.jawaban}
        onValueChange={handleValue}
      />
    </Stack>
  );
};

export default Section6;
