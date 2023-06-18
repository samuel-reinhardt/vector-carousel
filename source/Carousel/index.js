import { LitElement, html, css } from 'lit-element'

export class Carousel extends LitElement {
	static properties = {
		"show-heading": { type: Boolean, attribute: true }, // visibly show the carousel heading
		"vertical": { type: Boolean, attribute: true } // 
	}

	constructor() {
		super()
	}

	render() {
		return html`
			<section aria-labelledby="carousel-heading">
				<slot id="carousel-heading" name="heading" ?hidden=${!this['show-heading']} ></slot>
				<slot name="interface-top"></slot>
				<slot name="slides"></slot>
				<slot name="interface-left"></slot>
				<slot name="interface-right"></slot>
				<slot name="interface-bottom"></slot>
			</section>
		`
	}

	static styles = [
		css`
			:host {
				display: grid;
				grid-template-areas:
					"Heading Heading Heading"
					". Top ."
					"Left Slides Right"
					". Bottom .";
			}
			slot['name="heading"] {
				grid-area: Heading;
			}
			slot[name="interface-top"] {
				grid-area: Top;
			}
			slot[name="interface-right"] {
				grid-area: Right;
			}
			slot[name="interface-bottom"] {
				grid-area: Bottom;
			}
			slot[name="interface-left"] {
				grid-area: Left;
			}
		`
	]
}
