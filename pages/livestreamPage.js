const { I } = inject();

module.exports = {
  // Locators
  livestreamPlayer: "//*[@id='main-content-area']/div/div[3]",
  switchPlayerButton: '#liveStreamPlayerHelpButton' ,


  // Methods
  navigateToLivestream() {
    I.amOnPage('/live');
  },

  verifyPlayerIsVisible() {
    I.waitForVisible(this.livestreamPlayer, 10);
    I.seeElement(this.livestreamPlayer);
  },

  verifySwitchPlayerButtonIsVisible() {
    I.waitForVisible(this.switchPlayerButton, 10);
    I.seeElement(this.switchPlayerButton);
  },
};
