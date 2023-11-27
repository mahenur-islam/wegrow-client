import { Card } from "flowbite-react";

const TeamMember = () => {
  return (
    <div>
      <Card
        className="max-w-sm"
      >
      <img src="https://i.ibb.co/bPtkTyV/login1.png" alt="" className="w-56 h-56 mx-auto rounded-full"/>
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Jhon Doe
        </h5>
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Admin
        </h5>
      </Card>
    </div>
  );
};

export default TeamMember;
