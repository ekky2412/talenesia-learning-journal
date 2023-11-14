import React, { useState } from "react";
import QuestionTextArea from "../commons/QuestionTextArea";
import { Stack } from "@chakra-ui/react";

const Section7 = () => {
  const [value7, setValue7] = useState("");

  const handleValue7 = (e) => {
    setValue7(e.target.value);
  };

  return (
    <Stack gap={10}>
      <QuestionTextArea
        question="
      Apa pendapat yang sudah kamu sampaikan ke dalam kelas / sesi kelompok?
      "

        value={value7}
        onValueChange={handleValue7}
      />

      <QuestionTextArea
        question="
      Bagaimana respon orang lain atas pendapatmu?
      "

        value={value7}
        onValueChange={handleValue7}
      />
    </Stack>
  );
};

export default Section7;
