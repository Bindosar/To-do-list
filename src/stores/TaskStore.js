import React from "react";
import axios from "axios";
import { makeObservable, observable } from "mobx";

class TasksStore {
  tasks = [];

  constructor() {
    makeObservable(this, {
      tasks: observable,
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
}

const tasksStore = new TasksStore();
tasksStore.fetchTasks();
export default tasksStore;
