const { I } = inject();

module.exports = {
  // Locators
  mostPopularSection: '#most-read-container',
  posts: "//*[@id='most-read-container']/div/ol/li",
  bypassBlock: ".bypass-block-links-container",
  skipToMostRead: "//*[@id='root']/div/div[1]/div[1]/div/header/div[1]/a[3]",
  left_header: "//*[@id='root']/div/div[1]",

  // Methods

  navigateToHomePage() {
    I.amOnPage('/');
  },

  verifyMostPopularIsVisible() {
    I.seeElement(this.mostPopularSection);
  },

  verifyTenPosts() {
    I.seeNumberOfVisibleElements(this.posts, 10)
  },

  resizeWindowToMoblie() {
    I.resizeWindow(375, 812); // Resize window to mobile dimensions (375px width, 812px height)
  },

  verifyMostPopularIsNotVisible() {
    I.dontSeeElement(this.mostPopularSection);
  },

  accessBypassBlockMenu: async function () {
    I.doubleClick(this.left_header);
    I.pressKey('Tab');
    I.seeElement(this.bypassBlock);
  },

  clickSkipToMostRead() {
    I.seeElement(this.skipToMostRead);
    I.click(this.skipToMostRead);
    I.seeInCurrentUrl(this.mostPopularSection);
  },
};
