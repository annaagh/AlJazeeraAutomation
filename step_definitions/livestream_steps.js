const { I, LivestreamPage } = inject();
const allure = codeceptjs.container.plugins('allure');

Given('I navigate to the Livestream page', () => {
  LivestreamPage.navigateToLivestream();
});

Then('the Livestream Player should be visible', () => {
  LivestreamPage.verifyPlayerIsVisible();
});

Then('the Switch Player button should be visible', () => {
  LivestreamPage.verifySwitchPlayerButtonIsVisible();
});
