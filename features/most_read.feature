Feature: Most Popular Section
  As a user,
  I want to verify the "Most Popular" section is displayed correctly on different devices and is accessible
  So that I can access relevant content easily.

  @TEST_ID_JIRA_001 @desktop @critical
  Scenario: Most popular section is visible on Desktop
    Given I navigate to the homepage
    When I wait for the Most Popular Section to load
    Then I should see the Most Popular Section
    And I capture a screenshot of the Most Popular Section on Desktop

  @TEST_ID_JIRA_002 @content-validation @high
  Scenario: Most popular section has 10 posts
    Given I navigate to the homepage
    When the Most Popular Section is visible
    Then the Most Popular Section should contain exactly 10 posts

  @TEST_ID_JIRA_003 @mobile @medium
  Scenario: Most popular section on Mobile View
    Given I navigate to the homepage
    When I resize the browser to a mobile view
    Then I should not see the Most Popular Section

  @TEST_ID_JIRA_004 @accessibility @critical
  Scenario: Validate "Skip to Most Read" accessibility feature
    Given I navigate to the homepage
    When I access the bypass block menu
    And I click on "Skip to Most Read"
    Then the focus should move to the Most Popular Section
