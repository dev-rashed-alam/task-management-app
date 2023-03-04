import toast from 'react-hot-toast';
import apiHandler from '../common/apiHandler';

export const addNewTask = async (requestBody) => {
  try {
    const { data } = await apiHandler.POST('tasks', requestBody);
    return data;
  } catch ({ response }) {
    if (response.data.message) {
      toast.error(response.data.message);
    } else {
      toast.error('There was an error in the server side!');
    }
  }
};

export const fetchAllTasks = async () => {
  try {
    const { data } = await apiHandler.GET('tasks');
    return data;
  } catch ({ response }) {
    if (response.data.message) {
      toast.error(response.data.message);
    } else {
      toast.error('There was an error in the server side!');
    }
  }
};

export const deleteTaskById = async (id) => {
  try {
    const { data } = await apiHandler.DELETE('tasks', id);
    return data;
  } catch ({ response }) {
    if (response.data.message) {
      toast.error(response.data.message);
    } else {
      toast.error('There was an error in the server side!');
    }
  }
};

export const fetchTaskById = async (id) => {
  try {
    const { data } = await apiHandler.GET('tasks', `/${id}`);
    return data;
  } catch ({ response }) {
    if (response.data.message) {
      toast.error(response.data.message);
    } else {
      toast.error('There was an error in the server side!');
    }
  }
};

export const updateTaskById = async (id, requestBody) => {
  try {
    const { data } = await apiHandler.PUT('tasks', id, requestBody);
    return data;
  } catch ({ response }) {
    if (response.data.message) {
      toast.error(response.data.message);
    } else {
      toast.error('There was an error in the server side!');
    }
  }
};
