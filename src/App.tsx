import React from 'react';
import Header from './components/Header/Header';
import { TasksContext } from './components/Context/TasksContext';
import AllTasks from './components/Tasks/AllTasks';

type FilteredTasks = {
  title: string;
  description?: string,
  isCompleted: boolean
}

const App: React.FC = () => {
  const [tasks, setTasks] = React.useState<never[]>([]);
  const [filterWord, setFilterWord] = React.useState<string>("");
  const [filterButton, setFilterButton] = React.useState<boolean | null>(null);
  const [filteredTasks, setFilteredTasks] = React.useState<FilteredTasks[] | []>([])
  
  React.useEffect(() => {

  })
  return (
    <div className="App">
      <Header />
      <TasksContext.Provider value= {tasks}>
        <AllTasks />
      </TasksContext.Provider>
    </div>
  );
}

export default App;
