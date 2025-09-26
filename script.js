//your JS code here. If required.
//your JS code here. If required.
let select = document.getElementById("colorSelect");

let btn = document.querySelector("input[type='button']");

btn.addEventListener('click', () =>{
	const selectedIndex = select.selectedIndex;
	if(selectedIndex !== -1){
		select.remove(selectedIndex);
	}
})

