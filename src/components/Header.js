import React, { useState } from 'react';
import backgroundImg from '../assets/abstract-background-img.jpg'
import SearchIcon from '@mui/icons-material/Search';
import GitHubIcon from '@mui/icons-material/GitHub';

const Header = ({ searchText }) => {
    const [text, setText] = useState('');

    const styles = {
        header: {
            backgroundImage: `url(${backgroundImg})`,
            height: '70vh'
        },
        content: {
            height: 'inherit',
            width: '100%',
            backgroundColor: 'rgba(120,81,169, 0.3)'
        },
        material_icon: {
            cursor: 'pointer',
            width: '2rem',
            height: '2rem'
        }
    };

    const onSubmit = e => {
        e.preventDefault();
        searchText(text);
    }

    return (
        <div className="w-full bg-no-repeat bg-top bg-cover" style={styles.header}>
            <div className="flex justify-center items-center flex-col text-white text-4xl w-full relative" style={styles.content}>
                <span className="md:text-4xl text-xl absolute top-0 left-0 md:mt-8 mt-12 md:ml-16 ml-6 font-secular-one"> Image Gallery </span>
                <a href="https://github.com/OptimalLearner/Image-Gallery" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-6xl absolute top-0 right-0 md:mr-16 mr-6 md:mt-0 mt-1"> <GitHubIcon style={styles.material_icon} /> </a>
                <h1 className="font-monda md:text-3xl text-xl md:px-0 px-4 text-center"> Image Gallery with Stunning Images </h1>
                <form onSubmit={onSubmit} className="flex items-center md:flex-row flex-col md:py-8 py-2 md:w-6/12 w-25 mx-16 font-monda">
                    <input onChange={e => setText(e.target.value)} className="flex-grow appearance-none bg-transparent border-solid border-4 border-light-blue-400 rounded-lg text-white md:text-2xl text-xl md:mr-3 mr-0 md:my-4 my-3 py-2 px-3 leading-tight focus:outline-none" type="text" placeholder="Search for any image ...." />
                    <button type="submit" aria-label="search" className="bg-purple-500 hover:bg-purple-700 text-3xl text-white md:py-4 py-3 md:px-5 px-3 rounded-lg flex justify-center items-center"><SearchIcon /></button>
                </form>
                <span className="md:text-xl text-base absolute bottom-0 mb-5 px-4 text-center"> IMAGES FETCHED FROM <a href="https://pixabay.com/api/docs/" target="_blank" rel="noopener noreferrer" className="font-bold text-purple-400">PIXABAY API </a> </span>
            </div>
        </div>
    )
}

export default Header;