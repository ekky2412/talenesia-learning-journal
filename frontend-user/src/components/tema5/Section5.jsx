import React, { useState } from "react";
import { Text, Stack } from "@chakra-ui/react";
import QuestionBorderDash from "../commons/QuestionBorderDash";

const Section5 = () => {
  const [value5, setValue5] = useState("");

  const handleValue5 = (e) => {
    setValue5(e.target.value);
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
        value={value5}
        onValueChange={handleValue5}
      />
      <QuestionBorderDash
        question="Mana yang kamu merasa kesulitan/ butuh bantuan?"
        value={value5}
        onValueChange={handleValue5}
      />
      <QuestionBorderDash
        question="Diantara teman di kelompokmu, siapa yang bisa membantumu?"
        value={value5}
        onValueChange={handleValue5}
      />
      <QuestionBorderDash
        question="Diantara teman di kelompokmu, siapa yang perlu kamu bantu?"
        value={value5}
        onValueChange={handleValue5}
      />
      <QuestionBorderDash
        question="Apa peran kamu pada saat mengerjakan tugas kelompok tersebut?"
        value={value5}
        onValueChange={handleValue5}
      />
      <QuestionBorderDash
        question="Adakah masalah atau kesulitan yang kamu alami saat bekerja dalam
        kelompok? Bagaimana kamu mengatasi masalah itu?"
        value={value5}
        onValueChange={handleValue5}
      />
    </Stack>
  );
};

export default Section5;
