import React from 'react'
import Button from './src/components/Button'
import { Box, NativeBaseProvider } from 'native-base'

export default function Container() {
  return (
      <NativeBaseProvider>
          <Box safeArea bg="cyan.500" flex={1} p={10} >
              <Button />
          </Box>
      </NativeBaseProvider>
  )
}
