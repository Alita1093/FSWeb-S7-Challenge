describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("passes", () => {
    expect(true).to.equal(true);
  });
  it("testing on mainpage's click pizza", () => {
    cy.get("[data-cy=pizza1]")
      .click()
      .wait(1000);
    cy.get("[data-cy=HomeButton]")
      .click()
      .wait(1000);
    cy.get("[data-cy=pizza2]")
      .click()
      .wait(1000);
    cy.get("[data-cy=HomeButton]")
      .click()
      .wait(1000);
    cy.get("[data-cy=pizza3]")
      .click()
      .wait(1000);
    cy.get("[data-cy=HomeButton]")
      .click()
      .wait(1000);
  });
  it("testing dropdown", () => {
    cy.get("[data-cy=pizza1]")
      .click()
      .wait(1000);
    cy.get("select")
      .select(1)
      .should("have.value", "Büyük", "Orta", "Küçük")
      .wait(1000)
      .select(2)
      .wait(1000)
      .select(3)
      .wait(1000)
      .select(0)
      .wait(1000);
    cy.get("[data-cy=sizeError]").should("have.value", "");
    cy.get("select").select(1);
  });
  it("testing radioButton Choice of Sauce", () => {
    cy.get("[data-cy=pizza1]")
      .click()
      .wait(1000);
    cy.get("[value=Original]");
    cy.get("[value=Alfredo]")
      .click()
      .wait(1000);
    cy.get("[value=Ranch]").click();
  });
  it("testing checkboxes of toppings", () => {
    cy.get("[data-cy=pizza1]")
      .click()
      .wait(1000);
    cy.get("[data-cy=firstWarning]").should("have.value", "");
    cy.get("[value=Pepporoni]")
      .click()
      .wait(1000);
    cy.get("[value=Sausage]")
      .click()
      .wait(1000);

    cy.get("[value=Peppers]").click();
    cy.get("[value=Mushrooms]").click();
    cy.get("[value=Bacon]").click();
  });
  it("testing radios of Breads", () => {
    cy.get("[data-cy=pizza1]")
      .click()
      .wait(1000);
    cy.get("[id=ekmek-1]")
      .click()
      .wait(1000);
    cy.get("[id=ekmek-3]")
      .click()
      .wait(1000);
    cy.get("[id=ekmek-5]")
      .click()
      .wait(1000);
  });
  it("special instruction test", () => {
    cy.get("[data-cy=pizza1]")
      .click()
      .wait(1000);
    cy.get("[data-cy=OzelIstek]")
      .type("Çabuk getirebilir misiniz?")
      .should("have.value", "Çabuk getirebilir misiniz?");
  });
  it("Piece teset", () => {
    cy.get("[data-cy=pizza1]")
      .click()
      .wait(1000);
    cy.get("[data-cy=piece-teset]")
      .should("have.value", 0)
      .type(1);
  });
  it("Order test", () => {
    cy.get("[data-cy=pizza1]")
      .click()
      .wait(1000);
    cy.get("select").select(1);
    cy.get("[value=Alfredo]").click();
    cy.get("[value=Pepporoni]").click();
    cy.get("[value=Sausage]").click();
    cy.get("[value=Peppers]").click();
    cy.get("[value=Mushrooms]").click();
    cy.get("[id=ekmek-3]").click();
    cy.get("[data-cy=OzelIstek]")
      .type("Çabuk getirebilir misiniz?")
      .should("have.value", "Çabuk getirebilir misiniz?");
    cy.get("[data-cy=piece-teset]")
      .should("have.value", 0)
      .type(1);
    cy.get("[data-cy=order-test]").click();
  });
});
