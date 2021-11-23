import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ImageCard from './components/ImageCard';
import Footer from './components/Footer';
const perPageResults = 12;

function App() {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [term, setTerm] = useState('');
	const [pageOffset, setPageOffset] = useState(1);

	useEffect(() => {
		fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true&per_page=${perPageResults}&page=${pageOffset}`)
			.then(res => res.json())
			.then(data => {
				setImages([...images ,...data.hits]);
				setIsLoading(false);
			})
			.catch(err => console.log(err))
	}, [term, pageOffset]);

	const getMoreImage = () => {
		setPageOffset(pageOffset + 1);
	}

  	return (
    	<div>
     		<Header searchText={(text) => {
				if(text !== term) {
					setTerm(text);
					setImages([]);
					setPageOffset(1);
				}
			}} />

			{!isLoading && images.length === 0 && <h1 className="h-32 flex justify-center items-center text-3xl font-monda"> No images found for this search :っ( </h1>}

      		{isLoading ? <h1 className="h-32 flex justify-center items-center text-3xl font-monda my-5"> ＼(￣O￣) Loading .....</h1> : <div className="container flex justify-center items-center flex-col mx-auto mt-10">
				<div className="flex justify-center items-center flex-wrap gap-4">
					{images.map(image => (
						<ImageCard key={image.id} image={image} />
					))}
				</div>
				{(isLoading || images.length !== 0) && <button type="button" aria-label="more-images" className="font-monda bg-purple-500 hover:bg-purple-700 text-1xl text-white font-monga my-8 py-2 px-5 rounded focus:outline-none" onClick={getMoreImage}> See More Results </button> }
			</div> }

			<Footer />
    	</div>
  );
}

export default App;
