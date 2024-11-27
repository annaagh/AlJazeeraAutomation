Feature('Most Popular Section');

const { I, MostReadPage } = inject();

Scenario('Most popular section is visible on Desktop', ({ I, MostReadPage }) => {
  
    MostReadPage.navigateToHomePage();
    I.waitForElement(MostReadPage.mostPopularSection);
    MostReadPage.verifyMostPopularIsVisible();

  });

Scenario('Most popular section has 10 posts', ({ I, MostReadPage }) => {
  MostReadPage.navigateToHomePage();
  MostReadPage.verifyMostPopularIsVisible();
  MostReadPage.verifyTenPosts();
});


Scenario('Most popular section on Mobile View', ({ I, MostReadPage }) => {
  MostReadPage.navigateToHomePage();
  I.resizeWindowToMoblie();
  MostReadPage.verifyMostPopularIsNotVisible();
});


Scenario('Validate "Skip to Most Read" accessibility feature', async ({ I, MostReadPage }) => {
  MostReadPage.navigateToHomePage();
  MostReadPage.accessBypassBlockMenu();
  MostReadPage.clickSkipToMostRead();
});
