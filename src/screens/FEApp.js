import { Animated, PanResponder, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Box } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'

export default function FEApp({navigation}) {
  // pan = new Animated.ValueXY();
  // panResponder = PanResponder.create({
  //   onMoveShouldSetPanResponder: () => true,
  //   onPanResponderMove: Animated.event([
  //     null,
  //     { dx: this.pan.x, dy: this.pan.y }
  //   ]),
  //   onPanResponderRelease: () => {
  //     Animated.spring(this.pan, { toValue: { x: 0, y: 0 } }).start();
  //   }
  // });
    return (
      <Box bg="cyan.700" fontFamily="RobotoCondensed.700" flex={1} p={10}>
          <View style={{marginVertical: 'auto'}} >
            <Box opacity={70} >
              <MaterialIcons name="emoji-people" style={{marginHorizontal: 'auto'}} size={100} color="black" />
            </Box>
            <Text style={{fontSize: 25, fontWeight: "600", textAlign:"center" }} > Welcome </Text>
            <Text style={{ textAlign:"center", marginVertical: 10 }} > We hope our App will helps you to organized and remind your perform or task as well</Text>
            {/* <Animated.View
              style={{
                transform: [{ translateX: this.pan.x }, { translateY: this.pan.y }]
              }}
              {...this.panResponder.panHandlers}
            > */}
              {/* <TouchableOpacity onPress={() => navigation.navigate("Button")}
                style={{ 
                height: 25, 
                paddingTop: 4, 
                marginVertical: 20, 
                backgroundColor: 'rgb(129, 195, 255)',
                borderRadius: 20, 
                }} >
                <Text style={{textAlign: 'center'}}>Calculator</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Todo")}
                style={{ 
                height: 25, 
                paddingTop: 4, 
                marginVertical: 20, 
                backgroundColor: 'rgb(129, 195, 255)',
                borderRadius: 20, 
                }} >
                <Text style={{textAlign: 'center'}}>Todo</Text>
              </TouchableOpacity> */}
            {/* </Animated.View> */}
            
          </View>
      </Box>
    )
}