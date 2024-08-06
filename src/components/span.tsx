

interface Word {
    word: string
}

const Word=({word}:Word)=>{

  return (
    <span className="text-buttonbgcolor">
        {word}
    </span>
  )

}

export default Word