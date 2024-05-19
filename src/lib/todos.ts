import { type Dispatch } from "react";

import { type Todo, type Action, ACTION } from "@/types";

import { storeTodoList, getTodoList } from "./db";

const { TODOS_ERROR, TODOS_LOADING, TODOS_SET } = ACTION;

export const fetchAllTodos =
  (dispatch: Dispatch<Action<any>>) => async (isInitialFetch?: boolean) => {
    dispatch({ type: TODOS_LOADING });
    const [todos, error] = await getTodoList();

    if (error || !todos) {
      dispatch({ type: TODOS_ERROR, payload: isInitialFetch ? null : error });
    } else {
      dispatch({ type: TODOS_SET, payload: todos });
    }
  };

export const addNewTodo =
  (dispatch: Dispatch<Action<any>>) =>
  async (newTodo: Todo, currentTodos: Todo[]) => {
    dispatch({ type: TODOS_LOADING });
    const newTodos = [newTodo, ...currentTodos];
    const [response, error] = await storeTodoList(newTodos);

    if (error || !response) {
      dispatch({ type: TODOS_ERROR, payload: error });
    } else {
      dispatch({ type: TODOS_SET, payload: newTodos });
    }
  };

export const deleteTodo =
  (dispatch: Dispatch<Action<any>>) =>
  async (todoId: string, currentTodos: Todo[]) => {
    const newTodos = currentTodos.filter((current) => current.id !== todoId);

    if (newTodos.length === currentTodos.length) {
      dispatch({ type: TODOS_ERROR, payload: `Todo id: ${todoId} not found.` });
      return;
    }
    dispatch({ type: TODOS_LOADING });
    const [response, error] = await storeTodoList(newTodos);

    if (error || !response) {
      dispatch({ type: TODOS_ERROR, payload: error });
    } else {
      dispatch({ type: TODOS_SET, payload: newTodos });
    }
  };

type UpdatePayload = Pick<Todo, "id"> &
  Partial<Pick<Todo, "title" | "isCompleted">>;

export const updateTodo =
  (dispatch: Dispatch<Action<any>>) =>
  async (payload: UpdatePayload, currentTodos: Todo[]) => {
    const { id, ...restPayload } = payload;
    const foundIndex = currentTodos.findIndex((todo) => todo.id === id);
    if (foundIndex < 0) {
      dispatch({ type: TODOS_ERROR, payload: `Todo id: ${id} not found.` });
      return;
    }

    const newTodos = currentTodos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, ...restPayload };
      }
      return todo;
    });
    dispatch({ type: TODOS_LOADING });
    const [response, error] = await storeTodoList(newTodos);

    if (error || !response) {
      dispatch({ type: TODOS_ERROR, payload: error });
    } else {
      dispatch({ type: TODOS_SET, payload: newTodos });
    }
  };
