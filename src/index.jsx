import { useState } from "react"


export default function ImageSlider({url, limit}){
    const [images, setImages] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const[errorMsg, setErrorMsg] = useState(null)
    const[loading, setLoading] = useState(false)

    async function getImages(getUrl){
        try{
            setLoading(true)
            const response = await fetch(getUrl)
            const data = await response.json()
            
            if(data){
                getImages(data)
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

    if(loading){
        return <div>Loading data... Please Wait</div>
    }
    if(errorMsg !== null){
        return<div>Error!! Please try again {errorMsg}</div>
    }


    return <div className="container">

    </div>
}