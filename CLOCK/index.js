function updatetime() {
	const now = new Date();
	const hour = now.getHours();
	let newhour = hour % 12 || 12; // Ensure newhour is defined for all cases
	let meridian = hour >= 12 ? "PM" : "AM";
	const minute = now.getMinutes().toString().padStart(2, "0"); // Format minutes to two digits
	const second = now.getSeconds().toString().padStart(2, "0"); // Format seconds to two digits
	let newtime = `${newhour}:${minute}:${second} ${meridian}`;
	document.getElementById("inclock").textContent = newtime;
}
updatetime();
setInterval(updatetime, 1000);
