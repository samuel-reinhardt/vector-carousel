import { LitElement, html, css } from 'lit-element'

export class Control extends LitElement {
	render() {
		return html`
			<button type="button">
				<slot />
			</button>
		`
	}
}
