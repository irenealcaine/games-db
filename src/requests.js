const key = import.meta.env.VITE_API_KEY

const requests = {
  allGames: `https://api.rawg.io/api/games?key=${key}&page_size=40`,
  lastGames: `https://api.rawg.io/api/games?key=${key}&page_size=10&ordering=-released`,
  bestGames: `https://api.rawg.io/api/games?key=${key}&page_size=10&ordering=-metacritic`,
  allGenres: `https://api.rawg.io/api/genres?key=${key}`,
  allDevelopers: `https://api.rawg.io/api/developers?key=${key}`,
  allTags: `https://api.rawg.io/api/tags?key=${key}`,
  allPlatforms: `https://api.rawg.io/api/platforms?key=${key}`,
}

export default requests
