const key = import.meta.env.VITE_API_KEY

const requests = {
  allGames: `https://api.rawg.io/api/games?key=${key}&page_size=12`,
  lastGames: `https://api.rawg.io/api/games?key=${key}&page_size=20&ordering=-released`,
  nextGames: `https://api.rawg.io/api/games?key=${key}&page_size=20&ordering=released`,
  bestGames: `https://api.rawg.io/api/games?key=${key}&page_size=20&ordering=-metacritic`,
  allGenres: `https://api.rawg.io/api/genres?key=${key}&page_size=40`,
  allDevelopers: `https://api.rawg.io/api/developers?key=${key}`,
  allTags: `https://api.rawg.io/api/tags?key=${key}`,
  allPlatforms: `https://api.rawg.io/api/platforms?key=${key}`,
}

export default requests
