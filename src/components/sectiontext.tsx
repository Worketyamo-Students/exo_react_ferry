import BoutonNavBar from './buttonsresgister';
import Word from './span';

const Sectiontext=()=>{


return(

   <div className="w-[60%] h-full flex flex-col justify-center gap-[3rem]">
    <h1 className='text-[9rem] font-semibold'>
         Help build a <Word word="Better  Society "/>   for <Word word="All"/>
    </h1>
    <p className='text-[3rem] text-paragraph_colors'>
    Lorem ipsum dolor sit amet consectetur. Ac amet libero facilisis hendrerit pulvinar massa placerat. 
    </p>

    <BoutonNavBar type="button" name="Donate now" text="Donate now" />
   </div>

)

}

export default Sectiontext