describe('API Mock Test', () => {
  it('deve receber o mesmo corpo enviado no /api/echo', () => {
    const payload = { nome: 'Lucas', idade: 30 };
    cy.request('POST', 'http://localhost:3001/api/echo', payload).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('received');
      expect(response.body.received).to.deep.equal(payload);
    });
  });
});
