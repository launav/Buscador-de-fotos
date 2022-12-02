import React from 'react'

const GridCard = ({ id, url, author, alt, author_url }) => {

    return (
        <article className='card col-md-4'>
            <div className='card-body'>
                <h3>
                    <a href={author_url} target="_black">{author}</a>
                    </h3>
            </div>
            <img src={url} alt={alt} />
        </article>
    )
}

export default GridCard
