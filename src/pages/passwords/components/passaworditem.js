import React, {useState} from "react";
import { View, Text, StyleSheet, Pressable, TouchableOpacity} from "react-native";

export  function Passworditem({data, removePassaword}){
    const [showPassword, setShowPassword] = useState(false);

    return(
        <View>
            <Pressable onLongPress={removePassaword} style={styles.content}>
                <Text style={styles.Text}> {showPassword ? data : '••••••••'} </Text>
                <TouchableOpacity style={styles.hidden} onPress={() => setShowPassword(!showPassword)}>
                    <Text>{showPassword ? 'on' : 'off'}</Text>
                </TouchableOpacity>
            </Pressable>  
        </View>
    )
}  

const styles = StyleSheet.create({
    content:{
        backgroundColor: '#0e0e0e',
        padding: 14,
        width:'100%',
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    Text:{
        color: '#FFF',
    },
    hidden:{
        width: 30,
        height: 30,
        backgroundColor: "#fff",
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
})