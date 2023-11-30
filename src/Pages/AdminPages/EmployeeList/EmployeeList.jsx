// /* eslint-disable react/prop-types */


// import { useQuery } from '@tanstack/react-query';
// import useAxiosSecure from '../../../Hooks/useAxiosSecure';

// const EmployeeList = () => {

//   //usding tanstacck query
//     // const axiosSecure = useAxiosSecure()
//     // const {data : users = []} = useQuery({
//     //     queryKey: ['users'],
//     //     queryFn: async ()=>{
//     //         const res = await axiosSecure.get('/users');
//     //         return res.data
//     //     }
//     // })

//   return (
//     <div>
//       <h2>Team Members {users.length}</h2>
     
//     </div>
//   );
// };

// export default EmployeeList;
 

import { useState, useEffect } from 'react';
import { axiosSecure } from '../../../Hooks/useAxiosSecure';
import TeamMember from '../../EmployeePages/MyTeam/TeamMember/TeamMember';
import Heading from '../../../Component/Heading/Heading';

const EmployeeList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosSecure.get('/users'); 
        setUsers(response.data);
      } catch (error) {
        setError(error.message || 'Failed to fetch users');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <Heading title= {'My Team Members'} center='true'/>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:gird-cols-4 gap-3 py-5'>
      {users.map((member) => (
        <div key={member._id}>
         <TeamMember member={member}></TeamMember>
        </div>
      ))}
      </div>
    </div>
  );
};

export default EmployeeList;