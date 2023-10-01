

const Evnt = (props) => {
   
    return (
      <>
      <div className="flex flex-col mx-2 text-white justify-center items-center space-y-2">
      <div className="bg-gray-200 flex  my-4 sm:w-[425px] w-full h-[290px] "> </div>
        <p className="font-semibold   text-2xl">{props.name}</p>
        <p className="text-sm text-[#929292]">{props.disp}</p>
        <a href="#"><p className="text-[#666666]">Learn More</p></a>
        </div> 
      </>
    )
  }
  
  export default Evnt
  