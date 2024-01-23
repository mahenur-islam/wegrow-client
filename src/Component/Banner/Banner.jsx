import { Button, Carousel } from "flowbite-react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="h-80 md:h-[100vh]">
      <Carousel slideInterval={2000}>
        <div className="h-full flex items-center justify-center gap-10">
          <img
            src="https://i.ibb.co/k5SvP4x/admin1.png"
            alt="..."
            className="w-56 md:w-96 h-[100ox]"
          />
          <div className="p-8">
            <Button outline className="text-xl">
             <Link to="/adminform"> Join as HR/Admin</Link>
            </Button>
          </div>
        </div>
        <div className="h-full flex items-center justify-center gap-10">
          <img
            src="https://i.ibb.co/WxWGKFS/employee1.png"
            alt="..."
            className="w-56 md:w-96 h-[100ox]"
          />
          <div className="p-8">
            <Button outline className="text-xl">
             <Link to="/employeeform">Join as Employee</Link>
            </Button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
