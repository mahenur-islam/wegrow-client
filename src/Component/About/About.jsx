const About = () => {
    return (
        <div className="relative h-80 md:h-[600px]">
        <img
          src="https://i.ibb.co/G2BXcV3/5.png" 
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-start p-8">
          <div>
            <h1 className="text-4xl font-bold mb-4">We<span className="text-red-800">Grow</span></h1>
            <p className="text-lg">description goes here.</p>
          </div>
        </div>
      </div>
    );
};

export default About;