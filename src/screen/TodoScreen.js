import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { IconButton } from "react-native-paper";
import Fallback from "../components/Fallback";

const TodoScreen = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  const handleTodo = () => {
    if (todo === "") {
      return;
    }
    setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
    setTodo("");
  };
  const handleTodoDelete = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  const handleEditTodo = (item) => {
    setEditTodo(item);
    setTodo(item.title);
  };

  const handleUpdateTodo = () => {
    const updateTodo = todoList.map((itemtodo) => {
      if (itemtodo.id === editTodo.id) {
        return { ...itemtodo, title: todo };
      }
      return itemtodo;
    });
    setTodoList(updateTodo);
    setEditTodo(null);
    setTodo("");
  };

  const renderTodos = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: "powderblue",
          borderRadius: 6,
          paddingVertical: 8,
          paddingHorizontal: 6,
          marginBottom: 10,
          flexDirection: "row",
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 3,
          elevation: 2,
        }}
      >
        <Text
          style={{ color: "white", fontSize: 20, fontWeight: "600", flex: 1 }}
        >
          {item.title}
        </Text>
        <IconButton
          icon="pencil"
          iconColor="white"
          onPress={() => handleEditTodo(item)}
        />
        <IconButton
          icon="trash-can"
          iconColor="red"
          onPress={() => handleTodoDelete(item.id)}
        />
      </View>
    );
  };

  return (
    <View style={{ marginHorizontal: 16, marginTop: 60 }}>
      <TextInput
        style={{
          borderWidth: 2,
          borderColor: "darkseagreen",
          borderRadius: 6,
          paddingVertical: 12,
          paddingHorizontal: 16,
        }}
        placeholder="Add a task"
        value={todo}
        onChangeText={(userText) => setTodo(userText)}
      />
      {editTodo ? (
        <TouchableOpacity
          style={{
            backgroundColor: "lightseagreen",
            borderRadius: 6,
            paddingVertical: 8,
            marginVertical: 34,
            alignItems: "center",
          }}
          onPress={() => handleUpdateTodo()}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
            Save
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{
            backgroundColor: "lightseagreen",
            borderRadius: 6,
            paddingVertical: 8,
            marginVertical: 34,
            alignItems: "center",
          }}
          onPress={() => handleTodo()}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
            Add
          </Text>
        </TouchableOpacity>
      )}
      <FlatList data={todoList} renderItem={renderTodos} />
      {todoList.length <= 0 && <Fallback />}
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({});
