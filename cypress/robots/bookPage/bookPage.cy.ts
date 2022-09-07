import { BaseHands, BaseEyes, BaseDependencies } from "../BaseRobot";

export class BookPageDependencies extends BaseDependencies {

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

export class BookPageRobotEyes extends BaseEyes {

  checkBookImage() {
    this.seesImage();
  }

  checkBookTitle() {
    this.seesTitle();
  }

  checkBooksDescription() {
    this.seesBookDescription();
  }

  checkAuthorName() {
    this.seesAuthor();
  }

  checkAuthorDesc() {
    this.seesAuthorDescription();
  }

  scrollBottom() {
    this.scrollToBottom();
  }

  scrollTop() {
    this.scrollToTop();
  }

}

export class BookPageRobotHands extends BaseHands {
  clickOnReadStatusButton() {
    this.clickOnStartRead();
  }

  clickOnBooksMarkIcon() {
    this.clickOnBookMark();
  }

}
