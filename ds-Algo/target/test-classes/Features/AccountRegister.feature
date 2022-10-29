@Register
Feature: Feature file to register account on the website

  Scenario Outline: Register the Account in the website
    Given user opens the GetStarted page
    When user clicks on GetStarted button
    Then User is on the Home Page
    When user will click on Register link
    Then user will be navigated to the Register page
    When Enter the username <uname> and <password>  and <confpassword>
    And Click on register button
    Then The user will navigate to the Home page

    Examples: 
      | uname                  | password         | confpassword     |
      | Sushyolloyoo           | Sushmita09olyoop | Sushmita09olyoop |
