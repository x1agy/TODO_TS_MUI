import { createContext } from "react";

type TasksContextType = {
    title: string,
    description?: string,
    isCompleted: boolean
}
export type TasksCompletedType = TasksContextType | React.Context<never[]> 

export const TasksContext: TasksCompletedType = createContext([]);