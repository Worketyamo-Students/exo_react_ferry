import { TbUsers } from 'react-icons/tb';

interface Texte {
    text: string;
}

const Secicon=(
    {text}:Texte
)=>{

return(
    <div className='h-[7rem] w-fit bg-bgRose rounded-[0.5rem] flex items-center gap-[2rem] px-[2rem] py-[3rem]'>

    <div className="rounded-full bg-buttonbgcolor w-[5rem] h-[5rem] flex justify-center items-center">
      <TbUsers className='w-[3rem] h-[3rem] text-white'/>
    </div>
    <p className='text-buttonbgcolor text-[2rem]'>
        {text}
    </p>

    </div>
   
)
}

export default Secicon