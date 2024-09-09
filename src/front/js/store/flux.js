const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			planets: [],
			characters: [], 
			starships: []
		},
		actions: {
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
					const data = await resp.json();
					setStore({ message: data.message });
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			},

			changeColor: (index, color) => {
				const store = getStore();
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});
				setStore({ demo: demo });
			},

			getPlanets: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/planets");
					const data = await response.json();
					setStore({ planets: data.results });
				} catch (error) {
					console.error("Error fetching planets:", error);
				}
			},

			getCharacters: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/people");
					const data = await response.json();
					setStore({ characters: data.results });
				} catch (error) {
					console.error("Error fetching characters:", error);
				}
			},
			getStarships: async () => {
				try{
					const response = await fetch("https://www.swapi.tech/api/starships");
					const data = await response.json();
					setStore({starships: data.results });
				} catch (error){
					console.error("Error fetching starships:", error)
				}
			}
		}
	};
};

export default getState;
