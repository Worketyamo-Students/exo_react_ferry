import React from 'react';

interface LiensProps extends React.LinkHTMLAttributes<HTMLInputElement>{

url: string;
text:string;
}
const Liens:React.FC<LiensProps>= (
    { url,
    text,
    }
)=>{


    return(
        <>
            <a href={url}  className='text-[2rem] text-navbartextcolor hover:underline hover:decoration-[0.5rem] hover:text-buttonbgcolor'>{text}</a>
        </>
    )
}

export default Liens