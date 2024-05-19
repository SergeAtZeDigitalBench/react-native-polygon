import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, View, ScrollView, Alert } from "react-native";

import type { Todo } from "@/types";

import { filterListBy } from "@/lib";
import { BottomMenu } from "@/components/BottomMenu";
import { CardTodo } from "@/components/CardTodo";
import { Header } from "@/components/Header";
import { s } from "./src/App.style";

const TODO_LIST = [
  { id: 1, title: "Walk the dog", isCompleted: true },
  { id: 2, title: "Go to gym", isCompleted: false },
  { id: 3, title: "Learn React Native", isCompleted: false },
  { id: 4, title: "Walk in the park", isCompleted: true },
  { id: 5, title: "Go to restaurant", isCompleted: false },
  { id: 6, title: "Learn Go", isCompleted: false },
  { id: 7, title: "Phone parents", isCompleted: true },
  { id: 8, title: "Cook some tasty food", isCompleted: false },
  { id: 9, title: "Order pizza", isCompleted: false },
];

export default function App() {
  const [todoList, setTodoList] = useState<Todo[]>(() => [...TODO_LIST]);
  const [selectedTab, setSelectedTab] = useState<
    "all" | "inProgress" | "completed"
  >("all");

  const handleItemClick = (itemId: number) => {
    setTodoList((current) => {
      return current.map((item) => {
        if (item.id === itemId) {
          return { ...item, isCompleted: !item.isCompleted };
        }
        return item;
      });
    });
  };

  const handleItemDelete = (itemId: number) => {
    Alert.alert(
      `Delete todo ${itemId} ?`,
      "Are you sure you want to delete this todo ?",
      [
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            setTodoList((current) =>
              current.filter((todo) => todo.id !== itemId),
            );
          },
        },
        { text: "Cancel", style: "cancel" },
      ],
    );
  };

  const renderTodoList = () =>
    filterListBy(selectedTab, todoList).map((todo) => {
      return (
        <View key={todo.id} style={s.todoItem}>
          <CardTodo
            todo={todo}
            onPress={() => {
              handleItemClick(todo.id);
            }}
            onLongPress={() => {
              handleItemDelete(todo.id);
            }}
          />
        </View>
      );
    });

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={s.app}>
          <View style={s.header}>
            <Header />
          </View>

          <View style={s.body}>
            <ScrollView>{renderTodoList()}</ScrollView>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={s.footer}>
        <BottomMenu
          selectedTab={selectedTab}
          handleSelect={setSelectedTab}
          todoList={todoList}
        />
      </View>
    </>
  );
}
