import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import AllTasks from './components/Tasks/AllTasks';

export type FilteredTasksType = {
  title: string | number;
  description?: string | number,
  isCompleted: boolean,
  id:number
}

const App: React.FC = () => {
  const [tasks, setTasks] = React.useState<FilteredTasksType[] | []>([{title: 'cockSDFSDFSDFFDSFDSDSFDFS', description:"cockODASOFOSDFOFD", isCompleted:false, id: 1}]);
  const [filterWord, setFilterWord] = React.useState<string>("");
  const [filterButton, setFilterButton] = React.useState<boolean | null>(null);
  const [filteredTasks, setFilteredTasks] = React.useState<FilteredTasksType[]>([]);
  const [count, setCount] = React.useState<number>(0);

  function filterTasks(){
    if(!filterWord && filterButton === null){
      setFilteredTasks(tasks)
    }
  }
  function updateTask(newTaskObject:FilteredTasksType){
    let taskIndex = 0;
    tasks.map((item, index) => {
      if(item.id === newTaskObject.id){
        taskIndex = index
      }
    })
    const newArray = tasks;
    newArray[taskIndex] = newTaskObject
    setTasks(newArray)
    setCount(count + 1)
  }

  function deleteTask(id:number){
    const newTasks = tasks.filter(item => item.id !== id)
    setTasks(newTasks)
    console.log(tasks)
  }

  useEffect(() => {
    tasks.map((item, index) => {
      item.id = index;
    })
    filterTasks()
  }, [filterWord, filterTasks, filterButton, tasks])

  function addTask(task: FilteredTasksType){
    // @ts-ignore
    setTasks(arr => arr.push(task) )
  }
  
  return (
    <div className="App">
      <Header 
        addTask={(i:FilteredTasksType) => addTask(i)}
      />
      <AllTasks 
        tasksArray={filteredTasks}
        updateTask={(i:FilteredTasksType) => updateTask(i)}
        deleteTask={(id:number) => deleteTask(id)}
      />
    </div>
  );
}

export default App;
