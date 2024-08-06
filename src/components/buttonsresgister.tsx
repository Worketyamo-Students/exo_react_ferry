
interface buttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    type: "submit" | "reset" | "button";
    name: string;
    text?: string;
    // className?: string;
    // icon?: React.ReactNode;

  }
  const BoutonNavBar:React.FC<buttonProps>=({
    type,
    text,
})=>{
   return (
    
    <>
     <button type={type} className='w-fit h-[6rem] text-[1.7rem] text-white bg-buttonbgcolor rounded-lg px-[2rem] text-center '>
        {text}
        {/* {icon} */}
      </button>
    </>

   )
}
export default BoutonNavBar