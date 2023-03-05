/*
This module exports functions for handling CRUD (Create, Read, Update, Delete) operations on tasks.
It uses an external API handler module to make HTTP requests to the backend API.
The module uses the react-hot-toast library to display error messages to the user.
*/
import toast from 'react-hot-toast';
import apiHandler from '../common/apiHandler';

/**
 * Add a new task to the database.
 * @param {Object} requestBody - The request body containing the task's details.
 * @returns {Object} The newly added task object.
 * @throws {Object} An error object if the request fails.
 */
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

/**
 * Fetch all tasks from the database.
 * @returns {Array} An array of task objects.
 * @throws {Object} An error object if the request fails.
 */
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

/**
 * Delete a task from the database by ID.
 * @param {string} id - The ID of the task to delete.
 * @returns {Object} The deleted task object.
 * @throws {Object} An error object if the request fails.
 */
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

/**
 * Fetch a task from the database by ID.
 * @param {string} id - The ID of the task to fetch.
 * @returns {Object} The task object with the specified ID.
 * @throws {Object} An error object if the request fails.
 */
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

/**
 * Update a task in the database by ID.
 * @param {string} id - The ID of the task to update.
 * @param {Object} requestBody - The request body containing the updated task details.
 * @returns {Object} The updated task object.
 * @throws {Object} An error object if the request fails.
 */
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
