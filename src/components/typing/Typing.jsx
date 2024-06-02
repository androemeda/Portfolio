import React, { useEffect, useState } from 'react'

function Typing({text , typingSpeed , deletingSpeed , duration}) {

    const [displayedText , setDisplayedText] = useState("");
    const [isDeleting , setIsDeleting] = useState(false);
    const [index , setIndex] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
          if(!isDeleting){
            if(displayedText.length < text[index].length){
              setDisplayedText(displayedText+text[index].charAt(displayedText.length))
            }
            else{
              setTimeout(() => {
                setIsDeleting(true);
              } , duration);
            }
          }
          else{
            if(displayedText.length > 0){
              setDisplayedText(displayedText.slice(0,-1));
            }
            else{
              setIsDeleting(false);
              setIndex((prev) => (prev+1)%text.length);
            }
          }
        }

        const timeout = setTimeout(handleTyping , (isDeleting)?deletingSpeed:typingSpeed);

        return () => clearTimeout(timeout);

    } , [displayedText , isDeleting , index , text , typingSpeed , deletingSpeed])

  return (
    <div className='typing-effect'>
        <h1 className='caret' style={{color:'white'}}>I am <span style={{color:'#96E9C6'}}>{displayedText+"|"}</span></h1>
    </div>
  )
}

export default Typing;