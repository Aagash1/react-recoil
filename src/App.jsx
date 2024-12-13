import React from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import TaskFilters from './components/TaskFilters';
import { useRecoilValue } from 'recoil';
import { taskStatsState } from './recoil/selectors';

const App = () => {
  const stats = useRecoilValue(taskStatsState);

  return (
    <div>
      <h1>Task Manager</h1>
      <AddTask />
      <TaskFilters />
      <TaskList />
      <div>
        <h3>Stats:</h3>
        <p>Total: {stats.total}</p>
        <p>Completed: {stats.completed}</p>
        <p>Pending: {stats.pending}</p>
      </div>
    </div>
  );
};

export default App;
