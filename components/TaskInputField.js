import React ,{useState}from "react";
import { KeyboardAvoidingView, TouchableOpacity , TextInput, View, StyleSheet, Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default KeyboardAvoidingViewInputField = (props)  =>{
    const [task, setTask] = useState();

    const handleAddTask = (value) => {
        props.addTask(value);
        setTask(null);
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}  style={styles.mainContainer}>
            <TextInput style={styles.inputField} value={task} onChangeText={text => setTask(text)} placeholder="Add a task"/>
            <TouchableOpacity onPress={()=>handleAddTask(task)}>
               
                    <AntDesign name="plus" size={24} color="black" />
                
            </TouchableOpacity>
        </KeyboardAvoidingView>
        
    );
}

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor: 'yellow',
        borderColor: 'black',
        backgroundColor: 'white',
        borderWidth: 1,
        marginHorizontal: 20,
        borderRadius: 12,
        flexDirection: 'row',
        paddingHorizontal: 10,
        bottom: 40,
        position: 'absolute',
        alignItems: 'center',
    },
    inputField: {
        color: 'red',
        height: 50,
        flex: 1,
        // position: 'absolute'

    },
    button: {
        height: 30,
        width: 30,
        borderRadius: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
});