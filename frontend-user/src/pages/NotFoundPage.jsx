import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { IoHome } from "react-icons/io5";
import { Link } from 'react-router-dom';


const NotFoundPage = () => {
  return (
    <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'} minH={'100vh'}>
      <Text letterSpacing={30} fontFamily={'fantasy'} fontSize={'100'}>4<span style={{ color: 'teal' }}>0</span>4 </Text>
      <Text fontSize={50} color={'teal'}>| Page <span style={{ color: 'black', fontWeight: '800' }}>Not</span> Found |</Text>
      <Link to={'/dashboard'}>
        <Button leftIcon={<IoHome />} colorScheme={'teal'} mt={10}>Back to Dashboard</Button>
      </Link>
    </Flex >
  )
}

export default NotFoundPage