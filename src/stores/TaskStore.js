import axios from "axios";
import { action, makeObservable, observable } from "mobx";

class TasksStore {
  tasks = [];

  constructor() {
    makeObservable(this, {
      tasks: observable,
      createTask: action,
      fetchTasks: action,
    });
  }
  fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:8000/tasks");
      this.tasks = response.data;
    } catch (error) {
      console.error("TasksStore -> fetchTasks -> error", error);
    }
  };
  createTask = async (newTask) => {
    try {
      const res = await axios.post("http://localhost:8000/tasks", newTask);
      this.tasks.push(res.data);
    } catch (error) {}
  };
}

const tasksStore = new TasksStore();
tasksStore.fetchTasks();
export default tasksStore;
