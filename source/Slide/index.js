import { LitElement, html, css } from 'lit-element'

export class Slide extends LitElement {
	render() {
		return html`
			<div>
				<slot />
			</div>
		`
	}
}
