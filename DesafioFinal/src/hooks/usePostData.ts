import axios, { AxiosPromise } from "axios"
import { PostData } from "../interface/PostaData";
import { useQuery } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const fetchData = async ():AxiosPromise<PostData[]> => {
    const response = axios.get(API_URL + "/postagem")
    return response;
}

export function usePostData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['food-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}