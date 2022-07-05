import api from './api';

const getTasks = async () => {
    try {
        const response = await api.get('/tarefas',     
         {
            headers: {
              'Authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoid2lsbGlhbkBhZG1pbi5jb20iLCJwYXNzd29yZCI6Im9pb2lvaSJ9LCJpYXQiOjE2NTY5NjM2NjksImV4cCI6MTY1NzU2ODQ2OX0.UrmrpvDcjEKEDojrzOD_ZvJmb6waeWsC29S0RF08Pw0` 
            } //capturar localstorege
          });
        return response;
    } catch (error) {
        console.error(error);
    }
};

export default getTasks;