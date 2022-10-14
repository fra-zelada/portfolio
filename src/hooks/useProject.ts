import useSWR from "swr";
import { IProject } from "../interfaces/IProject";

export const useProject =  () => {
        
    const { data , error } = useSWR<IProject[]>('/api/project' ) ;

    return {
        data: data || [],
        isLoading: !error && !data,
        isError: error
    }

};