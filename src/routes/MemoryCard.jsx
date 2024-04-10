import { useLoaderData, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPopularAnime } from "../utils/fetchAPI";
import { randomIndex } from "../utils/randomCards";
import LoadingScreen from "../components/LoadingScreen";
import { saveScore } from "../utils/saveScore";

export const memoryLoader = async () => {
	const cards = await getPopularAnime();
	return cards.data;
};

export default function MemoryCard() {
	const data = useLoaderData();
	const navigate = useNavigate();
	const [score, setScore] = useState(0);
	const [clickedCards, setClickedCards] = useState([]);
	const [selectedCards, setSelectedCards] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (data) getRandomCards();

		if (selectedCards) setLoading(false);
	}, []);

	useEffect(() => {
		if (score === 9) {
			navigate(`../win/${score}`);
		}
	}, [score]);

	const chooseCard = (card) => {
		if (clickedCards.includes(card)) {
			navigate(`../lost/${score}`);
		}

		let chosenCard = clickedCards || [];
		chosenCard.push(card);
		setClickedCards(chosenCard);

		console.log(clickedCards);
		setScore(score + 1);
		saveScore(score);

		getRandomCards();
	};

	const getRandomCards = () => {
		const cardsArr = randomIndex(data);
		setSelectedCards(cardsArr);
	};

	const renderCards = () => {
		return (
			selectedCards &&
			selectedCards.map((item, index) => {
				return (
					<div
						key={index}
						className="w-36 rounded cursor-pointer transition-all animate-anim-grow hover:scale-105"
						onClick={() => chooseCard(item.mal_id)}
					>
						<img
							src={item.images.jpg.image_url}
							alt={item.title_english}
							className="w-full h-auto rounded"
						/>
					</div>
				);
			})
		);
	};

	return (
		<div className="w-full h-full my-6">
			{!loading ? (
				<>
					<h2 className="text-small-text text-white/45 leading-none my-4">
						{`SCORE:  ${score}`}
					</h2>
					<div className="h-full flex flex-col items-center gap-6">
						{renderCards()}
					</div>
					<h2 className="text-center text-small-text text-white/45 leading-none my-4">
						SELECT A CARD
					</h2>
				</>
			) : (
				<LoadingScreen />
			)}
		</div>
	);
}
