/// <reference = cypress>

describe("Teste da criação, registro, login e delete", ()=>{
  it("Teste criação do usuário com sucesso", ()=>{
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type("gege")
    cy.get('#Text1').type("gege")
    cy.get('#username').type("gege")
    cy.get('#password').type("gege")
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should("contain.text", "Registration successful")
  })

  it("Teste criação do usuário com falha", ()=>{
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type("gege")
    cy.get('#Text1').type("gege")
    cy.get('#username').type("gege")
    cy.get('.btn-primary').should("be.disabled")
  })

  it("Teste de login com sucesso", ()=>{
    let info = criarUser()
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('#username').type(info[0])
    cy.get('#password').type(info[1])
    cy.get('.btn-primary').click()
    cy.get('h1.ng-binding').should("contain.text", info[0])
  })

  it("Teste de excluir com sucesso", ()=>{
    let info = criarUser()
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('#username').type(info[0])
    cy.get('#password').type(info[1])
    cy.get('.btn-primary').click()
    cy.get('.ng-binding > a').click()
    cy.get('.btn').click()
    cy.get('#username').type(info[0])
    cy.get('#password').type(info[1])
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should("contain.text", "Username or password is incorrect")
  })

})


function criarUser(){
  let hora = new Date().getHours().toString()
  let minutos = new Date().getMinutes().toString()
  let segundos = new Date().getSeconds().toString()
  let id = hora + minutos + segundos + "id"
  let senha = hora + minutos + segundos + "senha"
  let info = [id, senha]

  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
  cy.get('.btn-link').click()
  cy.get('#firstName').type(id)
  cy.get('#Text1').type(id)
  cy.get('#username').type(id)
  cy.get('#password').type(senha)
  cy.get('.btn-primary').click()
  cy.get('.ng-binding').should("contain.text", "Registration successful")
  return info
}