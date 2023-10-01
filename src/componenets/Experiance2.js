// import Boxy from "./box_ico.jsx";
// import Learn from "./learn_button.jsx"
import LearnMore from "./LearnMore"
import Expr from "./Expr"

export default function Experiance2(){
    return(
        <div className="flex bg-purple-900 sm:px-24 px-8 pt-8 pb-12 space-x-2 h-fit w-full flex-col">
            
            <div className="flex lg:flex-row flex-col">
            <div className="bg-gray-200 my-4 lg:w-1/2 w-full h-[50vw] md:h-[40vw] ">
            </div>
            <div className="h-auto lg:w-1/2 md:pl-8 py-8  flex flex-col w-full space-y-9"> 
            <Expr name="Exciting Fest Highlights Await" disp="Join us for a thrilling celebration of Technology and culture at Corona and
Melange, the Annuual fest of NIT Patna. Experience a wide range of events,
workshops, performances, and more."/>
             <Expr name="Unforgettable Experiences Await" disp="Get ready to be amazed by the incredible lineup of activities at Corona and
Melange. From technical competitions to art exhibitions, there’s something for
everyone to enjoy."/>
             <Expr name="Engaging Workshops and Talks" disp="Expand your knowledge and skills through interactive workshops and insightful
talks by industry experts. Don’t miss this opportunity to learn from the best."/>
            </div>

           
            </div>
        </div>
    )
}