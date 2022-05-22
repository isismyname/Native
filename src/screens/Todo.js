import { TextInput, View } from 'react-native'
import React
, { useState }
 from 'react'
import { Box, Button, Divider, Heading, Stack } from 'native-base'
import Axios from 'axios'

export default function Todo() {
  // const [list, setList] = useState('')

  // const submit = () => {
  //   const data = {list}
  //   // console.log('Data into db: ', data)
  //   Axios.post('http://10.0.2.2:5400/activity', data)
  //   // console.log(data)

  //   .then((res) => {
  //     console.log("Result:", res)
  //   })
  //   .catch((err) => {
  //     console.log(err.message)
  //   })
  // }
  // const handleChange = 
  const instState = [{
    title: "Running",
    isCompleted: true
  }, {
    title: "Swimming",
    isCompleted: false
  }, {
    title: "Reading",
    isCompleted: false
  }, {
    title: "Got Nothing",
    isCompleted: false
  }];
  const [list, setList] = React.useState(instState);
  const [inputValue, setInputValue] = React.useState("");

  const addItem = title => {
    setList([...list, {
      title: title,
      isCompleted: false
    }]);
  };

  const handleDelete = index => {
    const temp = list.filter((_, itemI) => itemI !== index);
    setList(temp);
  };

    return (
      <Box safeArea bg='cyan.700'>
        <Box>
          <View style={{marginVertical:20, display: 'flex'}}>
            <TextInput value={inputValue}  onChangeText={(value) => setInputValue(value)} placeholder='Add Activity' style={{ padding: 5, borderRadius:10, backgroundColor:'white'}} />
            <Button onPress={() => {addItem(inputValue); setInputValue('')}} style={{ marginVertical: 10, borderRadius:10, padding: 5, alignItems: 'center'}}>Add</Button>
          </View>
        </Box>
        <Divider style={{color: "white"}} />
        <Box bg="cyan.700" borderRadius={15} fontFamily="RobotoCondensed.700" flex={1} p={10}>
        {list.map((item, itemI) =>(
          <Stack p="4" key={item.title + itemI.toString()} space={3}>
              <Heading size="lg" ml="-2" color='black' >
                {item.title}
              </Heading>
              <Button onPress={() => handleDelete(itemI)}>Delete Activity</Button>
          </Stack>
        ))}
        </Box>
      </Box>
    )
  }