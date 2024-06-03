import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'
import Buttons from '../components/Buttons'
import { getData } from '../hooks/useQuery'
import { STRING_BASEURL } from '../utils/const';
import { filterBooks } from  '../utils/helpers';
import { useQuery } from '@tanstack/react-query'
import { fetchData } from '../services/api'

type genderProps = {
    gender: string
  }
  
const BookListPage = () => {
    const [bookType, setBookType] = useState("");

    const handleFilterByTypes = (type: string) => setBookType(type);
   const handleGetBooksBtn = () => setBookType("");
   const {data: authorList, isLoading } = getData(STRING_BASEURL);
    const gender = [...new Set(authorList?.data?.map((item:genderProps) => item.gender))];
    const books = filterBooks(authorList?.data);
    const types = [...new Set(books?.map((item) => item.type))];
  return (
    <>
        <Cards 
            bookType={bookType} 
            gender={gender} 
            authorList={authorList?.data} 
            isLoading={isLoading}
            books={books}
        />
        <Buttons 
            handleFilterByTypes={handleFilterByTypes}
            handleGetBooksBtn={handleGetBooksBtn}
            types={types}
        />
    </>
  )
}

export default BookListPage