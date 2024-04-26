import { useState } from "react"
import { useEffect } from "react"
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"



export default function ImageSlider({url, limit , page}){
    const [images, setImages] = useState([])
    // const [currentSlide, setCurrentSlide] = useState(0)X
    const[errorMsg, setErrorMsg] = useState(null)
    const[loading, setLoading] = useState(false)
// get and fetch images
    async function fetchImages(getUrl){
        try{
            setLoading(true)
            const response = await fetch(`${getUrl}?page=1&limit=5`)
            const data = await response.json()
            
            if(data){
                setImages(data)
                setLoading(false)
            }
        }
        catch(e){
            setErrorMsg(e.message)
        }
    }

    useEffect(()=>{
        if(url !== '')fetchImages(url)
    }, [url])

    console.log(images);

    if(loading){
        return <div>Loading data... Please Wait</div>
    }
    if(errorMsg !== null){
        return<div>Error!! Please try again {errorMsg}</div>
    }


    return <div className="container">
        <BsArrowLeftCircleFill className="arrow arrow-left"/>
        {
            images && images.length? 
            images.map(imageItem =>(
                <img
                key = {imageItem.id}
                alt={imageItem.download_url}
                src={imageItem.download_url}
                className="current-image"
                ></img>
            ) )
            :null
        }
        <BsArrowRightCircleFill className="arrow arrow-right"/>
        <span className="cirle-indicators">
            {
            images&&images.length ?
            images.map((_,index)=>
            <button
            key={index}
            className="current-indicator"
            ></button>) :null
            } </span>
    </div>
}