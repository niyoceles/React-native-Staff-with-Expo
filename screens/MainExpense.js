import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import ExpenseItem from '../components/ExpenseItem';
import ExpenseInput from '../components/ExpenseInput';

export default function MainScreen() {
  const [expenses, setExpnses] = useState([]);
  const [isOpenAddModal, setOpenAddModal] = useState(false);

  const addExpenseHandler = expenseTitle => {
    setExpnses(currentExpense => [
      ...expenses,
      { id: Math.random().toString(), value: expenseTitle }
    ]);
    setOpenAddModal(false);
  };

  const removeExpenseHandler = expenseId => {
    setExpnses(currentExpense => {
      return currentExpense.filter(expense => expense.id !== expenseId);
    });
  };

  const cancelExpenseAddModal = () => {
    setOpenAddModal(false);
  };

  return (
    <View style={styles.screen}>
      <Button title='Add new Expense' onPress={() => setOpenAddModal(true)} />
      <ExpenseInput
        visible={isOpenAddModal}
        onAddExpense={addExpenseHandler}
        onCancel={cancelExpenseAddModal}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={expenses}
        renderItem={itemData => (
          <ExpenseItem
            id={itemData.item.id}
            onDelete={removeExpenseHandler.bind(this, itemData.item.id)}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
