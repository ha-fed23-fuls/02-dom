import './style.css'

// 1 Skapa en webbsida med ett button- och ett p-element. När man klickar på knappen ska texten i p-elementet uppdateras, så att den visar hur många gånger man har klickat på knappen:
// <p class="info"> Du har klickat 25 gånger. </p>

// Plocka ut element ur DOM
// State-variabel för antal klick
// Event listener för button, som uppdaterar innerText i <p>
type Callback = (event: Event) => void;

const countButton: HTMLButtonElement | null = document.querySelector<HTMLButtonElement>('.count-button')
const infoPara: HTMLParagraphElement | null = document.querySelector<HTMLParagraphElement>('.info')
// Alternativ: lägg till "!" eller "as HTMLButtonElement"

let clicks: number = 0
if( countButton && infoPara ) {
	const whenClick: Callback = () => {  // behöver inte event vid klick-händelser
		// öka state-variabeln
		// uppdatera texten i infoPara
		clicks++
		infoPara.innerText = `Du har klickat ${clicks} gånger!`
	}

	countButton.addEventListener('click', whenClick)
	// Alternativ till if-sats: countButton?.addEventListener.....
} else {
	console.log('Oh noes vi hittar inte DOM-elementen!')
}
