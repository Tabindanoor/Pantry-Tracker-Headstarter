import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface TaskState {
  tasks: Task[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: TaskState = {
  tasks: [],
  status: 'idle',
};

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await axios.get('/api/tasks');
  return response.data;
});

export const addTask = createAsyncThunk('tasks/addTask', async (task: Task) => {
  const response = await axios.post('/api/tasks', task);
  return response.data;
});

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (id: string) => {
  await axios.delete(`/api/tasks/${id}`);
  return id;
});

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = 'idle';
        state.tasks = action.payload;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      });
  },
});

export default taskSlice.reducer;
