import { Carousel as VectorCarousel } from './Carousel/index.js'
import { Slide as VectorCarouselSlide } from './Slide/index.js'
import { Control as VectorCarouselControl } from './Control/index.js'
import { Nav as VectorCarouselNav } from './Nav/index.js'


export {
	VectorCarousel,
	VectorCarouselSlide,
	VectorCarouselControl,
	VectorCarouselNav
}

customElements.define( 'vector-carousel', VectorCarousel )
customElements.define( 'vector-carousel-slide', VectorCarouselSlide )
customElements.define( 'vector-carousel-control', VectorCarouselControl )
customElements.define( 'vector-carousel-nav', VectorCarouselNav )
