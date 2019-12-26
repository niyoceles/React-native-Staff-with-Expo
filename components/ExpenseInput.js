import React, {useState} from 'react';
import {View, TextInput, Text, Button, StyleSheet} from 'react-native';

const ExpenseInput = props => {

  const [enteredExpense, setEnteredExpense] = useState('');

  const expenseInputHandler = (enteredText) =>{
    setEnteredExpense(enteredText);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput 
        placeholder="Add expense" 
        style={styles.textInput} 
        onChangeText={expenseInputHandler}
        value={enteredExpense}
        />
      <Button title="ADD" onPress={props.onAddExpense.bind(this, enteredExpense)}/>
      </View>
  )
}


const styles = StyleSheet.create({
  screen: {
    padding:50
  },
  inputContainer:{
    flexDirection: 'row', 
    justifyContent:'space-between', 
    alignItems: 'center'
  },
  textInput: {
    width:'80%',
    borderColor:'black', 
    borderWidth:1, 
    padding:10
  },
});

export default ExpenseInput;