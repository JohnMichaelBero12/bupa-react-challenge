import React, { useState } from 'react'
import Card from '../components/Card'
import { AuthorListProps, BookProps } from '../utils/types';

type CardsProps = {
  bookType: string,
  gender: any[],
  authorList: AuthorListProps,
  isLoading: boolean,
  books: BookProps[]
}
const Cards = ({bookType,gender,authorList,isLoading,books}: CardsProps) => { 
  return (
    <div className='cards'>
      {isLoading && <p>loading.....</p>}
        {gender?.map((item,index) => 
        <Card 
            key={index} 
            gender={item} 
            bookType={bookType}
            authorList={authorList}
            books={books}
        />)}
    </div>
  )
}

export default Cards