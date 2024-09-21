/*
Dado que acesso a página de login
Quando digito usuario e senha e clica em login
Então vejo a tela iniciar home logado
*/

describe('Login', () => {
  context('Dado que acesso a página de login', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com')
    })
    
    context('Quando digito usuário e senha e clico em login', () => {
      beforeEach(() => {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
      })
        
        it('Então vejo a tela iniciar home logado', () => {
          cy.get('.app_logo')
        })
    })
  })
})