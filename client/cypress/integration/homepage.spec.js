/* eslint-disable */

describe("renders the welcome page", () => {
  it("renders correctly", () => {
    cy.visit("/");
    cy.get("#logo").should("exist");
  });
});

it("allows the sideNav to be opened", async () => {
  cy.visit("/");
  cy.get(".testProfile").click();
  await cy
    .get(".testUserName")
    .click()
    .should("exist")
    .should("contain", "Rainer Zufall");
});

it("navigates to searchpage", () => {
  cy.visit("/");
  cy.get("#testLinkSearching").click();
  cy.findAllByText("Osprey - Hikelite 31").click();
  cy.findAllByText("get this gadg").click();
  cy.findAllByText("Osprey - Hikelite 31").should("exist");
});
