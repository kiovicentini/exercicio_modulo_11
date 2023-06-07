/// <reference types="cypress" />

//const { should } = require('chai');

describe('Pré cadastro', () => {
    const { faker } = require('@faker-js/faker');
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve completar o pré cadastro normalmente', () => {
        

        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type(faker.internet.password())
        cy.get(':nth-child(4) > .button').click()
        
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

        cy.get('#account_first_name').type(faker.name.firstName())
        cy.get('#account_last_name').type(faker.name.lastName())

        cy.get('#account_display_name').clear().type(faker.internet.displayName())

        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.')

    });

    it.only('Deve completar o cadastro de endereço', () => {
        

        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type(faker.internet.password())
        cy.get(':nth-child(4) > .button').click()
        
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

        cy.get('#account_first_name').type(faker.name.firstName())
        cy.get('#account_last_name').type(faker.name.lastName())
        cy.get('#account_display_name').clear().type(faker.internet.displayName())

        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click() //selecionar edição do endereço da conta
        cy.get(':nth-child(1) > .title > .edit').click() // botão da página para selecionar editar endereço
        
        cy.get('#select2-billing_country-container').click().type('Brasil{enter}') //selecionar país 
        cy.get('#billing_address_1').click().type(faker.location.street() + faker.number.int({max:999, min:100})) 
        cy.get('#billing_address_2').type('Apt.' + faker.number.int({max:999, min:100}))
        cy.get('#billing_city').type(faker.location.city())
        cy.get('#select2-billing_state-container').type('São Paulo{enter}')
        cy.get('#billing_postcode').type(faker.datatype.number({max:99999999, min:11111111}))
        cy.get('#billing_phone').type(faker.datatype.number({max:999999999, min:111111111}))

        cy.get('.button').click()

        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')



    });



});