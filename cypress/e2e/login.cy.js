/// <reference types = "cypress" />

context ('Login', () =>{

    beforeEach(() => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

   // afterEach(() => {
     //   cy.screenshot()
    //});

it ('Deve fazer login com sucesso', ()=>{
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.page-title').should('contain', 'Minha conta')
    cy.get('.woocommerce-MyAccount-content').should('contain', 'Olá,')
})


it('Deve acusar email incorreto', ()=>{
    cy.get('#username').type('caio_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido')
})

it('Deve acusar usuário incorreto', ()=>{
    cy.get('#username').type('pudimtestedeusuario')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain', 'Erro: o usuário')
})

it('Deve acusar senha incorreta', ()=>{
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain', 'Erro: a senha fornecida para o e-mail')
})

it('Deve acusar campo de usuário e email vazio', ()=>{
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain', 'Erro: Nome de usuário é obrigatório.')
})

it('Deve acusar campo de senha vazio', ()=>{
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain', 'Erro: o campo da senha está vazio.')
})

})