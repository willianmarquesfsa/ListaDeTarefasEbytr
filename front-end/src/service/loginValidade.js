import api from './api';

const loginValidate = async (body) => {
    try {
        const response = await api.get('/login',     
        {
            headers: {
              'Authorization': localStorage.getItem('token')
            }
          } );
        return response;
    } catch (error) {
        console.error(error);
    }
};

export default loginValidate;