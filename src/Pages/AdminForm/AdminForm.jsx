import { Button, Label, Select, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { HiMail } from "react-icons/hi";
import { SiNamecheap } from "react-icons/si";
import { BsCalendar2Date } from "react-icons/bs";
import { FaEyeSlash } from "react-icons/fa";
import { PiPasswordFill } from "react-icons/pi";
import { BiLogoCodepen } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
const AdminForm = () => {
  const {createUser, updateUserProfile} = useContext(AuthContext);
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    console.log(data)
    createUser(data.email, data.password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser);
      toast.success('User created successfully');
      updateUserProfile(data.name, data.photoURL)
      .then(()=>{
        console.log('profile updated')
        reset();
        toast.success('successfully updated');
        navigate('/')
      })
      .catch(error =>{
        console.log(error)
      })
    })
  }

  
  return (
    <>
       <Helmet>
        <title>weGrow | Admin Signup</title>
      </Helmet>
      <div
        className="min-h-screen flex items-center justify-between px-20 py-10 bg-cover bg-center"
        style={{ backgroundImage: `url("https://i.ibb.co/0V9ntNr/1.png")` }}
      >
        <form className="flex max-w-md flex-col gap-4 bg-white p-10 rounded-lg shadow-2xl shadow-red-300 w-[600px] ml-10" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-xl md:text-2xl font-semibold">
            Signup as HR/Admin
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Full Name *" />
              </div>
              <TextInput
                type="text"
                icon={SiNamecheap}
                placeholder=""
                name="name"
                {...register('name', {required: true})}
              />
              {errors.fullname && <span className="text-red-600">This field is required</span>}

            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="companyName" value="Company Name *" />
              </div>
              <TextInput
                type="text"
                icon={SiNamecheap}
                placeholder=""
                name="companyName"
                {...register('companyName', {required:true})}
              />
               {errors.companyName && <span className="text-red-600">This field is required</span>}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="companyPhotoUrl" value="Company Logo *" />
            </div>
            <TextInput
              type="text"
              icon={BiLogoCodepen}
              placeholder=""
              name="companyPhotoUrl"
              {...register('companyPhotoUrl', {required:true})}
            />
             {errors.companyPhotoUrl && <span className="text-red-600">This field is required</span>}
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
              {...register('email', {required:true})}
            />
             {errors.email && <span className="text-red-600">This field is required</span>}
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
              {...register('password', {required:true, minLength:6, maxLength:20,pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/})}
            />
               {errors.password?.type === 'required' && <span className="text-red-600">password is required</span>}
               {errors.password?.type === 'minLength' && <span className="text-red-600">password should be at least 6 characters</span>}
               {errors.password?.type === 'pattern' && <span className="text-red-600">password should have an uppercase, a lowarcase, a symbole and a number</span>}
          </div> 
          <div>
            <div className="mb-2 block">
              <Label htmlFor="birthDate" value="Date of Birth *" />
            </div>
            <TextInput
              type="date"
              icon={BsCalendar2Date}
              name="birthDate"
              placeholder=""
              {...register('birthDate', {required:true})}
            />
             {errors.birthDate && <span className="text-red-600">This field is required</span>}
          </div>
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="countries" value="Select package" />
            </div>
            <Select  {...register('package', {required:true})} >
              <option>Basic</option>
              <option>Standard</option>
              <option>Premium</option>
            </Select>
            {errors.package && <span className="text-red-600">This field is required</span>}
          </div>
          <Button type="submit" outline>
            Signup
          </Button>
          <h2>Already have an account? <Link to='/login'>Login</Link> Now!</h2>
        </form>
      </div>
    </>
  );
};

export default AdminForm;


