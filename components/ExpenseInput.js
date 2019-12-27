import React, { useState } from 'react';
import { View, TextInput,  Button, StyleSheet, Modal } from 'react-native';

const ExpenseInput = props => {
  const [enteredExpense, setEnteredExpense] = useState('');

  const expenseInputHandler = enteredText => {
    setEnteredExpense(enteredText);
  };

  const addExpenseHandler = () => {
    props.onAddExpense(enteredExpense);
    setEnteredExpense('');
  };
  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Add expense'
          style={styles.textInput}
          onChangeText={expenseInputHandler}
          value={enteredExpense}
        />
        <View style={styles.buttonContainer}>
          <Button title='CANCEL' color='red' onPress={props.onCancel} />
          <Button title='ADD' onPress={addExpenseHandler} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%'
  }
});

export default ExpenseInput;
