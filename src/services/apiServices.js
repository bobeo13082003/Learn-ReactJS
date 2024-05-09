import axios from "../utils/axiosCustomize";
const postCreateNewUser = (email, password, userName, role, image) => {
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', userName);
    data.append('role', role);
    data.append('userImage', image);
    return axios.post('api/v1/participant', data);
}

const getAllUser = () => {
    return axios.get('api/v1/participant/all')
}
const putUpdateUser = (id, userName, role, image) => {
    const data = new FormData();
    data.append('id', id);
    data.append('username', userName);
    data.append('role', role);
    data.append('userImage', image);
    return axios.put('api/v1/participant', data);
}
const deleteUser = (userId) => {
    return axios.delete('api/v1/participant', { data: { id: userId } });
}

const pageInateUser = (page, limit) => {
    return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
}

const postLogin = (email, password, delay) => {
    return axios.post('api/v1/login', { email: email, password: password, delay: 5000 })
}

const postSignup = (email, username, password) => {
    return axios.post('api/v1/register', { email: email, username: username, password: password })
}

const getQuizByUser = () => {
    return axios.get('api/v1/quiz-by-participant');
}

const getDataQuiz = (quizId) => {
    return axios.get(`api/v1/questions-by-quiz?quizId=${quizId}`)
}

export {
    postCreateNewUser, getAllUser,
    putUpdateUser, deleteUser,
    pageInateUser, postLogin,
    postSignup, getQuizByUser,
    getDataQuiz
}