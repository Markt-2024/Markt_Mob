const { axiosInstance } = require('./index');


// Register new User
export const RegisterUser = async (value) => {
    try {
        const response = await axiosInstance.post(`https://markt-mob.vercel.app/api/users/register`, value);
        return response.data;
    } catch (error) {
        console.error(error);
        return {
            success: false,
            message: error.response?.data?.message || 'An error occurred',
        };
    }
};

// Login user
export const LoginUser = async (value) => {
    try {
        const response = await axiosInstance.post(`https://markt-mob.vercel.app/api/users/login`, value);
        return response.data;
    } catch (error) {
        console.error(error);
        return {
            success: false,
            message: error.response?.data?.message || 'An error occurred',
        };
    }
};

// Get current user from the frontend
export const GetCurrentUser = async () => {
    try {
        const response = await axiosInstance.get(`https://markt-mob.vercel.app/api/users/get-current-user`);
        return response.data;
    } catch (error) {
        console.error(error);
        return {
            success: false,
            message: error.response?.data?.message || 'An error occurred',
        };
    }
};