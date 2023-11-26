import { Button, Label, Select, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { SiNamecheap } from "react-icons/si";
import { BsCalendar2Date } from "react-icons/bs";
import { FaEyeSlash } from "react-icons/fa";
import { PiPasswordFill } from "react-icons/pi";
import { BiLogoCodepen } from "react-icons/bi";
const AdminForm = () => {
  return (
    <div>
      <div
        className="min-h-screen flex items-center justify-between px-20 py-10 bg-cover bg-center"
        style={{ backgroundImage: `url("https://i.ibb.co/0V9ntNr/1.png")` }}
      >
        <form className="flex max-w-md flex-col gap-4 bg-white p-10 rounded-lg shadow-2xl shadow-red-300 w-[600px] ml-10">
          <h1 className="text-xl md:text-2xl font-semibold">
            Signup as Employee
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
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
                <Label htmlFor="companyName" value="Company Name *" />
              </div>
              <TextInput
                id="name"
                type="text"
                icon={SiNamecheap}
                placeholder=""
                name="companyName"
                required
              />
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="companyPhotoUrl" value="Company Logo *" />
            </div>
            <TextInput
              id="name"
              type="text"
              icon={BiLogoCodepen}
              placeholder=""
              name="companyPhotoUrl"
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
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="countries" value="Select package" />
            </div>
            <Select id="package" required>
              <option>Basic</option>
              <option>Standard</option>
              <option>Premium</option>
            </Select>
          </div>
          <Button type="submit" outline>
            Signup
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminForm;
