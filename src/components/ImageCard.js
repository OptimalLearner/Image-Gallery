import React from 'react';

const ImageCard = ({ image }) => {
    const tags = image.tags.split(',');
    return (
        <div className="max-w-sm md:mx-0 mx-4 rounded overflow-hidden shadow-lg mb-3 font-monda">
            <img src={image.webformatURL} alt="" className="w-full" />
            <div className="px-6 py-4">
                <div className="font-bold text-purple-500 text-xl mb-2 text-center">
                    Photo by {image.user}
                </div>
                <ul>
                    <li>
                        <strong>Views: </strong> {image.views}
                    </li>
                    <li>
                        <strong>Downloads: </strong> {image.downloads}
                    </li>
                    <li>
                        <strong>Likes: </strong> {image.likes}
                    </li>
                </ul>
                <div className="text-lg my-2 text-center">
                    Check it out on <a href={image.pageURL} target="_blank" rel="noopener noreferrer" aria-label="Pixabay" className="font-bold text-purple-500"> Pixabay </a>
                </div>
            </div>
            <div className="px-6 pt-1 pb-4 flex justify-center items-center">
                {tags.map((tag, index) => (
                    <span key={index} className="inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-purple-600 mr-2"> #{tag} </span>
                ))}
            </div>
        </div>
    )
}

export default ImageCard;