import Login from "../page_object/login.spec"

describe ("Cypress Pom test Suite", function() {
	it('login with valid email and password', function() {
		const loginpage = new Login();
		loginpage.navigate();
		loginpage.search('Carrot');
		cy.wait(1000)
		loginpage.addToCart();
		loginpage.CartIcon();
		loginpage.ProceedToCheckout();
		loginpage.PlaceOrder();
		loginpage.Country('Armenia')
		loginpage.Agree();
		loginpage.Proceed()
	})
})