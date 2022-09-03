import React  from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
// import { MaterialIcons } from 'expo@vector-icons';

export default TaskItem = (props)=> {
    return (
        <View style={style.container}>
            <View style={style.taskIndexContainer}>
                <Text style={style.taskIndexText}>{props.index}</Text>
            </View>
            <View style={style.taskDescriptionContainer}>
                <Text style={style.taskDescriptionText}>{props.task}</Text>
                
            </View>
            <View style={style.delButtContainer}>
                <TouchableOpacity onPress={props.deleteTask}>
                    <MaterialIcons name="delete-outline" size={50} color="black" />
                </TouchableOpacity>
                {/* <MaterialIcons name="delete-outline" size={50} color="black" /> */}
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        borderColor: 'black',
        borderRadius: 12,
        borderWidth: 1,
        flexDirection: 'row',
        marginHorizontal: 40,
        // marginVertical: 10,
        justifyContent: 'flex-start'
    },
    taskIndexContainer:{
        // backgroundColor: 'red',
        borderColor: 'red',
        borderRadius: 12,
        width: 40,
        height: 60,
        // borderWidth: 2,
        borderColor: 'black',
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
        
        // flex: 1,
    },
    taskIndexText : {
        fontSize: 40,
        // marginLeft: 15
    },
    taskDescriptionContainer : {
        // backgroundColor: 'yellow'
        flex: 1,
        // backgroundColor: 'red',
        borderRadius: 12,
        // borderWidth:2,
        borderColor: 'black',
        // marginLeft: 10,
        justifyContent: 'center',
        // alignItems: 'center'
    },
    
    taskDescriptionText : {
        fontSize: 40
    },
    delButtContainer:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    delButton :{
        
    }

});

