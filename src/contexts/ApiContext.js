import { createContext, useState } from "react";

export const AllJobsApiContext = createContext(null)

export default function ApiProvider({children}){
    const [apiUrl, setApiUrl] = useState("https://boards-api.greenhouse.io/v1/boards/mx51dev/jobs");

    return (
        <AllJobsApiContext.Provider value={
            {
                api: apiUrl, 
                setApi: setApiUrl
            }
        }>
            {children}
        </AllJobsApiContext.Provider>
    );
}