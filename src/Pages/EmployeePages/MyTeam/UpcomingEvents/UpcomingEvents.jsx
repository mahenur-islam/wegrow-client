import { Avatar,  Table } from "flowbite-react";
import { useEffect, useState } from "react";
import Heading from "../../../../Component/Heading/Heading";

const UpcomingEvents = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("https://wegrow-server.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        setMembers(data.users);
      });
  }, []);

  const calculateRemainingDays = (birthDate) => {
    const currentDate = new Date();
    const nextBirthday = new Date(birthDate);
    nextBirthday.setFullYear(currentDate.getFullYear());

    if (currentDate > nextBirthday) {
      nextBirthday.setFullYear(currentDate.getFullYear() + 1);
    }

    const remainingDays = Math.ceil((nextBirthday - currentDate) / (1000 * 60 * 60 * 24));
    return remainingDays;
  };

  return (
    <div className="overflow-x-auto">
      <div className="my-20">
        <div className="w-60 h-1 bg-red-300 mx-auto mb-2"></div>
        <Heading title={'Upcoming Events'} center></Heading>
        <div className="w-60 h-1 bg-red-300 mx-auto mb-2"></div>
      </div>
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Team Members Name</Table.HeadCell>
          <Table.HeadCell>Profile</Table.HeadCell>
          <Table.HeadCell>Date of birth</Table.HeadCell>
          <Table.HeadCell>Remaining Days</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {members && members.length > 0 ? (
            members.map((member, index) => (
              <Table.Row
                key={index}
                className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-sky-100"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {member?.name}
                </Table.Cell>
                <Table.Cell>
                  <Avatar img={member?.companyPhotoUrl} alt="avatar of Jese" />
                </Table.Cell>
                <Table.Cell>{member?.birthDate}</Table.Cell>
                <Table.Cell>{calculateRemainingDays(member?.birthDate)}</Table.Cell>
              </Table.Row>
            ))
          ) : (
            <div className="min-h-[calc(100vh-450px)] flex items-center justify-center">
              <Heading
                center={false}
                title={"No members found"}
                subTitle={"please add some member first"}
              />
            </div>
          )}
        </Table.Body>
      </Table>
    </div>
  );
};

export default UpcomingEvents;
