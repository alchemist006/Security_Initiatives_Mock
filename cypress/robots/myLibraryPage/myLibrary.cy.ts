import { BaseHands, BaseEyes, BaseDependencies } from "../BaseRobot";

export class MyLibraryDependencies extends BaseDependencies {
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

export class MyLibraryRobotEyes extends BaseEyes {

  scrollTop() {
    this.scrollToTop();
  }

  checkSearchResultCardDescription() {
    cy.contains(
      "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know"
    );
  }

  checkTextIsPresent(txt: string) {
    cy.contains(txt);
  }
}

export class MyLibraryRobotHands extends BaseHands {

  checkIconClick(id: any) {
    cy.get(`[data-testid=${id}]`).click({ multiple: true });
  }
  checkSeeMoreLink(id: any) {
    cy.get(`[data-testid=${id}]`).click({ multiple: true });
  }
}
