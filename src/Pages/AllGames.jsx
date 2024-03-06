import React, { useState, useEffect, useCallback } from 'react';
import requests from '../requests';
import Loader from '../Components/Loader';

const AllGames = () => {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchGames = async () => {
    setLoading(true);
    const url = `${requests.allGames}&page=${page}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setGames((prevGames) => [...prevGames, ...data.results]);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data: ', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGames();
    console.log('fetching games...')
  }, [page]);

  const handleScroll = useCallback(() => {
    const threshold = 100; // Umbral de pixels antes de llegar al final de la página
    const position = window.innerHeight + document.documentElement.scrollTop;
    const height = document.documentElement.offsetHeight;
    if (position + threshold >= height) {
      setPage((prevPage) => prevPage + 1);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="flex flex-wrap justify-center">
      {games.map((game) => (
        <div key={game.id} className="p-4 w-96">
          <h3 className="text-lg font-bold">{game.name}</h3>
          <img src={game.background_image} alt={game.name} className="w-full aspect-video object-cover" />
        </div>
      ))}
      {loading && <Loader />}
    </div>
  );
}

export default AllGames
