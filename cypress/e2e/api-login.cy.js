describe('API Login Mock', () => {
  it('deve autenticar com sucesso com usuário e senha corretos', () => {
    cy.request('POST', 'http://localhost:3001/api/login', { user: 'admin', pass: '1234' })
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('success', true);
        expect(response.body).to.have.property('token');
        expect(response.body).to.have.property('user', 'admin');
      });
  });

  it('deve retornar 401 mas não falhar no teste com usuário ou senha incorretos', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:3001/api/login',
      body: { user: 'admin', pass: 'errado' },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body).to.have.property('success', false);
      expect(response.body).to.have.property('message');
    });
  });
});
