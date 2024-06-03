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
    const [isHardCoverOnly, setIsHardCoverOnly] = useState(false);

    const handleFilterByTypes = () => setIsHardCoverOnly(true) ;
    const handleGetBooksBtn = () => setIsHardCoverOnly(false);

    const {data: authorList, isLoading, isError, isFetched } = useQuery({
        queryKey: ["fetchData"],
        queryFn: () => fetchData(STRING_BASEURL),
    })
   // const {data: authorList, isLoading } = getData(STRING_BASEURL);
    const gender: any[] = [...new Set(authorList?.data?.map((item:genderProps) => item.gender))];
    const books = filterBooks(authorList?.data);
    const types = [...new Set(books.map((item) => item.type))];
  return (
    <>
        <Cards 
            isHardCoverOnly={isHardCoverOnly} 
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