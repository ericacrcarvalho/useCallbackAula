import React, { useEffect, useState, useCallback } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

  const MyButton = ({ title, onPress }) => {

    useEffect(() => {
      console.log("useEffect");
    });

    useEffect(() => {
      console.log("useEffect onPress");
    }, [onPress]);

    return <Button
      title={title}
      onPress={onPress}
    />
  }

  const App = () => {
   
    const [count, setCount] = useState(0);

    const add = useCallback(() => {
      console.log("Add");
      setCount(count+1);
    }, []);

    return (
      <View style={styles.container}>
      <Text style={[styles.text, {fontWeight: 'bold'}]}>useCallback</Text>
      <Text style={styles.text}>Contador: {count}</Text>
      <MyButton
        title="Adicionar"
        onPress={add}
      />
      </View>
    );
  }

  export default App;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 18,
      margin: 6,
    }
  });
