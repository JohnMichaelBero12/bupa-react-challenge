import React, { useState } from 'react'
import Card from '../components/Card'
import { AuthorListProps, BookProps } from '../utils/types';

type CardsProps = {
  isHardCoverOnly: boolean,
  gender: string[],
  authorList: AuthorListProps,
  isLoading: boolean,
  books: BookProps[]
}
const Cards = ({isHardCoverOnly,gender,authorList,isLoading,books}: CardsProps) => { 
  debugger;
  return (
    <div className='cards'>
      {isLoading && <p>loading.....</p>}
        {gender?.map((item,index) => 
        <Card 
            key={index} 
            gender={item} 
            isHardCoverOnly={isHardCoverOnly}
            authorList={authorList}
            books={books}
        />)}
    </div>
  )
}

export default Cards