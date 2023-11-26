import { Button,  Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { SiNamecheap } from "react-icons/si";
import { BsCalendar2Date } from "react-icons/bs";
import { FaEyeSlash } from "react-icons/fa";
import { PiPasswordFill } from "react-icons/pi";
const EmployeeForm = () => {
  return (
    <div>
      <div
        className="min-h-screen flex items-center justify-between px-32 bg-cover bg-center"
        style={{ backgroundImage: `url("https://i.ibb.co/MZX7QFK/3.png")` }}
      >
        <form className="flex max-w-md flex-col gap-4 bg-white p-10 rounded-lg shadow-2xl shadow-gray-700 w-1/2">
        <h1 className="text-xl md:text-2xl font-semibold">Signup as Employee</h1>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="fullname" value="Full Name *" />
            </div>
            <TextInput
              id="name"
              type="text"
              icon={SiNamecheap}
              placeholder=""
              name="fullname"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email *" />
            </div>
            <TextInput
              id="email"
              type="email"
              icon={HiMail}
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Password *" />
            </div>
            <TextInput
              type="password"
              icon={PiPasswordFill}
              placeholder="password"
              name="password"
              rightIcon={FaEyeSlash}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="birthDate" value="Date of Birth *" />
            </div>
            <TextInput
              type="date"
              icon={BsCalendar2Date}
              name="date"
              placeholder=""
              required
            />
          </div>
          <Button type="submit" outline>Signup</Button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;
