import AsyncStorage from "@react-native-async-storage/async-storage";

import type { Todo } from "@/types";

import { DB } from "@/constants";

const getErrorMessage = (defaultError: string, error: unknown) => {
  return error instanceof Error ? error.message : defaultError;
};

export const storeTodoList = async (
  list: Todo[],
): Promise<["ok", null] | [null, string]> => {
  try {
    await AsyncStorage.setItem(DB.TODO_LIST, JSON.stringify(list));
    return ["ok", null];
  } catch (e) {
    return [null, getErrorMessage("Falied to save list in async storage", e)];
  }
};

export const getTodoList = async (): Promise<
  [Todo[], null] | [null, string]
> => {
  try {
    const valueJson = await AsyncStorage.getItem(DB.TODO_LIST);
    if (valueJson == null) {
      throw new Error("The value not found in the async storage");
    }
    const list: Todo[] = JSON.parse(valueJson);

    return [list, null];
  } catch (e) {
    return [null, getErrorMessage("Falied to get list in async storage", e)];
  }
};
