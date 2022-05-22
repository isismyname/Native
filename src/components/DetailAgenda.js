import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Box, Heading, Stack } from 'native-base'

export default class DetailAgenda extends Component {
  render() {
    return (
      <View>
        <Box marginY='48' bg="cyan.700" borderRadius={15} fontFamily="RobotoCondensed.700" flex={1} p={10}>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="lg" ml="-2" color='black' >
                Title Agenda
              </Heading>
            </Stack>
            <Text fontWeight="400">
              Lorem ipsum dolor consectetur
            </Text>
            <Text style={{ textAlign:"right"}} >
              6 Seconds Ago
            </Text>
          </Stack>
        </Box>
      </View>
    )
  }
}