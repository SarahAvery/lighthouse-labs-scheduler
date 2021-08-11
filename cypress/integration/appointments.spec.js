describe("Appointments", () => {
  beforeEach(() => {
    cy.request("GET", "/api/debug/reset");
    cy.visit("/");
    cy.contains("[data-testid=day]", "Monday");
  });

  it.skip("should book an interview", () => {
    cy.get("[alt=Add]").first().click();
    cy.get("[data-testid=student-name-input]").type("Lydia Miller");
    cy.get("[alt='Sylvia Palmer']").click({ multiple: true });
    cy.contains("Save").click();
    cy.contains(".appointment__card--show", "Lydia Miller");
    cy.contains(".appointment__card--show", "Sylvia Palmer");
  });

  it.skip("should edit an interview", () => {
    cy.get("[alt=Edit]").first().click({ force: true });

    cy.get("[data-testid=student-name-input]").clear().type("Lydia Miller");
    cy.get("[alt='Tori Malcolm']").click({ multiple: true });

    cy.contains("Save").click();

    cy.contains(".appointment__card--show", "Lydia Miller");
    cy.contains(".appointment__card--show", "Tori Malcolm");
  });

  it("shoud cancel an interview", () => {
    cy.get("[alt=Delete]").first().click({ force: true });
    cy.contains("Confirm").click();

    cy.contains("Deleting").should("exist");
    cy.contains("Deleting").should("not.exist");

    cy.contains(".appointment__card--show", "Archie Cohen").should("not.exist");
  });
});
