describe('reqres api', () => {
  it('should verify the creation of new user', () => {
    cy.request({
      method: 'POST',
      url: '/users',
      body: {
        id: 7,
        email: 'test@reqres.in',
        first_name: 'Test',
        last_name: 'Testov',
        avatar: 'https://reqres.in/img/faces/123-image.jpg',
      },
    }).then((res) => {
      expect(res.body.id).to.eq(7);
      expect(res.body.email).to.eq('test@reqres.in');
      expect(res.body.first_name).to.eq('Test');
      expect(res.body.last_name).to.eq('Testov');
      Object.values(res.body).forEach((key) => cy.log(key));
    });
  });

  it('should verify the content-type header', () => {
    cy.request('/users')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json');
  });
});
