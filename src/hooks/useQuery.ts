import { useQuery } from '@tanstack/react-query'
import { fetchData } from '../services/api'

export const getData = (baseURL: string) => {
    const data = useQuery({
        queryKey: ["fetchData"],
        queryFn: () => fetchData(baseURL),
    })
    return data;
}
