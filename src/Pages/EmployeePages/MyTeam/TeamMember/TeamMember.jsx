/* eslint-disable react/prop-types */
import { Button, Card } from "flowbite-react";

const TeamMember = ({ member }) => {
  return (
    <div>
      <Card className="max-w-sm">
        <div className="flex flex-col items-center pb-10">
          <img
            alt="Bonnie image"
            height="96"
            src={member.photoUrl}
            width="96"
            className="mb-3 rounded-full shadow-lg"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {member.name}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {member.role}
          </span>
          <div className="mt-4 flex space-x-3 lg:mt-6">
            <Button outline>Remove</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TeamMember;
