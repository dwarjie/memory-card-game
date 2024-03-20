export const getPopularAnime = async () => {
	const response = await fetch(
		"https://api.jikan.moe/v4/top/anime?filter=bypopularity"
	).then((data) => {
		return data.json();
	});

	return response;
};
