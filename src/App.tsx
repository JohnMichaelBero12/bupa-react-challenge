import React, { useState } from 'react'
import Cards from './components/Cards'
import Buttons from './components/Buttons'
const App = () => {
  const [isHardCoverOnly, setIsHardCoverOnly] = useState(false);

  //toggle Hardcover and get all books
  const handleHardCoverBtn = () => setIsHardCoverOnly(true) ;
  const handleGetBooksBtn = () => setIsHardCoverOnly(false);
  
  return (
    <>
    <Cards isHardCoverOnly={isHardCoverOnly} />
    <Buttons 
      handleHardCoverBtn={handleHardCoverBtn}
      handleGetBooksBtn={handleGetBooksBtn}
    />
    </>
  )
}

export default App