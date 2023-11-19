import React, { useState } from "react";
import QuestionTextArea from "../commons/QuestionTextArea";
import { Stack, Text } from "@chakra-ui/react";

const Section5 = (props) => {
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
        Ale mengalami kebingungan dengan rumus-rumus excel.
        Meskipun sudah diberikan contoh beberapa kali, Ale tetap
        saja kesulitan dalam menuliskan rumus Excel. Tetapi Ale tidak
        ingin menyerah. Ia menonton ulang video pembelajaran dan
        meminta bantuan mentor.      </Text>
      <QuestionTextArea
        question="Apa yang akan kamu lakukan untuk memahami hal-hal kamu
        masih merasa bingung?"
        value={data.jawaban}
        onValueChange={handleValue}
      />
    </Stack>
  );
};

export default Section5;
