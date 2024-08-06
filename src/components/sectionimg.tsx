import enfants from '../../public/enfants.svg';
import rose from '../../public/rose.svg';

const Sectionimg=()=>{


return(

   <div className="w-[35%] h-full flex relative pt-4">
    <img src={rose} alt="" className='absolute left-[20rem]'/>
    <img src={enfants} alt="" className='absolute top-[3rem] h-[95%]'/>
   </div>

)

}

export default Sectionimg