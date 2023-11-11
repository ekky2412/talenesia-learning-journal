import React, { useState } from "react";
import { Stack, Text, Textarea } from "@chakra-ui/react";

const QuestionBorderDash = ({ question, value, onValueChange }) => {
  return (
    <Stack direction={"column"} paddingStart={10}>
      <Text fontWeight={500} fontSize="18px" maxW="70vw" whiteSpace="wrap" textAlign={'justify'}>
        {question}
      </Text>
      <Textarea
        value={value}
        onChange={onValueChange}
        placeholder="Tulis Di Sini"
        size="sm"
        borderWidth={3}
        borderStyle={'dashed'}
        borderRightRadius={20}
        borderColor="teal.400"
        boxShadow="md"
      />
    </Stack>
  );
};

export default QuestionBorderDash;
