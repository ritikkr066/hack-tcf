
const Cube2 = (props) => {
   
    return (
      <>
      <div className="flex flex-col justify-center items-center mx-2 my-4 text-white space-y-2">
         <img src="/box.svg" width={50} height={50} alt="box"/>
        <p className="font-bold text-xl">{props.name}</p>
        <p>{props.disp}</p>
        </div> 
      </>
    )
  }
  
  export default Cube2
  