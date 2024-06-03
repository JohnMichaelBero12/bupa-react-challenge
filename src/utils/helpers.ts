import  _ from 'lodash'
import { AuthorListProps } from '../utils/types';

export const filterBooks = (authorList: AuthorListProps) => {
    const filterBooks = authorList.filter((item) => item.books !== null);
    let books = _.sortBy(_.flatMap(filterBooks,"books"),"name");
    return books;
 }
 