import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, ScrollView } from "react-native";
import uuid from "react-native-uuid";

import type { Todo } from "@/types";

import { filterListBy } from "@/lib";
import { TODO_LIST } from "@/constants";
import { ConfirmDeleteAlert } from "@/components/ConfirmDeleteAlert";
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
  const [itemToDelete, setItemToDelete] = useState<null | string>(null);

  const handleItemClick = (itemId: string) => {
    setTodoList((current) => {
      return current.map((item) => {
        if (item.id === itemId) {
          return { ...item, isCompleted: !item.isCompleted };
        }
        return item;
      });
    });
  };

  const handleItemDelete = () => {
    setTodoList((current) =>
      current.filter((todo) => todo.id !== itemToDelete),
    );
    setItemToDelete(null);
  };
  const handleItemDeleteCancel = () => {
    setItemToDelete(null);
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
            setItemToDelete(todo.id);
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
        id: uuid.v4().toString(),
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
      <ConfirmDeleteAlert
        isVisible={!!itemToDelete}
        handleConfirm={handleItemDelete}
        handleCancel={handleItemDeleteCancel}
      />
    </>
  );
}
