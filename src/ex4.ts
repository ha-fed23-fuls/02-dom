// 4a Bygg en sida med ett trafikljus. När man klickar på en knapp ska nästa lampa i serien tändas.
// Rött → gult → grönt.
//
// 4b* Gör ett realistiskt trafikljus:
// rött → rött och gult samtidigt → grönt → gult → rött ljus

function setupTrafficLights(): void {
	let trafficState: string = 'stopp'

	// hämta DOM-element
	let lights: NodeListOf<HTMLDivElement> = document.querySelectorAll<HTMLDivElement>('.lights > *')
	let button: HTMLButtonElement | null = document.querySelector<HTMLButtonElement>('.traffic-button')

	if( !button || lights.length < 3 ) {
		console.log('Vi hittade inte nödvändiga DOM-element. (trafikljuset)', lights.length, button)
		return
	}

	const STOP: string = 'stopp', WAIT: string = 'vänta', DRIVE: string = 'kör', SLOW_DOWN: string = 'sakta in'
	button.addEventListener('click', () => {
		if( trafficState === STOP ) {
			trafficState = WAIT
			lights[1].classList.add('on')     // tänd
		}
		else if( trafficState === WAIT ) {
			trafficState = DRIVE
			lights[0].classList.remove('on')  // släck
			lights[1].classList.remove('on')  // släck
			lights[2].classList.add('on')     // tänd
		}
		else if( trafficState === DRIVE ) {
			trafficState = SLOW_DOWN
			lights[1].classList.add('on')     // tänd gul
			lights[2].classList.remove('on')  // släck röd
		}
		else if( trafficState === SLOW_DOWN ) {
			trafficState = STOP
			lights[0].classList.add('on')     // tänd röd
			lights[1].classList.remove('on')  // släck gul
		}
		console.log('Ändrade state till: ' + trafficState)
	})
}

export { setupTrafficLights }
