import React from 'react'
import { useFetchPhotos } from '../hooks/useFetchPhotos'
import GridCard from './GridCard'

export const GridCategory = ({ category }) => {

    const { photosCategory, itsLoading } = useFetchPhotos(category)


    return (
        <section>
            {/* grid item */}
            <h2>{category}</h2>
            <div className='row'>
                {


                    (itsLoading) ? (
                        <div className='d-flex justify-content-center'>
                            <img src="https://cfpvergedecortes.es/wp-content/uploads/2016/02/loading-1.gif" alt="" />
                        </div>
                    ) : (

                        photosCategory.map(photo => (
                            <GridCard key={photo.id} {...photo} />
                        )))

                }

            </div>




        </section>



    )
}
