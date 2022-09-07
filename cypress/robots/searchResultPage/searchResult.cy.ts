import { BaseHands, BaseEyes, BaseDependencies } from "../BaseRobot";

export class SearchResultsDependencies extends BaseDependencies {
  setViewport() {
    return cy.viewport(1920, 1080);
  }

  accessSearchResultsPage() {
    this.accessUrl("http://3.145.33.6:4000/mylibrary");
  }
}

export class SearchResultsRobotEyes extends BaseEyes {
 
  checkSearchResultCardDescription() {
    cy.contains(
      "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know"
    );
  }

  checkTextIsPresent(txt: string) {
    cy.contains(txt);
  }
}

export class SearchResultsRobotHands extends BaseHands { 
 
  checkIconClick(id: any) {
    cy.get(`[data-testid=${id}]`).click({ multiple: true });
  }

  checkSeeMoreLink(id: any) {
    cy.get(`[data-testid=${id}]`).click({ multiple: true, force: true });
  }
  
  checkSearchBar(id: any) {
    cy.wait(2000);
    cy.get("input").get(`#${id}`).type("chemistry");
    cy.wait(2000);
    cy.get("[role=button]")
      .click({ multiple: true, force: true })
      .wait(3000)
      .location("pathname")
      .should("eq", "/searchresults");
    cy.wait(2000);
  }

  checkPagination() {
    cy.scrollTo(0, 1400);
    cy.wait(1000);
    cy.get("[data-testid=NavigateNextIcon]").click();
    cy.scrollTo(1400, 0);
    cy.wait(1000);
  }

  checkExploreTopics() {
    cy.get("#exploreIA").click();
    cy.wait(2000);
    cy.contains("History").click({ multiple: true });
    cy.get("[data-testid=NavigateBeforeIcon]").click();
    cy.wait(2000);
  }
}
