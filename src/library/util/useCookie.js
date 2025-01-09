import {useState} from "react";
const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return undefined;
  };
  
  export const useCookie = (name) => {
    const [cookieValue, setCookieValue] = useState(getCookie(name));
  
    useEffect(() => {
      const cookieHandler = (event) => {
        const newCookieValue = getCookie(name);
        setCookieValue(newCookieValue);
      };
  
      document.addEventListener("cookieChanged", cookieHandler);
      return () => {
        document.removeEventListener("cookieChanged", cookieHandler);
      };
    }, [name]);
  
    return cookieValue;
  };