import React, { useState } from "react";
import { Stack, Text, Textarea } from "@chakra-ui/react";

const QuestionTextArea = ({ question, value, onValueChange }) => {
  return (
    <Stack minH={"100vh"} direction={"column"} align={"center"} justify={"center"}>
      <Text fontSize="30px" maxW="70vw" whiteSpace="wrap">
        {question}
      </Text>
      <br />
      <Textarea
        value={value}
        onChange={onValueChange}
        placeholder="Tulis Di Sini"
        size="sm"
        borderWidth={3}
        borderRadius={20}
        borderColor="teal.400"
        boxShadow="md"
      />
    </Stack>
  );
};

export default QuestionTextArea;
