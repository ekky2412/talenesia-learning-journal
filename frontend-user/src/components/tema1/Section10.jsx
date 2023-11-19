import React, { useState } from "react";
import QuestionTextArea from "../commons/QuestionTextArea";
import { Stack, Text } from "@chakra-ui/react";

const Section10 = (props) => {
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
        Ale adalah salah satu peserta program pelatihan admin.
        Ale awalnya sangat bersemangat mengikuti kelas karena
        merasa ini akan merubah hidup Ale. Tapi ternyata Ale tidak
        serius mengerjakan tugas, tidak bertanya ketika tidak paham.
        Akhirnya Ale tetap saja kesulitan mendapat kerja.
      </Text>
      <QuestionTextArea
        question="Seperti ale, setiap orang pasti punya kebiasaan yang
        menghambatnya untuk belajar maksimal. Tidak usah malu,
        orang pada umumnya memiliki kebiasaan buruk. Apa
        kebiasaan yang menghambatmu untuk belajar maksimal?"
        value={data.jawaban}
        onValueChange={handleValue}
      />
    </Stack>
  );
};

export default Section10;
