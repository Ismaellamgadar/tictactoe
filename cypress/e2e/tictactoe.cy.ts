describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200')
  
    cy.get('<table _ngcontent-qer-c12="" class="table"><tr _ngcontent-qer-c12="">');
  })
})