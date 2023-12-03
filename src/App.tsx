import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import AllTasks from './components/Tasks/AllTasks';

export type FilteredTasksType = {
  title: string;
  description?: string,
  isCompleted: boolean,
  id:number
}

const App: React.FC = () => {
  const [tasks, setTasks] = React.useState<FilteredTasksType[] | []>(JSON.parse(localStorage.getItem('tasksArray') || '[]'));
  const [filterWord, setFilterWord] = React.useState<string>("");
  const [filterButton, setFilterButton] = React.useState<boolean | null>(null);
  const [filteredTasks, setFilteredTasks] = React.useState<FilteredTasksType[]>([]);
  const [count, setCount] = React.useState<number>(0);

  function filterTasks(){
    if(!filterWord){
      if(filterButton === null){
        setFilteredTasks(tasks)
      }
      else if(filterButton){
        setFilteredTasks(tasks.filter(item => item.isCompleted))
      }
      else if(!filterButton){
        setFilteredTasks(tasks.filter(item => !item.isCompleted))
      }
    }
    else if(filterWord){
      if(filterButton === null){
        setFilteredTasks(tasks.filter(item => item.title.toLocaleLowerCase().indexOf(filterWord.toLocaleLowerCase()) !== -1))
      }
      else if(filterButton){
        setFilteredTasks(tasks.filter(item => item.isCompleted && item.title.toLocaleLowerCase().indexOf(filterWord.toLocaleLowerCase()) !== -1))
      }
      else if(!filterButton){
        setFilteredTasks(tasks.filter(item => !item.isCompleted && item.title.toLocaleLowerCase().indexOf(filterWord.toLocaleLowerCase()) !== -1))
      }
      setCount(count + 1)
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
  }

  useEffect(() => {
    tasks.map((item, index) => {
      item.id = index;
    })
    localStorage.setItem('tasksArray', JSON.stringify(tasks))
    filterTasks()
  }, [filterWord, filterButton, tasks, count])

  function addTask(task: FilteredTasksType){
    const newArray = tasks;
    //@ts-ignore
    newArray.push(task)
    setTasks(newArray)
    setCount(count + 1)
  }
  
  return (
    <div className="App">
      <Header 
        addTask={(i:FilteredTasksType) => addTask(i)}
        setFilterButton={(i:boolean) => setFilterButton(i)}
        setFilterWord={(i:string) => setFilterWord(i)}
        clickedButton={filterButton}
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
