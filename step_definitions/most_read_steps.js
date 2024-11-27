const { I, MostReadPage } = inject();
const allure = codeceptjs.container.plugins('allure');

Given('I navigate to the homepage', () => {
  MostReadPage.navigateToHomePage();
});

When('I wait for the Most Popular Section to load', () => {
  I.waitForElement(MostReadPage.mostPopularSection);
});

Then('I should see the Most Popular Section', () => {
  MostReadPage.verifyMostPopularIsVisible();
});

Then('I capture a screenshot of the Most Popular Section on Desktop', () => {
  I.saveScreenshot('most-popular-desktop.png');
});

When('the Most Popular Section is visible', () => {
  MostReadPage.verifyMostPopularIsVisible();
});

Then('the Most Popular Section should contain exactly 10 posts', () => {
  MostReadPage.verifyTenPosts();
});

When('I resize the browser to a mobile view', () => {
  I.resizeWindow(375, 812);
});

Then('I should not see the Most Popular Section', () => {
  MostReadPage.verifyMostPopularIsNotVisible();
});

When('I access the bypass block menu', () => {
  MostReadPage.accessBypassBlockMenu();
});

When('I click on "Skip to Most Read"', () => {
  MostReadPage.clickSkipToMostRead();
});

Then('the focus should move to the Most Popular Section', () => {
  I.seeElementInViewport(MostReadPage.mostPopularSection);
});
