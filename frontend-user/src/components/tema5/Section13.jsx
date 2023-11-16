import React, { useState } from "react";
import { Stack, Text } from "@chakra-ui/react";
import QuestionTextArea from "../commons/QuestionTextArea";

const Section13 = (props) => {
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
            <QuestionTextArea
                value={data.jawaban}
                onValueChange={handleValue}
            />
        </Stack>
    );
};

export default Section13;
