import { LitElement, html, css } from 'lit-element'

export class Nav extends LitElement {
	render() {
		return html`
			<ul>
				<li><vector-carousel-control target="0">Slide 0</vector-carousel-control></li>
			</ul>
		`
	}
}
