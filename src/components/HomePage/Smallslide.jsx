export const Smallslide = ({ image, para }) => {
  return (
    <div className="h-[80px] w-[350px] bg-white m-auto rounded-lg shadow-md flex flex-row gap-[20px] p-[4%] mb-[5px]">
      <div >
        <img src={image} alt="" className="h-20 w-20" />
      </div>
      <div>
        <p>{para}</p>
      </div>
    </div>
  );
};
