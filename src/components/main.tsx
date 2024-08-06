import Secicon from './icones';
import Sectionimg from './sectionimg';
import Sectiontext from './sectiontext';

const Main=()=>{


return(
    <main className=" flex-1 px-[17rem]">
 
    <section className="flex flex-row w-full h-[75%] justify-between">
         <Sectiontext/>
         <Sectionimg/>
    </section>
    <section className= ' w-full h-[25%] flex justify-center items-center gap-[3rem]'>
       <Secicon text='Orphans'/>
       <Secicon text='Poverty Relieved Childen'/>
       <Secicon text='Scholarship Based Students'/>
    </section>
    

    </main>
)
}

export default Main 