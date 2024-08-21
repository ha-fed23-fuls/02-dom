// 2 Gör en button som växlar mellan två bakgrundsfärger när man klickar på den. Använd CSS-klasser.

function setupColorButton(): void {
	// hämta button ur DOMmen
	// hitta på 2 färger
	// css-klasser för färgerna
	// event listener
	let button: HTMLButtonElement | null = document.querySelector<HTMLButtonElement>('.color-button')
	if( !button ) {
		console.log('Hittade ingen button!')
		return
	}
	let firstColorSelected: boolean = true

	button.addEventListener('click', () => {
		// Enklaste lösningen
		// button.classList.toggle('pretty')

		// Alternativ med if-sats och state-variabel
		firstColorSelected = !firstColorSelected
		if( firstColorSelected ) {
			button.classList.remove('pretty')
		} else {
			button.classList.add('pretty')
		}
	})
}

export { setupColorButton }
