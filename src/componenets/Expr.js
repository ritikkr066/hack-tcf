

const Cube = (props) => {
   
    return (
      <>
      <div className="flex flex-col text-white space-y-2">
        <p className="font-semibold sm:text-3xl text-2xl">{props.name}</p>
        <p className="text-sm text-[#929292]">{props.disp}</p>
        </div> 
      </>
    )
  }
  
  export default Cube
  