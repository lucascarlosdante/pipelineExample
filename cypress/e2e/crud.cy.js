
// Ative para deixar os testes mais lentos (delay de 1s entre comandos)
const SLOW_MODE = false; // Troque para false para desativar o delay

if (SLOW_MODE) {
  Cypress.Commands.overwrite('click', (originalFn, ...args) => {
    return originalFn(...args).then(() => Cypress.Promise.delay(1000));
  });
  Cypress.Commands.overwrite('type', (originalFn, ...args) => {
    return originalFn(...args).then(() => Cypress.Promise.delay(1000));
  });
  Cypress.Commands.overwrite('check', (originalFn, ...args) => {
    return originalFn(...args).then(() => Cypress.Promise.delay(1000));
  });
  Cypress.Commands.overwrite('uncheck', (originalFn, ...args) => {
    return originalFn(...args).then(() => Cypress.Promise.delay(1000));
  });
  Cypress.Commands.overwrite('visit', (originalFn, ...args) => {
    return originalFn(...args).then(() => Cypress.Promise.delay(1000));
  });
}


describe('Login e CRUD Demo', () => {
  beforeEach(() => {
    cy.visit('/');
    // Realiza login antes de cada teste do CRUD
    cy.get('[data-testid="login-user"]').type('admin');
    cy.get('[data-testid="login-pass"]').type('1234');
    cy.get('[data-testid="login-btn"]').click();
  });

  it('deve exibir o header com ambiente', () => {
    cy.contains('Ambiente:').should('exist');
  });

  it('deve abrir o modal e adicionar um item', () => {
    cy.get('[data-testid="add-btn"]').click();
    cy.get('[data-testid="input-title"]').type('Novo Item Teste');
    cy.get('[data-testid="save-btn"]').click();
    cy.contains('Novo Item Teste').should('exist');
  });

  it.only('deve adicionar cinco itens, marcar dois e apagar usando a lixeira única', () => {
    // Adiciona cinco itens
    for (let i = 1; i <= 5; i++) {
      cy.get('[data-testid="add-btn"]').click();
      cy.get('[data-testid="input-title"]').type(`Item ${i}`);
      cy.get('[data-testid="save-btn"]').click();
      cy.contains(`Item ${i}`).should('exist');
    }
    // Marca dois itens
    cy.get('input[type="checkbox"]').eq(0).check();
    cy.get('input[type="checkbox"]').eq(1).check();
    // Lixeira deve aparecer
    cy.get('[data-testid="remove-selected-btn"]').should('exist');
    // Remove os dois itens marcados
    cy.get('[data-testid="remove-selected-btn"]').click();
    // Verifica que os dois itens sumiram
    cy.contains('Item 4').should('not.exist');
    cy.contains('Item 5').should('not.exist');
    // Os outros permanecem
    cy.contains('Item 1').should('exist');
    cy.contains('Item 2').should('exist');
    cy.contains('Item 3').should('exist');
  });

  it('deve remover um item', () => {
    // Garante que existe um item para remover
    cy.get('[data-testid="add-btn"]').click();
    cy.get('[data-testid="input-title"]').type('Item Remover');
    cy.get('[data-testid="save-btn"]').click();
    cy.contains('Item Remover').should('exist');
    cy.get('[data-testid^="remove-btn-"]').first().click();
    cy.contains('Item Remover').should('not.exist');
  });
}); 
// Comentário Novo
