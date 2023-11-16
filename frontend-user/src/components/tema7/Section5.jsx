import React, { useState } from "react";
import QuestionTextArea from "../commons/QuestionTextArea";

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
    <QuestionTextArea
      question="Untuk menghadapi tantangan yang ada, Ale perlu untuk meletakkan HP jauh-jauh selama kelas berlangsung agar tidak terganggu dengan notifikasinya. Apa yang akan kamu lakukan untuk mengatasi tantanganmu saat belajar?"
      value={data.jawaban}
      onValueChange={handleValue}
    />
  );
};

export default Section5;