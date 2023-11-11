import React, { useState } from "react";
import {
  Stack,
  Text,
  Checkbox
} from "@chakra-ui/react";

const checkBox = ['Pada saat tugas kelompok, aku menghargai bahwa setiap kelompok mempunyai kelebihannya masing-masing'
  , 'Aku juga turut memberikan kontribusi pada saat kerja kelompok'
  , 'Aku mampu menerima pendapat orang lain meskipun berbeda dengan pendapatku'
  , 'Aku tidak takut meminta bantuan saat merasa tidak bisa'
]

const Section6 = () => {
  // Handle Value TextArea
  let [value6, setValue6] = React.useState('')
  let handleValue6 = (e) => {
    let inputValue = e.target.value
    setValue6(inputValue)
  }

  return (
    <Stack minH={'70vh'} direction={{ base: 'column', md: 'column' }} justify={'center'}>
      <Text
        fontSize='30px'
        maxW='70vw'
        whiteSpace='wrap'
      >
        Berikan tanda pada kotak yang paling sesuai dengan diri kamu
      </Text><br />

      {checkBox.map((cb, index) => (
        <Checkbox key={index}
          value={index}
          colorScheme='green'
          borderRadius={20}
          borderColor='teal.400'
          size='lg'
          alignSelf="flex-start"> {cb}
        </Checkbox>
      ))}

    </Stack>
  )
}

export default Section6