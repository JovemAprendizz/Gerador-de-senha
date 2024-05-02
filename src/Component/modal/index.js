import { Text, View, StyleSheet, TouchableOpacity, Pressable } from "react-native"; 
import * as Clipboard from 'expo-clipboard'
import useStorage from '../../hooks/useStorage'
export function ModalPassword({ password, handleClose}) {
    const {salvaItem} = useStorage();

   async function handleCopyPassword() {
        await Clipboard.setStringAsync(password)
        alert('Senha copiada!')
        await salvaItem("@pass", password)
        handleClose();
    }   
    return(
    <View style = {styles.container} >
        <View style ={styles.content}>
            <Text style={styles.title}> Senha gerada</Text>
            <Pressable style={styles.senha} onLongPress={handleCopyPassword}> 
            <Text style={{color: '#FFF'}}>
                {password}
            </Text> 
            </Pressable>
            <View style = {styles.buttonarea} >
                <TouchableOpacity style = {styles.button} >
                    <Text style = {styles.buttontext} onPress={handleClose}> Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.button} onPress={handleCopyPassword}>
                    <Text  style = {styles.buttonsave} > Salvar senha</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
        )
    }

const styles = StyleSheet.create({
    container:{
       backgroundColor: "rgba(24,24,24,0.6)",
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',

    },
    content:{
        backgroundColor: '#FFF',
        width: '85%',  
        paddingTop: 24,
        paddingBottom: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: "#000",
        marginBottom: 24,
    },
    senha:{
        backgroundColor: '#0e0e0e',
        borderRadius: 8,
        color: '#FFF', 
        width: '90%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonarea:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        margintop: 8,
        alignItems: 'center',
    },
    button:{
        flex: 1,
        alignItems: 'center',
        marginTop: 14,
        marginBottom: 14,
        padding: 8,
    },
    buttontext:{
        fontWeight: 'bold',   
    },
    buttonsave:{
        backgroundColor: '#392DE9',
        color: '#FFF',
        padding: 10,
        borderRadius: 8,
        
    },
})