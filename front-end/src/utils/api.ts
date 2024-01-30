import { AxiosResponse } from "axios";
import { api } from "../config";

type TodosType = {
  userId: Number;
  id: Number;
  title: String;
  completed: Boolean;
};
// Just get random todos
export const getTodos = async (): Promise<AxiosResponse<TodosType[]>> => {
  return await api
    .get<TodosType[]>("/todos")
    .then((response) => {
      return response;
    })
    .catch((error: any) => {
      console.error(error);
      return Promise.reject(error);
    });
};
