export default class CanTable extends HTMLElement {
	constructor() {
		// establish prototype chain
		super();
		
		// attaches shadow tree and returns shadow root reference
		// https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow
		const shadowRoot = this.attachShadow({ mode: 'open' });
	}
// fires after the element has been attached to the DOM
	connectedCallback() {
		console.log("cantable element added to page.");
		//updateStyle(this);
	}
	
	disconnectedCallback() {
		console.log("cantable element removed from page.");
	}
	
	adoptedCallback() {
		console.log("cantable element moved to new page.");
	}
	
	attributeChangedCallback(name, oldValue, newValue) {
		console.log("cantable element attributes changed.");
		//updateStyle(this);
	}
}
customElements.define('cantable-table', CanTable);
