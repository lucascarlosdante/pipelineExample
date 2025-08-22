describe('CRUD Demo', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('deve exibir o header com ambiente', () => {
    cy.contains('Ambiente:').should('exist');
  });

  it('deve abrir o modal e adicionar um item', () => {
    cy.get('[data-testid="add-btn"]').click();
    cy.get('[data-testid="input-title"]').type('Novo Item Testes');
    cy.get('[data-testid="save-btn"]').click();
    cy.contains('Novo Item Teste').should('exist');
  });

  it('deve marcar e desmarcar um checkbox', () => {
    cy.get('input[type="checkbox"]').first().check().should('be.checked');
    cy.get('input[type="checkbox"]').first().uncheck().should('not.be.checked');
  });

  it('deve remover um item', () => {
    cy.get('[data-testid^="remove-btn-"]').first().click();
  });
}); 
// Comentário Novo
