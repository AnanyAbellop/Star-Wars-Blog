const baseUrl = "https://swapi.dev/api";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
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
			people: [],
			planets: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			addFavorite: newFavorite => {
				const store = getStore();
				setStore({
					favorites: [...store.favorites, newFavorite]
				});
			},
			removeFavorite: indexItem => {
				const store = getStore();
				alert("ENTRE EN EL REMOVE");
				const newF = store.favorites.filter((favorite, index) => {
					return index != indexItem;
				});
				setStore({
					favorites: [newF]
				});
			},
			getPeople: async () => {
				try {
					const response = await fetch(`${baseUrl}/people/`);

					if (response.ok) {
						let people = await response.json();
						setStore({
							people: people.results
						});
					} else {
						console.log(`response: ${response.status} ${response.statusText}`);
					}
				} catch (error) {
					console.log(`error!!!!!: ${error}`);
				}
			},
			getPlanet: async () => {
				try {
					const response = await fetch(`${baseUrl}/planets/`);

					if (response.ok) {
						let planet = await response.json();
						setStore({
							planets: planet.results
						});
					} else {
						console.log(`response: ${response.status} ${response.statusText}`);
					}
				} catch (error) {
					console.log(`error!!!!!: ${error}`);
				}
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ people: people });
			}
		}
	};
};

export default getState;
