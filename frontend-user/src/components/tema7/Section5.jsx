import React, { useState } from "react";
import QuestionTextArea from "../commons/QuestionTextArea";

const Section5 = () => {
  const [value5, setValue5] = useState("");

  const handleValue5 = (e) => {
    setValue5(e.target.value);
  };

  return (
    <QuestionTextArea
      question="
      Salah satu kunci kesuksesan adalah memiliki 'Growth Mindet'
        atau mental berkembang. Orang-orang yang memiliki growth mindset
        tidak takut untuk gagal, tidak ragu-ragu mengerjakan pekerjaan
        yang sulit, dan selalu percaya bahwa tantangan dan kesulitan
        merupakan kesempatan untuk mereka belajar.
        Penelitian menemukan bahwa orang yang memiliki growth mindset
        cenderung lebih cepat mencapai kesuksesan dibandingkan
        orang-orang yang memilih untuk mengerjakan hal-hal yang
        sudah dia kuasai saja atau yang dia yakin pasti berhasil.
        Pernahkah kamu gagal?
      "

      value={value5}
      onValueChange={handleValue5}
    />
  );
};

export default Section5;