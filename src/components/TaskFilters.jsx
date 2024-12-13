import { useRecoilState } from 'recoil';
import { taskFilterState } from '../recoil/atoms';

const TaskFilters = () => {
  const [filter, setFilter] = useRecoilState(taskFilterState);

  return (
    <div>
      <button onClick={() => setFilter('All')}>All</button>
      <button onClick={() => setFilter('Completed')}>Completed</button>
      <button onClick={() => setFilter('Pending')}>Pending</button>
    </div>
  );
};

export default TaskFilters;
