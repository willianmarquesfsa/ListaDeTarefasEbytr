import api from './api';

const loginValidate = async (body) => {
    try {
        const response = await api.get('/login',     
        {
            headers: {
              'Authorization': window.localStorage.getItem('token')
            }
          } );
        return response;
    } catch (error) {
        console.error(error);
    }
};

export default loginValidate;