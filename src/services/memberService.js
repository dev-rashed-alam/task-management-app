/*
This module exports functions for handling CRUD (Create, Read, Update, Delete) operations on members.
It uses an external API handler module to make HTTP requests to the backend API.
The module uses the react-hot-toast library to display error messages to the user.
*/
import toast from 'react-hot-toast';
import apiHandler from '../common/apiHandler';

/**
 * Add a new member to the database.
 * @param {Object} requestBody - The request body containing the member's details.
 * @returns {Object} The newly added member object.
 * @throws {Object} An error object if the request fails.
 */
export const addNewMember = async (requestBody) => {
  try {
    let postData = {
      ...requestBody,
      email: requestBody.email || ''
    };
    const { data } = await apiHandler.POST('members', postData);
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
 * Fetch all members from the database.
 * @returns {Array} An array of member objects.
 * @throws {Object} An error object if the request fails.
 */
export const fetchAllMembers = async () => {
  try {
    const { data } = await apiHandler.GET('members');
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
 * Fetch a member from the database by ID.
 * @param {string} id - The ID of the member to fetch.
 * @returns {Object} The member object with the specified ID.
 * @throws {Object} An error object if the request fails.
 */
export const fetchMemberById = async (id) => {
  try {
    const { data } = await apiHandler.GET('members', `/${id}`);
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
 * Update a member in the database by ID.
 * @param {string} id - The ID of the member to update.
 * @param {Object} requestBody - The request body containing the updated member details.
 * @returns {Object} The updated member object.
 * @throws {Object} An error object if the request fails.
 */
export const updateMemberById = async (id, requestBody) => {
  try {
    let postData = {
      ...requestBody,
      email: requestBody.email || ''
    };
    const { data } = await apiHandler.PUT('members', id, postData);
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
 * Delete a member from the database by ID.
 * @param {string} id - The ID of the member to delete.
 * @returns {Object} The deleted member object.
 * @throws {Object} An error object if the request fails.
 */
export const deleteMemberById = async (id) => {
  try {
    const { data } = await apiHandler.DELETE('members', id);
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
 * Remove a task from a member's list of tasks by task ID.
 * @param {string} taskId - The ID of the task to remove.
 * @param {string} userId - The ID of the member whose task will be removed.
 * @returns {Promise<Object>} A Promise that resolves to the updated member object
 * */
export const removeTaskFromMemberByTaskId = async (taskId, userId) => {
  try {
    const user = await fetchMemberById(userId);
    user.tasks = user.tasks.filter((task) => task.id !== taskId);
    const { data } = await apiHandler.PUT('members', user.id, user);
    return data;
  } catch ({ response }) {
    if (response.data.message) {
      toast.error(response.data.message);
    } else {
      toast.error('There was an error in the server side!');
    }
  }
};
