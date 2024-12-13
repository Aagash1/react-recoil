import { selector } from 'recoil';
import { taskListState, taskFilterState } from './atoms';

export const filteredTaskListState = selector({
  key: 'filteredTaskListState',
  get: ({ get }) => {
    const filter = get(taskFilterState);
    const tasks = get(taskListState);

    switch (filter) {
      case 'Completed':
        return tasks.filter((task) => task.completed);
      case 'Pending':
        return tasks.filter((task) => !task.completed);
      default:
        return tasks;
    }
  },
});

export const taskStatsState = selector({
  key: 'taskStatsState',
  get: ({ get }) => {
    const tasks = get(taskListState);
    const total = tasks.length;
    const completed = tasks.filter((task) => task.completed).length;
    const pending = total - completed;

    return { total, completed, pending };
  },
});
