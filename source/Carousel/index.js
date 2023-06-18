import { LitElement, html, css } from 'lit-element'

export class Carousel extends LitElement {
	render() {
		return html`
			<section>
				<slot name="interface-top" />
				<div>
					<slot name="slides" />
				</div>
				<slot name="interface-left" />
				<slot name="interface-right" />
				<slot name="interface-bottom" />
			</section>
		`
	}
}
