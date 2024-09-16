import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9UOgeg0xCOug3BwnPVVdwNhAdY01Qs_Nqcw&s" alt="Fondo star wars" />
		</div>
	);
};
