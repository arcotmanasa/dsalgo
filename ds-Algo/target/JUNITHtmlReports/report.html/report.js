$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/AccountRegister.feature");
formatter.feature({
  "name": "Feature file to register account on the website",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Register"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Register the Account in the website",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user opens the GetStarted page",
  "keyword": "Given "
});
formatter.step({
  "name": "user clicks on GetStarted button",
  "keyword": "When "
});
formatter.step({
  "name": "User is on the Home Page",
  "keyword": "Then "
});
formatter.step({
  "name": "user will click on Register link",
  "keyword": "When "
});
formatter.step({
  "name": "user will be navigated to the Register page",
  "keyword": "Then "
});
formatter.step({
  "name": "Enter the username \u003cuname\u003e and \u003cpassword\u003e  and \u003cconfpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Click on register button",
  "keyword": "And "
});
formatter.step({
  "name": "The user will navigate to the Home page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "uname",
        "password",
        "confpassword"
      ]
    },
    {
      "cells": [
        "Sushyolloyoo",
        "Sushmita09olyoop",
        "Sushmita09olyoop"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Register the Account in the website",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Register"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user opens the GetStarted page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.RegisterSD.user_opens_the_get_started_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on GetStarted button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.RegisterSD.user_clicks_on_get_started_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on the Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.RegisterSD.user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will click on Register link",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.RegisterSD.user_will_click_on_register_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will be navigated to the Register page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.RegisterSD.user_will_be_navigated_to_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the username Sushyolloyoo and Sushmita09olyoop  and Sushmita09olyoop",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.RegisterSD.enter_the_username_uname_and_password_and_confpassword(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on register button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.RegisterSD.click_on_register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user will navigate to the Home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.RegisterSD.the_user_will_navigate_to_the_Home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/ByLogin.feature");
formatter.feature({
  "name": "Feature file of Login Functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Signin the website",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user clicks on the Signin",
  "keyword": "When "
});
formatter.step({
  "name": "user gets the title of the page",
  "keyword": "And "
});
formatter.step({
  "name": "user enters Username as \u003cuname\u003e and Password as \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.step({
  "name": "user will be logged In",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "uname",
        "password"
      ]
    },
    {
      "cells": [
        "Sush",
        "Sushmita09"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user will be on GetStarted page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LoginSD.user_will_be_on_get_started_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on GetStarted",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginSD.user_clicks_on_getstarted()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigated to the Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginSD.user_navigated_to_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is now on Home page",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginSD.user_is_now_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Signin the website",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "user clicks on the Signin",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginSD.user_clicks_on_the_signin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the title of the page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSD.user_gets_the_title_of_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Username as Sush and Password as Sushmita09",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginSD.user_enters_Username_as_uname_and_Password_as_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSD.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will be logged In",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginSD.user_will_be_logged_In()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/Integrate.feature");
formatter.feature({
  "name": "Feature for different data stuctures validation",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Signin the website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user opens the GetStarted page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.RegisterSD.user_opens_the_get_started_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on GetStarted button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.RegisterSD.user_clicks_on_get_started_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigated to the Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginSD.user_navigated_to_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is now on Home page",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginSD.user_is_now_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the Signin",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSD.user_clicks_on_the_signin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the title of the page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSD.user_gets_the_title_of_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Username as Sush and Password as Sushmita09",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginSD.user_enters_Username_as_uname_and_Password_as_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSD.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will be logged In",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginSD.user_will_be_logged_In()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Operations in Stack of Stack page",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is now on HP",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_now_on_HP()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on GetStarted button of Stack",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_get_started_button_of_stack()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on Stack page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_stack_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Operations in Stack",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_operations_in_stack()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user must be navigated to the Operations in Stack page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_must_be_navigated_to_the_operations_in_stack_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks tryhere button of Operations in stack page",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_tryhere_button_of_operations_in_stack_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will be on Try Editor page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_will_be_on_try_editor_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will send the input",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_will_send_the_input()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click run",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.click_run()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "display the output",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.display_the_output()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate back to Stack page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.navigate_back_to_stack_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will be on Stack page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_will_be_on_stack_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Implementation link",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_implementation_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will be navigated to the Implementation page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_will_be_navigated_to_the_implementation_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Try here button of Implentation page",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_try_here_button_of_implentation_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on TryEditor page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_try_editor_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will send the data as input and click run",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_will_send_the_data_as_input_and_click_run()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will display the output on the console",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_will_display_the_output_on_the_console()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will navigate to Stack page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_will_navigate_to_stack_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is now on page Stack",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_now_on_page_stack()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Applications link",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_applications_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is now on Applications page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_now_on_applications_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will click on Try Here button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_will_click_on_try_here_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will execute try editor page",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_will_execute_try_editor_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "will get the output on the console",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.will_get_the_output_on_the_console()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will navigate to Home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_will_navigate_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is now on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_now_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on GetStarted button of Queue",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_get_started_button_of_queue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will be navigated to Queue page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_will_be_navigated_to_queue_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Implimentation of Queue in python",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_implimentation_of_queue_in_python()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will be navigated to Implimentation of Queue in python page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_will_be_navigated_to_implimentation_of_queue_in_python_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on try button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_try_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will send the input and click run",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_will_send_the_input_and_click_run()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will get the output displayed on console",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_will_get_the_output_displayed_on_console()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will be navigated back to Queue page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_will_be_navigated_back_to_queue_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will be on Queue page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_will_be_on_queue_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will click on Implementation using collections dequeue",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_will_click_on_implementation_using_collections_dequeue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will be navigated to Implementation using collections dequeue page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_will_be_navigated_to_implementation_using_collections_dequeue_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user  will click on Try here button of Collections dequeue page",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_will_click_on_try_here_button_of_collections_dequeue_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will be navigated to the Try Editor page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_will_be_navigated_to_the_try_editor_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will give the input and click run",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_will_give_the_input_and_click_run()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will display output",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_will_display_output()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will navigate to Queue page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_will_navigate_to_queue_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Queue page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_queue_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will click on Implementation using Array",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_will_click_on_implementation_using_array()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will be navigated to the Implementation Using Array page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_will_be_navigated_to_the_implementation_using_array_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Try here button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.click_on_try_here_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to the Try Editor page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_navigated_to_the_try_editor_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user give input data and click run",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_give_input_data_and_click_run()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will receive output and display the output",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_will_receive_output_and_display_the_output()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates back to Queue page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_navigates_back_to_queue_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is now on Queue page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_now_on_queue_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will click on Queue Operations",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_will_click_on_queue_operations()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to Queue Operations page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_navigated_to_queue_operations_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will click on Try here button on Queue Opearations page",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_will_click_on_try_here_button_on_queue_opearations_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will be on Tryeditor page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_will_be_on_tryeditor_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will send input and clicks run",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_will_send_input_and_clicks_run()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will get the output and displayed on console",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_will_get_the_output_and_displayed_on_console()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will be navigated to the Home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_will_be_navigated_to_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on DataStructuresIntro get started button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_data_structures_intro_get_started_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on DataStructureIntro page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_data_structure_intro_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Time Complexity button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_time_complexity_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Time complexity page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_time_complexity_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Try here button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_try_here_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Editor page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_editor_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters python code and clicks Run button and gets output",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_enters_python_code_and_clicks_run_button_and_gets_output()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates back to HomePage from Editor",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_navigates_back_to_HomePage_from_Editor()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on DataStructuresIntro get started button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_data_structures_intro_get_started_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on DataStructureIntro page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_data_structure_intro_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Time Complexity button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_time_complexity_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Time complexity page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_time_complexity_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Practice Questions button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_practice_questions_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Practice Questions page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_practice_questions_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates back to HomePage from PracticeQuestions",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_navigates_back_to_home_page_from_practice_questions()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Array get started button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_array_get_started_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Array page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_array_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Arrays in Python button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_arrays_in_python_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Arrays in Python page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_arrays_in_python_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Try here button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_try_here_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Editor page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_editor_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters python code and clicks Run button and gets output",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_enters_python_code_and_clicks_run_button_and_gets_output()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates back to HomePage from Editor",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_navigates_back_to_HomePage_from_Editor()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Array get started button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_array_get_started_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Array page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_array_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Arrays using List button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_arrays_using_list_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Arrays using List page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_arrays_using_list_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Try here button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_try_here_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Editor page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_editor_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters python code and clicks Run button and gets output",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_enters_python_code_and_clicks_run_button_and_gets_output()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates back to HomePage from Editor",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_navigates_back_to_HomePage_from_Editor()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Array get started button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_array_get_started_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Array page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_array_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Basic Operations in List button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_basic_operations_in_list_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Basic Operations in List page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_basic_operations_in_list_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Try here button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_try_here_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Editor page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_editor_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters python code and clicks Run button and gets output",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_enters_python_code_and_clicks_run_button_and_gets_output()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates back to HomePage from Editor",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_navigates_back_to_HomePage_from_Editor()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Array get started button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_array_get_started_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Array page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_array_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Applications of Array button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_applications_of_array_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Applications of Array page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_applications_of_array_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Try here button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_try_here_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Editor page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_editor_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters python code and clicks Run button and gets output",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_enters_python_code_and_clicks_run_button_and_gets_output()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates back to HomePage from Editor",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_navigates_back_to_HomePage_from_Editor()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Array get started button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_array_get_started_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Array page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_array_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Applications of Array button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_applications_of_array_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Applications of Array page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_applications_of_array_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Practice Questions button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_practice_questions_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Practice Questions page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_practice_questions_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Search the Array button in Practice",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_search_the_array_button_in_practice()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on question one page in Practice",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_question_one_page_in_practice()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters python code and clicks Submit button and gets output",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_enters_python_code_and_clicks_submit_button_and_gets_output()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates back to Practice page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_navigates_back_to_practice_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Max Consecutive Ones button in Practice",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_max_consecutive_ones_button_in_practice()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on question two page in Practice",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_question_two_page_in_practice()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters python code and clicks Submit button and gets output",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_enters_python_code_and_clicks_submit_button_and_gets_output()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates back to Practice page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_navigates_back_to_practice_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Find Numbers with Even Number of Digits button in Practice",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_find_numbers_with_even_number_of_digits_button_in_practice()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on question three page in Practice",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_question_three_page_in_practice()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters python code and clicks Submit button and gets output",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_enters_python_code_and_clicks_submit_button_and_gets_output()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates back to Practice page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_navigates_back_to_practice_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Squares of a Sorted Array button in Practice",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_squares_of_a_sorted_array_button_in_practice()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on question four page in Practice",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_question_four_page_in_practice()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters python code and clicks Submit button and gets output",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_enters_python_code_and_clicks_submit_button_and_gets_output()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates back to Practice page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_navigates_back_to_practice_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates back to HomePage from Editor",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_navigates_back_to_HomePage_from_Editor()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Graph Get Started button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_graph_get_started_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should navigate to Graph page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_should_navigate_to_graph_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clikcs on Graph",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clikcs_on_graph()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.clicks_on_try_here_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_enter_input()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.click_on_run()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user go back to Topic Covered page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_go_back_to_Topic_Covered_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on graph Topic covered page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_graph_Topic_covered_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clikcs on Graph Representations",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clikcs_on_Graph_Representations()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.clicks_on_try_here_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_enter_input()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.click_on_run()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate back to Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_navigate_back_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Tree GetStarted button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_tree_get_started_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should navigate to Tree page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_should_navigate_to_tree_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clikcs on overview of Trees",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clikcs_on_overview_of_trees()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.clicks_on_try_here_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_enter_input()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.click_on_run()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user go back to Topic Covered page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_go_back_to_Topic_Covered_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Tree Topic covered page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_tree_topic_covered_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clikcs on Terminologies",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clikcs_on_terminologies()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.clicks_on_try_here_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_enter_input()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.click_on_run()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user go back to Topic Covered page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_go_back_to_Topic_Covered_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Tree Topic covered page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_tree_topic_covered_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clikcs on Types of Trees",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clikcs_on_types_of_trees()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.clicks_on_try_here_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_enter_input()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.click_on_run()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user go back to Topic Covered page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_go_back_to_Topic_Covered_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Tree Topic covered page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_tree_topic_covered_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clikcs on Tree Traversals",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clikcs_on_tree_traversals()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.clicks_on_try_here_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_enter_input()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.click_on_run()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user go back to Topic Covered page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_go_back_to_Topic_Covered_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Tree Topic covered page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_tree_topic_covered_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clikcs on Traversals-Illustration",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clikcs_on_traversals_illustration()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.clicks_on_try_here_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_enter_input()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.click_on_run()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user go back to Topic Covered page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_go_back_to_Topic_Covered_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Tree Topic covered page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_tree_topic_covered_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clikcs on Binary Trees",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clikcs_on_binary_trees()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.clicks_on_try_here_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_enter_input()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.click_on_run()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user go back to Topic Covered page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_go_back_to_Topic_Covered_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Tree Topic covered page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_tree_topic_covered_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clikcs on Types of Binary Trees",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clikcs_on_types_of_binary_trees()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.clicks_on_try_here_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_enter_input()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.click_on_run()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user go back to Topic Covered page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_go_back_to_Topic_Covered_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Tree Topic covered page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_tree_topic_covered_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clikcs on Implementation in Python",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clikcs_on_implementation_in_python()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.clicks_on_try_here_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_enter_input()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.click_on_run()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user go back to Topic Covered page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_go_back_to_Topic_Covered_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Tree Topic covered page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_tree_topic_covered_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clikcs on Binary Tree Traversals",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clikcs_on_binary_tree_traversals()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.clicks_on_try_here_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_enter_input()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.click_on_run()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user go back to Topic Covered page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_go_back_to_Topic_Covered_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Tree Topic covered page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_tree_topic_covered_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clikcs on Implementation of Binary Trees",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clikcs_on_implementation_of_binary_trees()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.clicks_on_try_here_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_enter_input()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.click_on_run()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user go back to Topic Covered page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_go_back_to_Topic_Covered_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Tree Topic covered page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_tree_topic_covered_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clikcs on Applications of Binary trees",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clikcs_on_applications_of_binary_trees()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.clicks_on_try_here_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_enter_input()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.click_on_run()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user go back to Topic Covered page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_go_back_to_Topic_Covered_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Tree Topic covered page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_tree_topic_covered_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clikcs on Binary Search Trees",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clikcs_on_binary_search_trees()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.clicks_on_try_here_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_enter_input()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.click_on_run()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user go back to Topic Covered page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_go_back_to_Topic_Covered_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Tree Topic covered page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_tree_topic_covered_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clikcs on Implementation Of BST",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clikcs_on_implementation_of_bst()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.clicks_on_try_here_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_enter_input()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.click_on_run()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate back to Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_navigate_back_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on GetStarted button for LinkedList",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_GetStarted_button_for_LinkedList()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should navigate to LinkedList page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_should_navigate_to_LinkedList_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Introduction link",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_Introduction_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should navigate to Linkedlist Subpage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_should_navigate_to_LinkedList_Subpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Try Here button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_Try_Here_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should navigate to tryEditor page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_should_navigate_tryEditor_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters input",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_enters_input()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Run",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.clicks_on_Run()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see result of code",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_should_see_result_of_code()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on go back button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_go_back_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should navigate to Linkedlist Subpage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_should_navigate_to_LinkedList_Subpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Creating a LinkedList link",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_Creating_a_LinkedList_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Try Here button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_Try_Here_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should navigate to tryEditor page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_should_navigate_tryEditor_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters input",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_enters_input()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Run",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.clicks_on_Run()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see result of code",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_should_see_result_of_code()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on go back button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_go_back_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should navigate to Linkedlist Subpage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_should_navigate_to_LinkedList_Subpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Types of Linked List link",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_Types_of_Linked_List_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Try Here button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_Try_Here_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should navigate to tryEditor page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_should_navigate_tryEditor_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters input",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_enters_input()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Run",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.clicks_on_Run()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see result of code",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_should_see_result_of_code()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on go back button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_go_back_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should navigate to Linkedlist Subpage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_should_navigate_to_LinkedList_Subpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Implement Linked List in Python link",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_Implement_Linked_List_in_Python_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Try Here button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_Try_Here_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should navigate to tryEditor page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_should_navigate_tryEditor_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters input",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_enters_input()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Run",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.clicks_on_Run()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see result of code",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_should_see_result_of_code()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on go back button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_go_back_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should navigate to Linkedlist Subpage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_should_navigate_to_LinkedList_Subpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Traversal link",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_Traversal_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Try Here button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_Try_Here_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should navigate to tryEditor page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_should_navigate_tryEditor_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters input",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_enters_input()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Run",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.clicks_on_Run()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see result of code",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_should_see_result_of_code()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on go back button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_go_back_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should navigate to Linkedlist Subpage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_should_navigate_to_LinkedList_Subpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Insertion link",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_Insertion_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Try Here button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_Try_Here_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should navigate to tryEditor page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_should_navigate_tryEditor_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters input",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_enters_input()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Run",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.clicks_on_Run()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see result of code",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_should_see_result_of_code()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on go back button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_go_back_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should navigate to Linkedlist Subpage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_should_navigate_to_LinkedList_Subpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Deletion link",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_Deletion_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Try Here button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_Try_Here_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should navigate to tryEditor page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_should_navigate_tryEditor_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters input",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_enters_input()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Run",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Integrate.clicks_on_Run()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see result of code",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_should_see_result_of_code()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on go back button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_go_back_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should navigate to Linkedlist Subpage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_should_navigate_to_LinkedList_Subpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Practice Questions link",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_on_Practice_Questions_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should navigate to Practice Questions page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_should_navigate_to_Practice_Questions_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks NumpyNinja link",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_clicks_NumpyNinja_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should navigate to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_should_navigate_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will click on Signout button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Integrate.user_will_click_on_signout_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});