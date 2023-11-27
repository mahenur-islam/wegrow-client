const Profile = () => {
  // Assuming you have user data, replace this with actual user data
  const userData = {
    profilePicture: "https://i.ibb.co/rfHpRjg/admin2.png",
    name: "John Doe",
    email: "john.doe@example.com",
    dateOfBirth: "1990-01-01", // Replace with the actual date of birth
  };

  const handleUpdateProfile = () => {
    // Add your update profile logic here
    console.log("Update profile button clicked");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <img
            src={userData.profilePicture}
            alt="Profile"
            className="w-24 h-24 rounded-full mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">{userData.name}</h2>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <p className="text-gray-800">{userData.email}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Date of Birth</label>
          <p className="text-gray-800">{userData.dateOfBirth}</p>
        </div>
        <button
          onClick={handleUpdateProfile}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
