Feature('Livestream Player');

Scenario('Validate Player is visible in Livestream Player', ({ LivestreamPage }) => {
  LivestreamPage.navigateToLivestream();
  LivestreamPage.verifyPlayerIsVisible();
});

Scenario('Validate Switch Player button is visible in Livestream Player', ({ LivestreamPage }) => {
  LivestreamPage.navigateToLivestream();
  LivestreamPage.verifySwitchPlayerButtonIsVisible();
});

