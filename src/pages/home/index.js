import { useState } from 'react'
import {View, Text, StyleSheet, Image, Button, TouchableOpacity, Modal} from 'react-native'
import Slider from '@react-native-community/slider'
import {ModalPassword} from '../../../src/Component/modal'

let charset = 'lqk121çlseofeufeqcuyvg8w0ewoqjiewfhyqrt7r8uq9pwojskldjbas0123456789ASKDOJFSHWIUPG9R8QU0E9QWPOIKDakclnçj'
export function Home(){
  //Declarando o hook 'useState'
  const [size, setSize] = useState(10)
  const [passwordValue, setPasswordValue] = useState()
  const [modalVisible, setmodalVisible] = useState (false)

  function generatepassword() {
    let password = "";
    for (let i = 0, n = charset.length; i< size ; i++) {
      password += charset.charAt(Math.floor(Math.random() * n))
    }
    setPasswordValue(password);
    setmodalVisible(true);
  }

  return(
    
    <View style={styles.Container}>
      <Image  style={styles.logo}
      source={require("../../Component/assets/logo.png")}
      />

      <Text style={styles.Title}>{size} caracteres</Text>
        <View style={styles.area}>
          <Slider 
          style={{ height: 50}} 
          minimumValue={6} 
          maximumValue={20}
          maximumTrackTintColor='#ff0000'
          minimumTrackTintColor='#000'
          thumbTintColor='#392de9'
          value={size}  
          onValueChange={(value) => setSize(value.toFixed(0))}
          />
        </View>
        <TouchableOpacity style={styles.Button} onPress={generatepassword} >
          <Text style={styles.Buttontext} >Gerar senha</Text>
        </TouchableOpacity>

        <Modal visible = {modalVisible} animationType= "fade" transparent= {true} >
          <ModalPassword password={passwordValue} handleClose={() => setmodalVisible(false)} />
        </Modal>
        
    </View>
  )
}

const styles = StyleSheet.create({
  Container:{
    flex: 1,
    backgroundColor: '#F3F3FF',
    justifyContent: 'center',
    alignItems: 'center', 
    
  },
  logo:{
    marginBottom: 60
  },
  Title:{
    fontSize: 30,
    fontWeight: 'bold',
  },
  area:{
      marginTop: 14,
      marginBottom:14,
      width: "80%",
      backgroundColor: "#fff",
      borderRadius: 8,
      padding: 8,
      
  },
  Button:{
    color:'#fff',
    backgroundColor: '#392de9',
    width: '80%',
    height: 50,
    padding: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
  },

  Buttontext:{
    color: '#FFF',
    fontSize: 20,
  },  
})


