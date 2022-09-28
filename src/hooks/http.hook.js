import { useCallback } from "react";
export const useHttpRequest = () =>{
const request = useCallback(async (url, method = 'GET', headers = {'Content-Type': 'application/json'}, body = null) =>{
  const res = await fetch(url, {method, headers, body})

  if (!res.ok) {
    throw new Error(`Error in path ${url}`)
  }
 const data =  await res.json()
 return data
}, [])

return {request};
}


