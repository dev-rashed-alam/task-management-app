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
