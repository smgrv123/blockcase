import React from 'react'
import { useUser, UserButton } from '@clerk/nextjs'
import ParentWrapper from '../components/parentWrapper'
import { Flex, Text } from '@chakra-ui/react'

function Home() {

    const { user } = useUser()

  return (
    <ParentWrapper>
        <Flex flex={1} >
            <Text>{user?.fullName}</Text>
            <UserButton/>
        </Flex>
    </ParentWrapper>
  )
}

export default Home