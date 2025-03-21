import { Alert, Button, Image, Pressable, SafeAreaView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, useColorScheme, View} from 'react-native'
import React from 'react'

const App = () => {


  const theme = useColorScheme()

  console.log(theme,"Get Them Value ")


const style = {
  textcontainer:{
    width: "100",
    height: "100",
    backgroundColor:"#fffff"
  }
}




  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text  style={style.textcontainer}>Apsdfsdfp</Text>


<Image 
style= {{width:200,height:300}}
source={{uri:"https://firebasestorage.googleapis.com/v0/b/fir-photoroom-apps.appspot.com/o/Marbal%20%26%20Wood%2Falex-jones-kFxWDfj0pD8-unsplash.jpg?alt=media&token=c1a58079-c6a9-43fb-9462-0a0a5067deb5"}}/>

<Button title='Hi Press Me'></Button>
<TouchableOpacity style= {{padding:10,backgroundColor:"green"}}  onPress={() => Alert.alert("Pressed!!")} > 
<Text style={styles.button2} >Button Me</Text>
</TouchableOpacity>

<TouchableHighlight style= {{padding:30,backgroundColor:"yellow"}} onPress={() => Alert.alert("Java")} >
<Text>Button Me2</Text>
</TouchableHighlight>

<Pressable style={{padding:12, backgroundColor:"green"}} >
  <Text style = {styles.text} >Button3</Text>
   </Pressable>


   {/* <SafeAreaView style={{backgroundColor:"yellow"}} > </SafeAreaView> */}


    </SafeAreaView>
  )





}

export default App

const styles = StyleSheet.create({
mainContainer:{width:"100%",
  height:"100%",
  backgroundColor:"yellow",
  padding:20,gap:20
}
,


 textButtonContainer:{width:"100",height:"50",backgroundColor:"#ffff"},

 text:{
  color:"red",
  fontSize:20,
  fontWeight:"bold"
 },



 button2:{
  padding:10,
  backgroundColor:"red",
  justifyContent:"center",
  alignItems:"center",
  borderRadius:7,
  borderWidth:2,
  borderColor:"red",
}

})

const styles2 = StyleSheet.create({
  textButtonContainer2:{width:"100",height:"50",backgroundColor:"#ffff"} ,
 
 })

