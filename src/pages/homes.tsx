import Main from '@/components/main';

import Header from '../components/navbar';

const App=()=>{

    return(
        <body className='w-screen h-screen bg-bgcolors flex flex-col'>
            <Header />
            <Main />
        </body>
    )
}

export default App