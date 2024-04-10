export const saveScore = (score) => {
	if (!localStorage.getItem("score")) {
		localStorage.setItem("score", 0);
	}

	if (localStorage.getItem("score") < score) {
		localStorage.setItem("score", score);
	}
};

export const getScore = async () => {
	if (!localStorage.getItem("score")) {
		localStorage.setItem("score", 0);
	}

	return await localStorage.getItem("score");
};
