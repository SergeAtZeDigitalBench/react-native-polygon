export interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
}

export interface Stats {
  all: number;
  inProgress: number;
  completed: number;
}
