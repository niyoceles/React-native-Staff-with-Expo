import React, {useState} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList, 
} from 'react-native';

import ExpenseItem from './components/ExpenseItem';
import ExpenseInput from './components/ExpenseInput';

export default function App() {

  
  const [expenses, setExpnses] = useState([]);

  const addExpenseHandler = (expenseTitle) =>{
   setExpnses(currentExpense =>[...expenses, {id: Math.random().toString(), value: expenseTitle}])
  }

  const removeExpenseHandler = expenseId =>{
    setExpnses(currentExpense =>{
      return currentExpense.filter((expense)=>expense.id !==expenseId)
    })
  }
  
  return (
    <View style={styles.screen}>
      <ExpenseInput onAddExpense= {addExpenseHandler}/>
      <FlatList
      keyExtractor={(item, index) => item.id}
       data={expenses} renderItem={itemData => <ExpenseItem id={itemData.item.id} onDelete={removeExpenseHandler.bind(this, itemData.item.id)} title={itemData.item.value}/>} 
          />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding:50
  },
});
