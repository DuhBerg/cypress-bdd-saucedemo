/*
Dado que acesso a página de login
Quando digito usuário e senha do perfil standard_user e clico em login
Então vejo a tela iniciar home logado
====================================================================================
Dado que acesso a página de login
Quando digito usuário e senha incorreta e clico em login
Então recebo mensagem de erro
====================================================================================
Dado que acesso a página de login
Quando digito usuário e senha do perfil locked_out_user e clico em login
Então recebo mensagem de erro
*/


describe('Login', () => {
  context('Dado que acesso a página de login', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com')
    })
    
    context('Quando digito usuário e senha do perfil standard_user e clico em login', () => {
      beforeEach(() => {
        cy.realizarLogin('standard_user', 'secret_sauce')
      })
        
        it('Então vejo a tela iniciar home logado', () => {
          cy.get('.app_logo')
        })
    })

    context('Quando digito usuário e senha incorreta e clico em login', () => {
      beforeEach(() => {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('senha_incorreta')
        cy.get('[data-test="login-button"]').click()
      })

        it('Então recebo mensagem de erro', () => {
          cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
        })
    })

    context('Quando digito usuário e senha do perfil locked_out_user e clico em login', () => {
      beforeEach(() => {
        cy.realizarLogin('locked_out_user', 'secret_sauce')
      })
        
        it('Então recebo mensagem de erro', () => {
          cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
        })
    })
  })
})