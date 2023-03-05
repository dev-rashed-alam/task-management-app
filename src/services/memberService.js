import toast from 'react-hot-toast';
import apiHandler from '../common/apiHandler';

export const addNewMember = async (requestBody) => {
  try {
    let postData = {
      name: requestBody.name,
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

export const updateMemberById = async (id, requestBody) => {
  try {
    let postData = {
      name: requestBody.name,
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
