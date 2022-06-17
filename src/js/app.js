/** @format */

//date
var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();
today = mm + "-" + dd + "-" + yyyy;

//gate data
fetch("https://covid-193.p.rapidapi.com/history?country=bangladesh", {
	method: "GET",
	headers: {
		"x-rapidapi-host": "covid-193.p.rapidapi.com",
		"x-rapidapi-key": "81f8b44443msh24a3c8949aa69a7p149879jsn4465c83e79c5",
	},
})
	.then((response) => response.json())
	.then((response) => {
		// console.log(response);
		// console.log(response.parameters["country"]);
		// console.log(today);
		// console.log(response.response[0].cases["new"]);
		// console.log(response.response[0].cases["total"]);
		// console.log(response.response[0].cases["recovered"]);
		// console.log(response.response[0].tests["total"]);
		// console.log(response.response[0].tests["1M_pop"]);
		// console.log(response.response[0].deaths["new"]);
		// console.log(response.response[0].deaths["total"]);

		//country
		document.getElementById("country1").innerHTML =
			response.parameters["country"];

		//date
		document.getElementById("today").innerHTML = today;

		//test_total
		document.getElementById("total_test").innerHTML =
			"সর্বমোট " + response.response[0].tests["total"] + " জন";

		//test_today
		document.getElementById("today_test").innerHTML =
			"আজকে " + response.response[0].tests["1M_pop"] + " জন";

		//infect_today
		document.getElementById("infact__3").innerHTML =
			"আজকে " + response.response[0].cases["new"] + " জন";

		//infect_total
		document.getElementById("infact__3t").innerHTML =
			"সর্বমোট " + response.response[0].cases["total"] + " জন";

		//Healthy
		document.getElementById("today_healthy").innerHTML =
			"আজকে " + response.response[0].cases["1M_pop"] + " জন";
		//Healthy all
		document.getElementById("all_healthy").innerHTML =
			"সর্বমোট " + response.response[0].cases["recovered"] + " জন";

		//death_today
		document.getElementById("death_today").innerHTML =
			"আজকে " + response.response[0].deaths["new"] + " জন";

		//death_all
		document.getElementById("death_total").innerHTML =
			"সর্বমোট " + response.response[0].deaths["total"] + " জন";
	})
	.catch((err) => {
		console.error(err);
	});
