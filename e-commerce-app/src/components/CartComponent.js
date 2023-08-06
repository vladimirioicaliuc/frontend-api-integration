class CartComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ["cart-items"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "cart-items") {
      this.render();
    }
  }

  render() {
    const cartItems = JSON.parse(this.getAttribute("cart-items"));

    this.innerHTML = `
          <div class="cart">
            <h2>Cart Items</h2>
            <ul>
              ${cartItems
                .map((item) => `<li>${item.name} - ${item.quantity} * $${item.price}</li>`)
                .join("")}
            </ul>
          </div>
        `;
  }
}

customElements.define("cart-component", CartComponent);

export default CartComponent;
