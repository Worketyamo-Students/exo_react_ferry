
interface buttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    type: "submit" | "reset" | "button";
    name: string;
    text?: string;
    // className?: string;
    // icon?: React.ReactNode;

  }
  const BoutonNavBar2:React.FC<buttonProps>=({
    type,
    text,
})=>{
   return (
    
    <>
     <button type={type} className='w-[12rem] h-[5rem] text-[1.7rem] text-buttonbgcolor bg-white rounded-lg' >
        {text}
        {/* {icon} */}
      </button>
    </>

   )
}
export default BoutonNavBar2