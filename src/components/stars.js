import React from "react";
import emptyStar from "../icons/empty_star.svg";
import fullStar from "../icons/full_star.svg";


export default function Rate({ rating }) {
	const stars = [1, 2, 3, 4, 5];
	return (
		<div className="stars">
			{stars.map((level) =>
				rating >= level ? (
					<img
						key={level.toString()}
						className="star"
						src={fullStar}
						alt="rating star"
					/>
				) : ( //affichage conditionnel des étoiles de score, pleine ou vide selon le score passé en props
					<img
						key={level.toString()}
						className="star"
						src={emptyStar}
						alt="rating star"
					/>
				)
			)}
		</div>
	);
}

