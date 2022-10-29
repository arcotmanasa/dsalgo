@Login
Feature: Feature file of Login Functionality

  Background: 
    Given user will be on GetStarted page
    When user clicks on GetStarted
    Then User navigated to the Home Page
    When user is now on Home page

  Scenario Outline: Signin the website
    When user clicks on the Signin
    And user gets the title of the page
    When user enters Username as <uname> and Password as <password>
    And clicks on login button
    Then user will be logged In

    Examples: 
      | uname | password   |
      | Sush  | Sushmita09 |
