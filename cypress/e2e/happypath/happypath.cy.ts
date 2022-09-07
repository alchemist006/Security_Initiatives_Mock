import {
  HomePageRobotEyes,
  HomePageRobotHands,
  HomePageDependencies,
} from "../../robots/homePage/basic.cy";
import {
  BookPageRobotEyes,
  BookPageRobotHands,
  BookPageDependencies,
} from "../../robots/bookPage/bookPage.cy";
import {
  MyLibraryRobotEyes,
  MyLibraryRobotHands,
  MyLibraryDependencies,
} from "../../robots/myLibraryPage/myLibrary.cy";
import {
  SearchResultsRobotEyes,
  SearchResultsRobotHands,
  SearchResultsDependencies,
} from "../../robots/searchResultPage/searchResult.cy";

context("Find Home Page", () => {
  const robotEyes = new HomePageRobotEyes();
  const robotHands = new HomePageRobotHands();
  const dependencies = new HomePageDependencies();

  beforeEach(() => {
    dependencies.setViewport();
    robotHands.wait(1000);
  });

  describe("Home Page", () => {
    it("Home Page Check", () => {
      dependencies.accessHomePage();
      robotEyes.scrollBottom();
      robotHands.wait(500);
      robotEyes.scrollTop();
    });

    it("Text Check - Heads", () => {
      robotEyes.getElementWithText("Books You are Reading");
      robotEyes.getElementWithText("Recommendations");
      robotEyes.getElementWithText("People You are Following Also Read");
      robotEyes.getElementWithText("Topics You Follow");
      robotEyes.getElementWithText("Top Ratings");
    });

    it("Cards Check", () => {
      robotEyes
        .getElementWithDataTestId("recommendations")
        .should("have.length", 1);
      robotEyes.getElementWithDataTestId("cards").should("have.length", 3);
    });
  });
});

context("Search Result Page", () => {
  const robotEyes = new SearchResultsRobotEyes();
  const robotHands = new SearchResultsRobotHands();
  const dependencies = new SearchResultsDependencies();

  beforeEach(() => {
    dependencies.setViewport();
    robotHands.wait(1000);
  });

  describe("Search Results Page Check", () => {
    it("Page Render Check", () => {
      dependencies.accessSearchResultsPage();
    });

    it("Search Bar Check", () => {
      robotHands.checkSearchBar("searchField");
    });

    it("Search Result Head Check", () => {
      robotEyes.checkTextIsPresent("Search Results for chem");
    });

    it("Cards See More Check", () => {
      robotHands.checkSeeMoreLink("boxcomponent");
    });

    it("Cards Description Check", () => {
      robotEyes.checkSearchResultCardDescription();
    });

    it("Pagination Check", () => {
      robotHands.checkPagination();
    });

    it("Explore Check", () => {
      robotHands.checkExploreTopics();
    });
  });
});

context("Book Info Page", () => {
  const robotEyes = new BookPageRobotEyes();
  const robotHands = new BookPageRobotHands();
  const dependencies = new BookPageDependencies();

  beforeEach(() => {
    dependencies.setViewport();
    robotHands.wait(1000);
  });

  describe("Book Info Page Check", () => {
    it("Book Info Page Render Check", () => {
      dependencies.accessBookInfoPage();
    });

    it("Book Image Check", () => {
      robotEyes.checkBookImage();
    });

    it("Book Title Check", () => {
      robotEyes.checkBookTitle();
    });

    it("Book Description Check", () => {
      robotEyes.checkBooksDescription();
    });

    it("Author Details Check", () => {
      robotEyes.checkAuthorName();
      robotEyes.checkAuthorDesc();
    });

    it("Read Status Check", () => {
      robotHands.clickOnReadStatusButton();
    });

    it("Bookmark Check", () => {
      robotHands.clickOnBooksMarkIcon();
    });

    it("Go to Home Page", () => {
      robotEyes.scrollTop();
      dependencies.accessHomePage();
    });
  });
});

context("My Library Page Check", () => {
  const robotEyes = new MyLibraryRobotEyes();
  const robotHands = new MyLibraryRobotHands();
  const dependencies = new MyLibraryDependencies();
  beforeEach(() => {
    dependencies.setViewport();
    robotHands.wait(1000);
  });

  describe("MyLibrary Check", () => {
    it("Open My Library page Check", () => {
      dependencies.accessLibraryPage();
      robotHands.wait(2000);
    });

    it("Heading Check", () => {
      robotHands.wait(2000);
      robotEyes.checkTextIsPresent("My Library");
    });

    it("Book Cards Check", () => {
      robotEyes.checkSearchResultCardDescription();
      robotEyes.scrollTop();
      dependencies.accessHomePage();
    });
  });
});
