describe('testing if page is running and tests a chosen h1 element', () => {
  it('should load the page and verify existing h1 element on the page', () => {
    
    //Tests if page is up and running
    cy.visit('http://localhost:5500', {
      timeout: 10000, //added 10s timer if page is not responding
    })

    //Testing the h1 element
    cy.get('h1.topHalf_popularChallenges')
    .should('contain.text', 'Popular challenges right now')  
  })
})