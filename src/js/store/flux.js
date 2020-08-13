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
			// people: [
			// 	{
			// 		birth_year: "19 BBY",
			// 		eye_color: "Blue",
			// 		gender: "Male",
			// 		hair_color: "Blond",
			// 		height: "172",
			// 		name: "Luke Skywalker",
			// 		skin_color: "Fair"
			// 	},
			// 	{
			// 		birth_year: "19 BBY",
			// 		eye_color: "green",
			// 		gender: "Female",
			// 		hair_color: "Blond",
			// 		height: "172",
			// 		name: "Princesa A",
			// 		skin_color: "black"
			// 	},
			// 	{
			// 		birth_year: "19 BBY",
			// 		eye_color: "green",
			// 		gender: "Female",
			// 		hair_color: "Blond",
			// 		height: "172",
			// 		name: "Princesa A",
			// 		skin_color: "black"
			// 	},
			// 	{
			// 		birth_year: "19 BBY",
			// 		eye_color: "green",
			// 		gender: "Female",
			// 		hair_color: "Blond",
			// 		height: "172",
			// 		name: "Princesa A",
			// 		skin_color: "black"
			// 	},
			// 	{
			// 		birth_year: "19 BBY",
			// 		eye_color: "green",
			// 		gender: "Female",
			// 		hair_color: "Blond",
			// 		height: "172",
			// 		name: "Princesa A",
			// 		skin_color: "black"
			// 	},
			// 	{
			// 		birth_year: "19 BBY",
			// 		eye_color: "green",
			// 		gender: "Female",
			// 		hair_color: "Blond",
			// 		height: "172",
			// 		name: "Princesa A",
			// 		skin_color: "black"
			// 	}
			// ],
			planets: [
				{
					climate: "Arid",
					name: "Tatooine",
					diameter: "10465",
					orbital_period: "304",
					population: "120000",
					rotation_period: "23",
					terrain: "Dessert"
				},
				{
					climate: "Agua ",
					name: "Tierra",
					diameter: "muchos KM ",
					orbital_period: "NOSE ",
					population: "120000",
					rotation_period: "23",
					terrain: "Amor"
				}
			],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getPeople: async () => {
				const response = await fetch(`${baseUrl}/people`);
				try {
					if (response.ok) {
						people = await response.json();
						// (people)=>{
						//         return people;
						// }
						store.people.push;
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
