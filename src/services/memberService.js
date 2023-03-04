import toast from 'react-hot-toast';
import apiHandler from '../common/apiHandler';

export const addNewMember = async (requestBody) => {
  try {
    const { data } = await apiHandler.POST('members', requestBody);
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
    const { data } = await apiHandler.PUT('members', id, requestBody);
    return data;
  } catch ({ response }) {
    if (response.data.message) {
      toast.error(response.data.message);
    } else {
      toast.error('There was an error in the server side!');
    }
  }
};
