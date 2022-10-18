export const getGifs = async (category) => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=5S1K0jzTHEHFAi4ONKpAbAqZlyY7PwmW&q=${category}&limit=10`;
	const resp = await fetch(url);
	const {data} = await resp.json(); //se destructura para solo obtener el array y no toda la info

	const gifs = data.map((img) => {
		return {
			id: img.id,
			title: img.title,
			imagen: img.images.downsized_medium.url,
		};
	});

	return gifs;
};
