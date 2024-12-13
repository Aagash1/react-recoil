import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { taskListState } from '../recoil/atoms';

const AddTask = () => {
  const [task, setTask] = useState('');
  const setTaskList = useSetRecoilState(taskListState);

  const addTask = () => {
    setTaskList((oldTaskList) => [
      ...oldTaskList,
      { id: Date.now(), text: task, completed: false },
    ]);
    setTask('');
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
