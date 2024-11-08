"use client"
import { useCallback, useEffect, useState } from "react";
import Carousel from "./Carousel";

const getApiData = async() => {
    const getData = await fetch("http://localhost:3000/api/carousel")
    try{
        const carouselData = await getData.json()
        console.log(carouselData)
        return carouselData;
    }catch(err){
        return (err as Error) || "Failed to fetch Data"
    }
}

interface CarouselData {
    id: number;
    headline: string;
    intro: string;
}

const page = () => {

    const [data , updateData] = useState<CarouselData[] | null>(null)
    const [isLoading , updateLoadingState] = useState<boolean>(false)
    const [isError , updateError] = useState<string | null>("")

    const getCarouselData = useCallback(async() => {
        const getData = await getApiData();
        updateLoadingState(true)
        try{
            if(getData){
                updateData(getData)
            }else{
                updateData([])
            }
        }catch(err){
            updateError((err as Error).message || "Something went Wrong") 
        }finally{
            updateLoadingState(false)
        }
    },[])

    useEffect(() => {
        getCarouselData();
    },[getCarouselData])

    console.log(data)

    if(isLoading) return <>...Loader</>
    if(isError) return <>{isError}</>
    return (
        <div>
            <Carousel data={data || []} />
        </div>
    )
}
export default page
