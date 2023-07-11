// function to fetch advice

const fetchAdvice = async () => {
	try {
		const res = await fetch("https://api.adviceslip.com/advice");
		const data = await res.json();
		document.getElementById("advice-id").innerHTML = `ADVICE #${data.slip.id}`;
		document.getElementById("advice-text").innerHTML = `"${data.slip.advice}"`;
	} catch (err) {
		console.error(err);
	}
};

// fetch advice api when page is loaded
window.onload = () => {
	fetchAdvice();
};
// when button is clicked

document.getElementById("dice-btn").addEventListener("click", () => {
	fetchAdvice();
});
// write a function to toggle hiding icon when mobile size is active
 
