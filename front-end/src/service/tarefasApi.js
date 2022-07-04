import api from './api';

const getTasks = async () => {
    try {
        const response = await api.get('/tarefas');
        return response;
    } catch (error) {
        console.error(error);
    }
};

export default getTasks;