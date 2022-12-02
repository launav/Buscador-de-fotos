import { useEffect, useState } from "react"
import { ConsultaPexels } from "../api/ConsultaPexels"

export const useFetchPhotos = (category) => {

    const [photosCategory, setPhotosCategory] = useState([])

    //para que cargue la pagina
    const [itsLoading, setItsLoading] = useState(true)

    const getData = async () => {
        const { photos } = await ConsultaPexels(category)
        // console.log(photos)
        const newPhotos = photos.map(photo => (
            {
                id: photo.id,
                url: photo.src.medium,
                alt: photo.alt,
                author: photo.photographer,
                author_url: photo.photographer_url
            }
        ))

        // console.log(newPhotos)
        setPhotosCategory(newPhotos)
        setItsLoading(false)
    }



    useEffect(() => {
        getData()
    }, [])

    return {
        photosCategory,
        itsLoading
    }

}

