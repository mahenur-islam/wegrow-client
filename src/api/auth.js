import { axiosSecure } from "../Hooks/useAxiosSecure";

export const saveUser = async (user)=>{
    const currentUser = {
        email: data.email,
        role: 'employee',
        status: 'verified',
        birthDate: data.birthDate
      };

    const {data} = await axiosSecure.put(`/users/${user?.email}`, currentUser)

    return data
}