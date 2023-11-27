
import { Link } from "react-router-dom";

const Signup = () => {
  const cards = [
    {
      image: "https://i.ibb.co/sjLKJpW/login.png",
      buttonText: "Join as an Employee",
      link:'/employeesignup'
    },
    {
      image: "https://i.ibb.co/WxWGKFS/employee1.png",
      buttonText: "Join as an Admin/HR",
      link:"/adminsignup"
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-10 py-10">
      {cards.map((card, index) => (
        <div
          key={index}
          className="h-80 md:h-[60vh] rounded-xl relative bg-cover bg-center bg-blue-300 hover:bg-gray-600"
          style={{ backgroundImage: `url(${card.image})` }}
        >
        <div className="absolute inset-0 bg-gray-100 opacity-20 rounded-lg"></div>
          <div className="absolute inset-0 flex items-center justify-center gap-10">
            <Link to={card.link} className="p-3 bg-orange-500 text-white rounded-lg hover:bg-blue-300 hover:text-black">
              {card.buttonText}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Signup;
