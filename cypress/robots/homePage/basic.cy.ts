/// <reference types="Cypress" />

import { BaseDependencies, BaseEyes, BaseHands } from "../BaseRobot";

export class HomePageDependencies extends BaseDependencies {

  setViewport() {
    return cy.viewport(1920, 1080);
  }

  accessBookInfoPage() {
    this.accessUrl("http://3.145.33.6:4000/books/2");
  }

  accessHomePage() {
    this.accessUrl("http://3.145.33.6:4000");
  }

  accessLibraryPage() {
    this.accessUrl("http://3.145.33.6:4000/mylibrary");
  }

}

export class HomePageRobotEyes extends BaseEyes {
  contains: any;
  get: any;

  scrollTop() {
    this.scrollToTop();
  }

  scrollBottom() {
    this.scrollToBottom();
  } 

  getElementWithDataTestId(dataTestId: string) {
    return cy.get(`[data-testid=${dataTestId}]`);
  }

  getElementWithText(text: string) {
    return cy.contains(text);
  }

}

export class HomePageRobotHands extends BaseHands {

  clickOnBook(id: string) {
    cy.get(id);
  } 

  checkExploreTopics() {
    cy.get("#exploreIA").click();
    cy.wait(2000);
    cy.contains("Biology").click({ multiple: true });
    cy.get("[data-testid=NavigateBeforeIcon]").click();
    cy.wait(2000);
  }
}

