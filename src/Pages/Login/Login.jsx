import { Helmet} from "react-helmet-async";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
const Login = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10">
    <Helmet>
      <title>weGrow | Login</title>
    </Helmet>
    <div>
        <img src="https://i.ibb.co/r37rp7y/login2.png" className="h-[500px]"/>
    </div>
      <div> 
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
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
      </div>
    </div>
  );
};

export default Login;
