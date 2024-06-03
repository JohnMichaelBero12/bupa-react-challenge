export type AuthorListProps = 
    {   
        authors:
        {
            name: string,
            gender: string,
            age: number,
            books: {
                name: string,
                type: string
            }[] | null
        }[]
    }