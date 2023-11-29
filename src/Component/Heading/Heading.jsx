/* eslint-disable react/prop-types */
const Heading = ({title, subTitle, center}) => {
    return (
        <div className={center ? 'text-center':"text-start"}>
            <h1 className='text-2xl font-bold text-black'>{title}</h1>
            <h5 className='font-bold text-neutral-500 mt-2'>{subTitle}</h5>
        </div>
    );
};

export default Heading;