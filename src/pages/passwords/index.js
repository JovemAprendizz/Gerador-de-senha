import {useState, useEffect} from 'react'
import { View, Text, StyleSheet, FlatList, VirtualizedList} from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context'
import {useIsFocused} from '@react-navigation/native'
import  useStorage from '../../hooks/useStorage'
import {Passworditem} from './components/passaworditem'; 

export function Passwords(){

   
    
    const [listpassword, setlistpasswords] = useState([])
    const focused = useIsFocused();
    const{getItem, removeItem} = useStorage();

    useEffect(()=>{
        async function loadpassawords(){
            const passwords = await getItem("@pass")
            setlistpasswords(passwords);
        }
        loadpassawords();
    }, [focused])

    async function deletePassword(item) {
        const passwords = await removeItem("@pass", item)
        setlistpasswords(passwords);
        alert('Senha removida!')
    }
    
    return(
        <SafeAreaView style= {{flex:1}}> 
            <View style ={styles.header}>
                <Text style = {styles.title}>Minhas senhas</Text>
            </View>

            <View style = {styles.content}>
                <FlatList style={{flex:1, paddingTop: 14,}} data= {listpassword}
                    keyExtractor={(item) => String(item)}
                    renderItem={({item}) => <Passworditem data={item} removePassaword={()=> deletePassword(item)} > 
                    </Passworditem>}/>
            </View>
        </SafeAreaView>
    ) 
}

const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight: 'bold',
        color: "#fff"
    },
    header:{
        backgroundColor: '#392DE9',
        paddingTop: 58,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 14,
    },
    content: {
        flex: 1,
        paddingLeft: 14,
        paddingRight: 14,

    },
})