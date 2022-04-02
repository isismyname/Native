import { HStack, Text, VStack } from 'native-base'
import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Feather } from '@expo/vector-icons'; 

export default function Button() {

    const [count, setCount] =  useState([]);
    const [result, setResult] = useState('');
    
    let joinnumber = ""
    function getResult() {
        for(let i = 0; i < count.length ; i++){
            joinnumber = joinnumber + count[i]
        }
        const exe = eval(joinnumber);
        setResult(" = " + exe);
    }
    function clear() {
        setCount(count.slice(0, -1))
    }

  return (
      <View>
          <HStack marginX={15} color="cyan.400" marginTop={10} >
              <Text style={{
                  fontSize: 20,
                  width:"100%",
                  height: 100,
                  paddingHorizontal: 5,
                  textAlign: "right", 
                  borderRadius:10 , 
                  backgroundColor:"black"}} color="cyan.800" fontFamily="body.700" > {count} {result} </Text>
          </HStack>
          <HStack marginX={15} justifyContent="space-between" color="cyan.400" marginTop={10} >
              <TouchableOpacity onPress={() => clear()} style={{
                  alignItems: "flex-end",
                  paddingHorizontal: 10,
                //   width:"100%",
                  paddingVertical: 7.5,
                  textAlign:"center", 
                  borderRadius:10 , 
                  backgroundColor:"black"}} color="cyan.800"> <Feather name="delete" size={20} color="cyan" /> </TouchableOpacity>

              <TouchableOpacity onPress={() => setCount([])} style={{
                  alignItems: "flex-end",
                  paddingHorizontal: 10,
                //   width:"100%",
                  paddingVertical: 7.5,
                  textAlign:"center", 
                  borderRadius:10 , 
                  backgroundColor:"black"}} color="cyan.800">Clear</TouchableOpacity>

          </HStack>
          <HStack space={3} justifyContent="space-between" marginX={15} color="cyan.400" marginTop={10} >
              <TouchableOpacity onPress={() => setCount([...count, 1])} style={{
                  width:60,
                  paddingVertical: 7.5,
                  textAlign:"center", 
                  borderRadius:10 , 
                  backgroundColor:"black"}} color="cyan.800">1</TouchableOpacity>

              <TouchableOpacity onPress={() => setCount([...count, 2])} style={{
                  width:60,
                  paddingVertical: 7.5,
                  textAlign:"center", 
                  borderRadius:10 , 
                  backgroundColor:"black"}}>2</TouchableOpacity>

              <TouchableOpacity onPress={() => setCount([...count, '-'])} style={{
                  width:60,
                  paddingVertical: 7.5,
                  textAlign:"center", 
                  borderRadius:10 , 
                  backgroundColor:"black"}}>-</TouchableOpacity>

              <TouchableOpacity onPress={() => setCount([...count, '+'])} style={{
                  width:60,
                  paddingVertical: 7.5,
                  textAlign:"center", 
                  borderRadius:10 , 
                  backgroundColor:"black"}}>+</TouchableOpacity>

          </HStack>
          <HStack space={3} justifyContent="space-between" marginX={15} color="cyan.400" marginTop={10} >
              <TouchableOpacity onPress={() => setCount([...count, 3])} style={{
                  width:60,
                  paddingVertical: 7.5,
                  textAlign:"center", 
                  borderRadius:10 , 
                  backgroundColor:"black"}}>3</TouchableOpacity>

              <TouchableOpacity onPress={() => setCount([...count, 4])} style={{
                  width:60,
                  paddingVertical: 7.5,
                  textAlign:"center", 
                  borderRadius:10 , 
                  backgroundColor:"black"}}>4</TouchableOpacity>

              <TouchableOpacity onPress={() => setCount([...count, '/'])} style={{
                  width:60,
                  paddingVertical: 7.5,
                  textAlign:"center", 
                  borderRadius:10 , 
                  backgroundColor:"black"}}>/</TouchableOpacity>

              <TouchableOpacity onPress={() => setCount([...count, '*'])} style={{
                  width:60,
                  paddingVertical: 7.5,
                  textAlign:"center", 
                  borderRadius:10 , 
                  backgroundColor:"black"}}>*</TouchableOpacity>

          </HStack>
          <HStack space={3} justifyContent="space-between" marginX={15} color="cyan.400" marginTop={10} >
              <TouchableOpacity onPress={() => setCount([...count, 5])} style={{
                  width:60,
                  paddingVertical: 7.5,
                  textAlign:"center", 
                  borderRadius:10 , 
                  backgroundColor:"black"}}>5</TouchableOpacity>

              <TouchableOpacity onPress={() => setCount([...count, 6])} style={{
                  width:60,
                  paddingVertical: 7.5,
                  textAlign:"center", 
                  borderRadius:10 , 
                  backgroundColor:"black"}}>6</TouchableOpacity>

              <TouchableOpacity onPress={() => setCount([...count, '%'])} style={{
                  width:60,
                  paddingVertical: 7.5,
                  textAlign:"center", 
                  borderRadius:10 , 
                  backgroundColor:"black"}}>%</TouchableOpacity>

              <TouchableOpacity onPress={() => getResult()} style={{
                  width:60,
                  paddingVertical: 7.5,
                  textAlign:"center", 
                  borderRadius:10 , 
                  backgroundColor:"black"}}>=</TouchableOpacity>

          </HStack>
          <HStack space={3} justifyContent="space-between" marginX={15} color="cyan.400" marginTop={10} >
              <TouchableOpacity onPress={() => setCount([...count, 7])} style={{
                  width:60,
                  paddingVertical: 7.5,
                  textAlign:"center", 
                  borderRadius:10 , 
                  backgroundColor:"black"}}>7</TouchableOpacity>

              <TouchableOpacity onPress={() => setCount([...count, 8])} style={{
                  width:60,
                  paddingVertical: 7.5,
                  textAlign:"center", 
                  borderRadius:10 , 
                  backgroundColor:"black"}}>8</TouchableOpacity>

              <TouchableOpacity onPress={() => setCount([...count, 9])} style={{
                  width:60,
                  paddingVertical: 7.5,
                  textAlign:"center", 
                  borderRadius:10 , 
                  backgroundColor:"black"}}>9</TouchableOpacity>

              <TouchableOpacity onPress={() => setCount([...count, 0])} style={{
                  width:60,
                  paddingVertical: 7.5,
                  textAlign:"center", 
                  borderRadius:10 , 
                  backgroundColor:"black"}}>0</TouchableOpacity>

          </HStack>
          <HStack marginX={15} color="cyan.400" marginTop={10} >
          </HStack>
      </View>
  )
}