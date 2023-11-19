import React, { useState } from "react";
import { Text, Stack } from "@chakra-ui/react";
import QuestionBorderDash from "../commons/QuestionBorderDash";

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
        fontSize='23px'
        maxW='70vw'
        whiteSpace='wrap'
        textAlign={'justify'}
      >
        Minggu ini, Ale bersama dengan tim kelompoknya mengerjakan
        studi kasus bersama. Ale merasa ada teman sekelompoknya
        yang sangat jago membaca petunjuk pada studi kasus dan
        memecahkan masalahnya, di sisi lain Ale juga melihat teman
        lainnya yang pandai dalam menuliskan jawabannya menjadi rapi.
        Ale sadar bahwa setiap orang di dalam kelompok memberikan
        kontribusinya sesuai dengan keahlian masing-masing. Lalu
        Ale kemudian juga merasa perlu memberikan kontribusi di
        kelompoknya.

      </Text>
      <Text
        fontSize='23px'
        maxW='70vw'
        whiteSpace='wrap'
        textAlign={'justify'} >
        Jika kamu mengamati proses kerja kelompok bersama teman
        sekelompokmu
      </Text>

      <QuestionBorderDash
        question="Dari tugas yang diberikan, mana yang merupakan keahlian kamu?"
        value={data.jawaban}
        onValueChange={handleValue}
      />
    </Stack>
  );
};

export default Section6;
