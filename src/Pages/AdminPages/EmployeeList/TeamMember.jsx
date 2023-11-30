/* eslint-disable react/prop-types */
import { FaUserMinus } from 'react-icons/fa'; // You can replace this with your own icon

const TeamMember = ({ member }) => {
  const { image, name} = member;


  return (
    <div className="team-member">
      <img src={image} alt={name} />
      <div>
        <p>Name: {name}</p>
      </div>
      <button>
        <FaUserMinus /> Remove From Team
      </button>
    </div>
  );
};

export default TeamMember;