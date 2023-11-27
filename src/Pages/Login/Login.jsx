import { Helmet} from "react-helmet-async";
import { Button,  Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10 py-10">
    <Helmet>
      <title>weGrow | Login</title>
    </Helmet>
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <img src="https://i.ibb.co/r37rp7y/login2.png" className="h-[500px]"/>
    </div>
      <div className="shadow-md w-2/3 p-10"> 
      <h1 className="text-3xl font-semibold mb-10">Login Now!</h1>
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" required />
        </div>
        <div className="flex items-center gap-2">
          <h1>Do not have any account? <Link to="/signup"><span className="font-semibold text-blue-800 hover:cursor-pointer hover:underline">Signup</span></Link> now!</h1>
        </div>
        <Button type="submit">Submit</Button>
      </form>
      </div>
    </div>
  );
};

export default Login;
