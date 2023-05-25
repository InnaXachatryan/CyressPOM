class Login{
	navigate(){
		cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
	}

	search(username){
		cy.get('[placeholder="Search for Vegetables and Fruits"]').clear().type(username);
	}

	addToCart() {
		cy.get('.product-action [type="button"]').click();
	}

	CartIcon(){
		cy.get('.cart-icon [alt="Cart"]').click()
	}

	ProceedToCheckout(){
		cy.get('.cart-preview.active .action-block [type="button"]').click()
	}

	PlaceOrder(){
		cy.get('#root .container .products-wrapper .products > div > button').click()
	}

	Country(select){
		cy.get('#root .products-wrapper .products .wrapperTwo select').select(select)
	}

	Agree(){
		cy.get('.chkAgree').click()
	}

	Proceed(){
		cy.get('.wrapperTwo button').click()
	}
}

export default Login