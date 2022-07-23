import { useState,useEffect } from "react";

export default function useApi(URL, defaultValue = []){
    const [data, setData] = useState(defaultValue)
    console.log(" I am inuseApi")
    const fetchCategories = async ()=>{
        const res = await fetch(URL);
        const data = await res.json();
        setData(data);
        console.log(" I am in fetch useApi")
        

    };
    useEffect(()=>{fetchCategories();},[URL]);
    return {
        data: data
    }
}