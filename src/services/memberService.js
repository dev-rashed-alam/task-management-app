import toast from 'react-hot-toast';
import apiHandler from '../common/apiHandler';

export const addNewMember = async (requestBody) => {
  try {
    const { data } = await apiHandler.POST('addNewMember', requestBody);
    return data;
  } catch ({ response }) {
    if (response.data.message) {
      toast.error(response.data.message);
    } else {
      toast.error('There was an error in the server side!');
    }
  }
};
