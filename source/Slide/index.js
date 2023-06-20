import { LitElement, html, css } from 'lit-element'

export class Slide extends LitElement {
	static properties = {
		position: { type: Number, attribute: true }
	}

	constructor() {
		super()

		this.position = 0
	}

	renderStyle() {
		const style = css`
			:host {
				--position: ${this.position};
			}
		`
		return html`<style>${style}</style>`
	}

	render() {
		return html`
			<div>
				${this.renderStyle()}
				<slot />
			</div>
		`
	}
}
