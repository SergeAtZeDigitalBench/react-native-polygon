import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, ScrollView, Alert } from "react-native";

import type { Todo } from "@/types";

import { filterListBy } from "@/lib";
import { TODO_LIST } from "@/constants";
import { AddTodoForm } from "@/components/AddTodoForm";
import { BottomMenu } from "@/components/BottomMenu";
import { ButtonAdd } from "@/components/ButtonAdd";
import { CardTodo } from "@/components/CardTodo";
import { Header } from "@/components/Header";
import { s } from "./src/App.style";

export default function App() {
  const [todoList, setTodoList] = useState<Todo[]>(() => [...TODO_LIST]);
  const [selectedTab, setSelectedTab] = useState<
    "all" | "inProgress" | "completed"
  >("all");

  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);

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
    filterListBy(selectedTab, todoList).map((todo) => (
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
    ));

  const handleShowAddTodoDialog = () => {
    setIsFormVisible(true);
  };

  const handleAddNewTodo = ({ title }: Pick<Todo, "title">) => {
    setTodoList((current) => {
      const newTodo: Todo = {
        title,
        id: current.length + 1,
        isCompleted: false,
      };
      return [newTodo, ...current];
    });
    setIsFormVisible(false);
  };

  const handleAddCancel = () => {
    setIsFormVisible(false);
  };

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
          <ButtonAdd onPress={handleShowAddTodoDialog}>+ New todo</ButtonAdd>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={s.footer}>
        <BottomMenu
          selectedTab={selectedTab}
          handleSelect={setSelectedTab}
          todoList={todoList}
        />
      </View>

      <AddTodoForm
        onSubmit={handleAddNewTodo}
        onCancel={handleAddCancel}
        isVisible={isFormVisible}
      />
    </>
  );
}
