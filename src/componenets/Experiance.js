// import Boxy from "./box_ico.jsx";
// import Learn from "./learn_button.jsx"
import LearnMore from "./LearnMore"
import Cube from "./Cube"

export default function Experiance(){
    return(
        <div className="flex bg-purple-900 sm:px-24 px-8 pt-16 pb-12 space-x-2 h-fit w-full flex-col">
            <div className="text-white py-3">Experience</div>
            <div className="flex lg:flex-row flex-col-reverse">
            <div className="h-auto lg:w-1/2  flex flex-col w-full space-y-9"> 
                <p className="md:text-6xl text-3xl font-bold text-white">LOREM IPSUM</p>
                <p className="pt-16 pb-12 text-white">Lorem ipsum</p>
                {/* <div className="bg-gray-200 w-64 h-64 visible md:hidden">
                </div> */}
                <div className="flex space-x-2">
               
                 <Cube name="Technical" disp="Experience the latest advancements in
                        technology through workshops,
                        competitions, and exhibitions"/>
               
                 <Cube name="Cultural" disp="Immerse yourself in the vibrant cultural
                        performances, art exhibitions, and music
                        concerts."/>
                </div>
               
               <div><LearnMore/></div> 
            </div>

            <div className="bg-gray-200 my-4 lg:w-1/2 w-full h-[50vw] md:h-[40vw] ">
            </div>
            </div>
        </div>
    )
}