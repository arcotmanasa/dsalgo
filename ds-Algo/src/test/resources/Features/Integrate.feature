Feature: Feature for different data stuctures validation

    Background: Signin the website
    Given user opens the GetStarted page
    When user clicks on GetStarted button
    Then User navigated to the Home Page
    When user is now on Home page
    And user clicks on the Signin
    And user gets the title of the page
    When user enters Username as Sush and Password as Sushmita09
    And clicks on login button
    Then user will be logged In
    
    
     #Feature file of  Stack page

  Scenario:  Operations in Stack of Stack page 
    Given user is now on HP
    When user clicks on GetStarted button of Stack
    Given User is on Stack page
    When user clicks on Operations in Stack
    Then user must be navigated to the Operations in Stack page
    When user clicks tryhere button of Operations in stack page
    Then user will be on Try Editor page 
    When user will send the input 
    And  click run
    Then display the output
    Then navigate back to Stack page 
    
    
     # Scenario: Implementation of Stack page
    Given user will be on Stack page
    When  user clicks on Implementation link
    Then  user will be navigated to the Implementation page
    When user clicks on Try here button of Implentation page
    Then user is on TryEditor page
    When user will send the data as input and click run 
    Then user will display the output on the console
    Then user will navigate to Stack page
    
    
       # Scenario: Applications of Stack Page 
    Given user is now on page Stack
    When user clicks on Applications link
    Then user is now on Applications page 
    When user will click on Try Here button 
    When user will execute try editor page 
    Then will get the output on the console
    Then user will navigate to Home page 
    
    
    #Feature file of Queue Page 
    
    
      #Implementation of Queue in Python
    # Scenario:Queue page scenario
    Given user is now on home page
    When user clicks on GetStarted button of Queue
    Then user will be navigated to Queue page
    When user clicks on Implimentation of Queue in python
    Then user will be navigated to Implimentation of Queue in python page
    When user clicks on try button
    Then user will send the input and click run 
    Then user will get the output displayed on console
    Then user will be navigated back to Queue page
    
   # Scenario:Implementation using collections dequeue
    
     Given user will be on Queue page 
     When user will click on Implementation using collections dequeue 
     Then user will be navigated to Implementation using collections dequeue page
     When user  will click on Try here button of Collections dequeue page
     Then user will be navigated to the Try Editor page 
     When user will give the input and click run
     Then user will display output
     Then user will navigate to Queue page
     
     #Scenario:Implementation using Array
     
     Given user is on Queue page
     When user will click on Implementation using Array 
     Then user will be navigated to the Implementation Using Array page 
     When click on Try here button
     Then user is navigated to the Try Editor page 
     When user give input data and click run
     Then user will receive output and display the output
     Then user navigates back to Queue page 
     
    # Scenario:Queue Operations
     
     Given user is now on Queue page 
     When user will click on Queue Operations 
     Then user is navigated to Queue Operations page 
     When user will click on Try here button on Queue Opearations page 
     Then user will be on Tryeditor page 
     Then user will send input and clicks run 
     Then user will get the output and displayed on console
     Then user will be navigated to the Home page 
     
     
    # Then user will click on Signout button
     

    
    #Test data structures introduction
     # test data structures introduction
    Given user is on home page
    When user clicks on DataStructuresIntro get started button
    Then user is on DataStructureIntro page
    And user clicks on Time Complexity button
    Then user is on Time complexity page
    And user clicks on Try here button
    Then user is on Editor page
    And user enters python code and clicks Run button and gets output
    Then user navigates back to HomePage from Editor
     
    Given user is on home page
    When user clicks on DataStructuresIntro get started button
    Then user is on DataStructureIntro page
    And user clicks on Time Complexity button
    Then user is on Time complexity page
    And user clicks on Practice Questions button
    Then user is on Practice Questions page
    Then user navigates back to HomePage from PracticeQuestions
   
    #test array
    Given user is on home page
    When user clicks on Array get started button
    Then user is on Array page
    And user clicks on Arrays in Python button
    Then user is on Arrays in Python page
    And user clicks on Try here button
    Then user is on Editor page
    And user enters python code and clicks Run button and gets output
    Then user navigates back to HomePage from Editor
    
    Given user is on home page
    When user clicks on Array get started button
    Then user is on Array page
    And user clicks on Arrays using List button
    Then user is on Arrays using List page
    And user clicks on Try here button
    Then user is on Editor page
    And user enters python code and clicks Run button and gets output
    Then user navigates back to HomePage from Editor
    
    Given user is on home page
    When user clicks on Array get started button
    Then user is on Array page
    And user clicks on Basic Operations in List button
    Then user is on Basic Operations in List page
    And user clicks on Try here button
    Then user is on Editor page
    And user enters python code and clicks Run button and gets output
    Then user navigates back to HomePage from Editor
    
    Given user is on home page
    When user clicks on Array get started button
    Then user is on Array page
    And user clicks on Applications of Array button
    Then user is on Applications of Array page
    And user clicks on Try here button
    Then user is on Editor page
    And user enters python code and clicks Run button and gets output
    Then user navigates back to HomePage from Editor
    
    Given user is on home page
    When user clicks on Array get started button
    Then user is on Array page
    And user clicks on Applications of Array button
    Then user is on Applications of Array page
    And user clicks on Practice Questions button
    Then user is on Practice Questions page
    And user clicks on Search the Array button in Practice
    Then user is on question one page in Practice
    And user enters python code and clicks Submit button and gets output
    Then user navigates back to Practice page
    And user clicks on Max Consecutive Ones button in Practice
    Then user is on question two page in Practice
    And user enters python code and clicks Submit button and gets output
    Then user navigates back to Practice page
    And user clicks on Find Numbers with Even Number of Digits button in Practice
    Then user is on question three page in Practice
    And user enters python code and clicks Submit button and gets output
    Then user navigates back to Practice page
    And user clicks on Squares of a Sorted Array button in Practice
    Then user is on question four page in Practice
    And user enters python code and clicks Submit button and gets output
    Then user navigates back to Practice page
    Then user navigates back to HomePage from Editor
    
     #Scenarios of Graph
    Given user is on home page
    When user clicks on Graph Get Started button
    Then user should navigate to Graph page
    And user clikcs on Graph
    Then clicks on Try here button
    Then user enter input
    And click on Run
    Then it should display entered input
    Then user go back to Topic Covered page
    
    #Scenarios of Graph Representations
    Given user is on graph Topic covered page
    When user clikcs on Graph Representations
    Then clicks on Try here button
    Then user enter input
    And click on Run
    Then it should display entered input
    Then user navigate back to Home Page
    
    
    #Scenarios of Tree
    Given user is on home page
    Then user clicks on Tree GetStarted button
    Then user should navigate to Tree page
    And user clikcs on overview of Trees
    Then clicks on Try here button
    Then user enter input
    And click on Run
    Then it should display entered input
    Then user go back to Topic Covered page
    
    #Scenarios of Terminologies
    Given user is on Tree Topic covered page
    When user clikcs on Terminologies
    Then clicks on Try here button
    Then user enter input
    And click on Run
    Then it should display entered input
    Then user go back to Topic Covered page
    
    
    #Scenarios of Types of Trees
    Given user is on Tree Topic covered page
    When user clikcs on Types of Trees
    Then clicks on Try here button
    Then user enter input
    And click on Run
    Then it should display entered input
    Then user go back to Topic Covered page
    
    
    #Scenarios of Tree Traversals
    Given user is on Tree Topic covered page
    When user clikcs on Tree Traversals
    Then clicks on Try here button
    Then user enter input
    And click on Run
    Then it should display entered input
   Then user go back to Topic Covered page
   
   
    #Scenarios of Traversals-Illustration
    Given user is on Tree Topic covered page
    When user clikcs on Traversals-Illustration
    Then clicks on Try here button
    Then user enter input
    And click on Run
    Then it should display entered input
    Then user go back to Topic Covered page
    #Scenarios of Binary Trees
    Given user is on Tree Topic covered page
    When user clikcs on Binary Trees
    Then clicks on Try here button
    Then user enter input
    And click on Run
    Then it should display entered input
    Then user go back to Topic Covered page
    #Scenarios of  Types of Binary Trees
    Given user is on Tree Topic covered page
    When user clikcs on Types of Binary Trees
    Then clicks on Try here button
    Then user enter input
    And click on Run
    Then it should display entered input
    Then user go back to Topic Covered page
    #Scenarios of Implementation in Python
    Given user is on Tree Topic covered page
    When user clikcs on Implementation in Python
    Then clicks on Try here button
    Then user enter input
    And click on Run
    Then it should display entered input
    Then user go back to Topic Covered page
    #Scenarios of Binary Tree Traversals
    Given user is on Tree Topic covered page
    When user clikcs on Binary Tree Traversals
    Then clicks on Try here button
    Then user enter input
    And click on Run
    Then it should display entered input
   Then user go back to Topic Covered page
    #Scenarios of Implementation of Binary Trees
    Given user is on Tree Topic covered page
    When user clikcs on Implementation of Binary Trees
    Then clicks on Try here button
    Then user enter input
    And click on Run
    Then it should display entered input
    Then user go back to Topic Covered page
    #Scenarios of Applications of Binary trees
    Given user is on Tree Topic covered page
    When user clikcs on Applications of Binary trees
    Then clicks on Try here button
    Then user enter input
    And click on Run
    Then it should display entered input
    Then user go back to Topic Covered page
    #Scenarios of Binary Search Trees
    Given user is on Tree Topic covered page
    When user clikcs on Binary Search Trees
    Then clicks on Try here button
    Then user enter input
    And click on Run
    Then it should display entered input
    Then user go back to Topic Covered page
    #Scenarios of Implementation Of BST
    Given user is on Tree Topic covered page
    When user clikcs on Implementation Of BST
    Then clicks on Try here button
    Then user enter input
    And click on Run
    Then it should display entered input
    Then user navigate back to Home Page
    #And clicks on SignOut btn
   
   
   
    #Sridevi
   
   
  # Linked List Module 
   Given user is on the home page
  	When user clicks on GetStarted button for LinkedList
    Then user should navigate to LinkedList page
    When user clicks on Introduction link
 		Then user should navigate to Linkedlist Subpage
    When user clicks on Try Here button
		Then user should navigate to tryEditor page
		When user enters input 
		And clicks on Run
		Then user should see result of code
				
		When user clicks on go back button
		Then user should navigate to Linkedlist Subpage
    When user clicks on Creating a LinkedList link
    And user clicks on Try Here button
    Then user should navigate to tryEditor page
		When user enters input 
		And clicks on Run
		Then user should see result of code
		
		When user clicks on go back button
		Then user should navigate to Linkedlist Subpage
		When user clicks on Types of Linked List link
		And user clicks on Try Here button
    Then user should navigate to tryEditor page
		When user enters input 
		And clicks on Run
		Then user should see result of code
		
		When user clicks on go back button
		Then user should navigate to Linkedlist Subpage
		When user clicks on Implement Linked List in Python link
		And user clicks on Try Here button
    Then user should navigate to tryEditor page
		When user enters input 
		And clicks on Run
		Then user should see result of code
		
		When user clicks on go back button
		Then user should navigate to Linkedlist Subpage
		When user clicks on Traversal link
		And user clicks on Try Here button
    Then user should navigate to tryEditor page
		When user enters input 
		And clicks on Run
		Then user should see result of code
		
		
		When user clicks on go back button
		Then user should navigate to Linkedlist Subpage
		When user clicks on Insertion link
		And user clicks on Try Here button
    Then user should navigate to tryEditor page
		When user enters input 
		And clicks on Run
		Then user should see result of code
		
		
		When user clicks on go back button
		Then user should navigate to Linkedlist Subpage
		When user clicks on Deletion link
		And user clicks on Try Here button
    Then user should navigate to tryEditor page
		When user enters input 
		And clicks on Run
		Then user should see result of code
		
		
		When user clicks on go back button
		Then user should navigate to Linkedlist Subpage
		When user clicks on Practice Questions link
		Then user should navigate to Practice Questions page
		
		When user clicks NumpyNinja link
		#And user clicks GetStarted  button
    Then user should navigate to home page
    Then user will click on Signout button
    
		
    
    
    
    
    
    
    
    
    
    
    