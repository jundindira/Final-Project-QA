describe('Login Feature', () => {
  it('Make Appointment', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com');
    cy.wait(1000);
    cy.get("#btn-make-appointment").click();
    cy.get("#txt-username").type("John Doe");
    cy.get("#txt-password").type("ThisIsNotAPassword");
    cy.get("#btn-login").click();
    cy.wait(1000);

    cy.get('select').select("Hongkong CURA Healthcare Center");
    cy.get('[type="checkbox"]').check();
    cy.get('[type="radio"]').check('Medicaid');
    cy.get('input[name="visit_date"]').type('11/11/2024');
    cy.get('textarea[name="comment"]').type('test 1', { force: true });
    cy.get("#btn-book-appointment").click();
  })
})