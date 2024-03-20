import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPopularAnime } from "../utils/fetchAPI";

export const memoryLoader = async () => {
	const cards = await getPopularAnime();
	return cards.data.slice(0, 9);
};

export default function MemoryCard() {
	const data = useLoaderData();
	console.log(data);
	const [clickedCards, setClickedCards] = useState();

	const renderCards = () => {
		return (
			data &&
			data.map((item, index) => {
				<div key={index}>
					<img src={item.images.jpg.image_url} alt={item.title_english} />
					<h1>{item.title_english}</h1>
				</div>;
			})
		);
	};

	return <div className="w-full h-full flex flex-row">{renderCards()}</div>;
}
