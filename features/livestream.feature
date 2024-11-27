Feature: Livestream Player
  As a user,
  I want to ensure the Livestream Player and its controls are displayed correctly
  So that I can view and interact with the livestream content.

  @critical @player-visibility
  Scenario: Validate Player is visible in Livestream Player
    Given I navigate to the Livestream page
    Then the Livestream Player should be visible

  @high @button-visibility
  Scenario: Validate Switch Player button is visible in Livestream Player
    Given I navigate to the Livestream page
    Then the Switch Player button should be visible
