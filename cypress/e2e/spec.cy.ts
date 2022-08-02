/// <reference types="cypress" />
describe('empty spec', () => {
  const stopTime = () => {
    return cy.wait(10000), cy.get("#square").click()
  }
  beforeEach(()=>cy.visit("localhost:3000"))
  it('click', ()=>{
    stopTime()
  })
  it("click&&show results", ()=>{
    stopTime()
    cy.get("#res")
    cy.get("button").click()
    cy.get("#mes")
  })
})