import { LitElement, html, css, unsafeCSS } from 'lit-element'

export class Carousel extends LitElement {
	static properties = {
		show_heading: { type: Boolean, attribute: true }, // visibly show the carousel heading
		transition: { type: String, attribute: true },
		starting_slide: { type: Number, attribute: true },
		show_overflow: { type: Boolean, attribute: true },
		slide_visible_amount: { type: Number, attribute: true },
		slide_gap: { type: css, attribute: true },
		slide_scroll_amount: { type: Number, attribute: true },
		_active_slide_index: { type: Number, state: true },
		_slides: { type: Array, state: true } 
	}

	constructor() {
		super()

		this.starting_slide = 0
		this.slide_visible_amount = 1
		this.slide_gap = "0px"
		this.transition = "slide"
	}

	addDynamicStyles() {
		
	}


	renderHeading() {
		const hidden = this.show_heading ? '' : 'hidden'
		return html`
			<slot id="carousel-heading" name="heading" .hidden=${hidden} ></slot>
		`
	}

	renderSlides() {
		this._slides = this.shadowRoot.querySelector("slot[name='slides']")?.assignedElements()
		this._slides.forEach( ( index, slide ) => {
			slide.setAttribute( 'position', index - this._active_slide )
		} )
	}

	render() { 
		return html`
			${this.renderDynamicStyles()}
			<section class="carousel" aria-labelledby="carousel-heading">
				${this.renderHeading()}
				<slot name="interface-top"></slot>
				<slot name="slides"></slot>
				<slot name="interface-left"></slot>
				<slot name="interface-right"></slot>
				<slot name="interface-bottom"></slot>
			</section>
		`
	}

	renderDynamicStyles() {
		const slide_size = 100 * ( 1 / this.slide_visible_amount )
		const gap_count = ( this.slide_visible_amount - 1 ) | 0
		const slide_gap_calc = css`
			${unsafeCSS(this.slide_gap)} / ${this.slide_visible_amount} * ${gap_count}` 
		
		const styles = css`
			:host {
				--slide-gap: ${unsafeCSS(this.slide_gap)};
				--slide-size: calc( ${slide_size}% - ${slide_gap_calc} );
			}
		`
		return html`
			<style>${styles}</style>
		`
	}

	static styles = [
		css`
			.carousel {
				display: grid;
				grid-template-areas:
					"Heading Heading Heading"
					". Top ."
					"Left Slides Right"
					". Bottom .";
					grid-template-columns: min-content 1fr min-content;
					grid-template-rows: min-content min-content 1fr min-content;
			}
			slot {
				display: flex;
			}
			slot[hidden] {
				display: none;
			}
			slot[name="heading"] {
				grid-area: Heading;
			}
			slot[name="slides"] {
				grid-area: Slides;
				flex-wrap: nowrap;
				gap: var(--slide-gap, 0px);
			
				overflow: visible;
			}
			slot[name="slides"]::slotted(vector-carousel-slide) {
				flex: 1 0 var(--slide-size, 100%);
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
		`,
		css`
			slot[name="slides"]::slotted(vector-carousel-slide.--slide-transition) {
				transform: transformX( var( --position ) * 100% )
			}
		`
	]
}
