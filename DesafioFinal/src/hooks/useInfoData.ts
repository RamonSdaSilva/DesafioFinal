import axios, { AxiosPromise } from "axios"
import { infoData } from "../interface/InfoData";
import { useQuery } from "@tanstack/react-query";

const API_URL_INFORMACAO = 'http://localhost:8080';

const fetchData = async ():AxiosPromise<infoData[]> => {
    const response = axios.get(API_URL_INFORMACAO + "/informacao")
    return response;
}

export function useInfoData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['info-data'],
        retry: 2
    })

    return {
        ...query,
        INFO: query.data?.data
    }
}