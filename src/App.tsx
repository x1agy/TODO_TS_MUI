import React from 'react';
import Header from './components/Header/Header';
import AllTasks from './components/Tasks/AllTasks';

type FilteredTasks = {
  title: string;
  description?: string,
  isCompleted: boolean
}

const App: React.FC = () => {
  const [tasks, setTasks] = React.useState<FilteredTasks[] | []>([]);
  const [filterWord, setFilterWord] = React.useState<string>("");
  const [filterButton, setFilterButton] = React.useState<boolean | null>(null);
  const [filteredTasks, setFilteredTasks] = React.useState<FilteredTasks[] | null>(null)
  
  React.useEffect(() => {
    if(!filterWord && filterButton === null){
      setFilteredTasks(tasks)
    }
    else if (!filterWord && filterButton){
      const array = tasks.filter(item => item.isCompleted === true)
      setFilterWord(array)
    }
  })
  return (
    <div className="App">
      <Header />
      <AllTasks 
        tasksArray = {filteredTasks}
      />
    </div>
  );
}

export default App;
