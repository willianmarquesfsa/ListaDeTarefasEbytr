import api from './api';

const postLogin = async (body) => {
    const { name , email, password } = body
    try {
        const response = await api.post('/users',     
        {name, email, password } );
        return response;
    } catch (error) {
        console.error(error);
    }
};

export default postLogin;