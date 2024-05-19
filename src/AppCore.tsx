import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, ScrollView } from "react-native";
import uuid from "react-native-uuid";

import { type Todo } from "@/types";

import { useStoreContext } from "@/providers/StoreProvider";
import { updateTodo, deleteTodo, addNewTodo } from "@/lib/todos";
import { filterListBy } from "@/lib";
import { ConfirmDeleteAlert } from "@/components/ConfirmDeleteAlert";
import { ErrorDisplay } from "@/components/ErrorDisplay";
import { AddTodoForm } from "@/components/AddTodoForm";
import { BottomMenu } from "@/components/BottomMenu";
import { ButtonAdd } from "@/components/ButtonAdd";
import { CardTodo } from "@/components/CardTodo";
import { Header } from "@/components/Header";
import { s } from "./AppCore.style";

export const AppCore = (): JSX.Element => {
  const [store, dispatch] = useStoreContext();
  const [selectedTab, setSelectedTab] = useState<
    "all" | "inProgress" | "completed"
  >("all");
  const handleUpdateTodo = updateTodo(dispatch);
  const handleDeleteTodo = deleteTodo(dispatch);
  const handleAddTodo = addNewTodo(dispatch);

  const { todos: todoList } = store;

  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const [itemToDelete, setItemToDelete] = useState<null | string>(null);

  const handleItemClick = ({
    id,
    isCompleted,
  }: Pick<Todo, "id" | "isCompleted">) => {
    handleUpdateTodo({ id, isCompleted }, todoList);
  };

  const handleItemDelete = () => {
    itemToDelete && handleDeleteTodo(itemToDelete, todoList);
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
            handleItemClick({ id: todo.id, isCompleted: !todo.isCompleted });
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
    const newTodo: Todo = {
      title,
      id: uuid.v4().toString(),
      isCompleted: false,
    };
    handleAddTodo(newTodo, todoList);
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
      <ErrorDisplay />
    </>
  );
};
