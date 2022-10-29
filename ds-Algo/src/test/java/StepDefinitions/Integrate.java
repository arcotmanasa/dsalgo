package StepDefinitions;

import org.apache.log4j.Logger;
import org.junit.Assert;

import Driver.DriverFactory;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pageObjects.ApplicationsPage;
import pageObjects.DataStructuresPage;
//import pages.DataStructuresPage;
import pageObjects.GetStarted;
import pageObjects.HomePage;
import pageObjects.Implementation;
import pageObjects.ImplementationsofQueueinPython;
import pageObjects.ImplementationusingArray;
import pageObjects.Implimenationusingcollectionsdequeue;
import pageObjects.LinkedListModPagePF;
import pageObjects.LoggerHelper;
import pageObjects.LoginPage;
import pageObjects.OperationsinStackPage;
import pageObjects.QueueOperations;
import pageObjects.QueuePage;
import pageObjects.StackPage;
import pageObjects.TryEditor;

public class Integrate extends DriverFactory{

	public StackPage SP;
	public HomePage HP;
	public LoginPage LP;
	public TryEditor TE;
	public GetStarted GP;
	public OperationsinStackPage OPS;
	public Implementation IM;
	public ApplicationsPage AP;
	public ImplementationsofQueueinPython IQP;
	public Implimenationusingcollectionsdequeue ICD;
	public ImplementationusingArray IA;
	public QueueOperations QO;
	public QueuePage QP;
	public LinkedListModPagePF LLMPPF;
	
	DataStructuresPage ds=new DataStructuresPage();	
	String title;
	
	@Given("user is now on HP")
	public void user_is_now_on_HP() {
	
	    GP= new GetStarted();
	    HP= new HomePage();
	    LP=new LoginPage();
	    AP=new ApplicationsPage();
	    IM=new Implementation();
	    SP= new StackPage();
	    OPS=new OperationsinStackPage();
	    TE=new TryEditor();
	    IQP=new ImplementationsofQueueinPython();
		ICD=new Implimenationusingcollectionsdequeue();
		IA=new ImplementationusingArray();
		QO=new QueueOperations();
		Logger log = LoggerHelper.getLogger(LoggerHelper.class);
//	    GP.clickGetStarted();
//		HP.clickSignin();
//		LP.setUsername("Sush");
//		LP.setPassword("Sushmita09");
//		LP.clickLogin();
		
	}
	
	
	
	@When("user clicks on GetStarted button of Stack")
	public void user_clicks_on_get_started_button_of_stack() {
		Logger log = LoggerHelper.getLogger(LoggerHelper.class);
	    HP.clickGetStartedStack();
	    log.info("user will be on GetStarted button of stack");
	}

	@Given("User is on Stack page")
	public void user_is_on_stack_page() throws InterruptedException {
		SP= new StackPage();
		
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Stack", title);
		Thread.sleep(3000);
		Logger log = LoggerHelper.getLogger(LoggerHelper.class);
	    log.info("User will be on Stack Page");
	}

	@When("user clicks on Operations in Stack")
	public void user_clicks_on_operations_in_stack() {
	   SP.clickOperationsinStack();
	   Logger log = LoggerHelper.getLogger(LoggerHelper.class);
	   log.info("User clicks on operations in Stack");
	}

	@Then("user must be navigated to the Operations in Stack page")
	public void user_must_be_navigated_to_the_operations_in_stack_page() throws InterruptedException {
		OPS= new OperationsinStackPage();
		String title = driver.getTitle();
		System.out.println(title);
	Assert.assertEquals("Operations in Stack", title);
	Logger log = LoggerHelper.getLogger(LoggerHelper.class);
	log.info("user will be navigated to operations in stack page");
	//Thread.sleep(3000);
	}

	@When("user clicks tryhere button of Operations in stack page")
	public void user_clicks_tryhere_button_of_operations_in_stack_page() {
    OPS.clickbtnTryHere();
    Logger log = LoggerHelper.getLogger(LoggerHelper.class);
    log.info("User clicks on Try here button");
}

	@Then("user will be on Try Editor page")
	public void user_will_be_on_try_editor_page() throws InterruptedException {
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Assessment", title);
	//Thread.sleep(4000);
}

	@When("user will send the input")
	public void user_will_send_the_input() throws InterruptedException {
		TE= new TryEditor();
	    TE.clickTryEditor();
	    Logger log = LoggerHelper.getLogger(LoggerHelper.class);
	    log.info("user will send the input and clicks on run");
	    //Thread.sleep(3000);
	}

	@When("click run")
	public void click_run() throws InterruptedException {
		TE=new TryEditor();
	   TE.clickbtnrun();
	  // Thread.sleep(3000);
	}

	@Then("display the output")
	public void display_the_output() throws InterruptedException {
		TE= new TryEditor();
	    TE.displayoutputtxt();
	    Thread.sleep(3000);
	    Logger log = LoggerHelper.getLogger(LoggerHelper.class);
	    log.info("user will display the output on the console");
	}

	@Then("navigate back to Stack page")
	public void navigate_back_to_stack_page() throws InterruptedException {
		driver.navigate().back();
		driver.navigate().back();
		//Thread.sleep(3000);
		Logger log = LoggerHelper.getLogger(LoggerHelper.class);
		log.info("User will navigate back to the stack page");
		
	}

	@Given("user will be on Stack page")
	public void user_will_be_on_stack_page() throws InterruptedException {
		    SP= new StackPage();
		String title = driver.getTitle();
		Assert.assertEquals("Stack", title);
		//Thread.sleep(3000);
		
		
	}

	@When("user clicks on Implementation link")
	public void user_clicks_on_implementation_link() {
		IM= new Implementation();
		OPS=new OperationsinStackPage();
	    OPS.clickImplementation();
	}

	@Then("user will be navigated to the Implementation page")
	public void user_will_be_navigated_to_the_implementation_page() throws InterruptedException {
		IM= new Implementation();
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Implementation", title);
		//Thread.sleep(3000);
	}

	@When("user clicks on Try here button of Implentation page")
	public void user_clicks_on_try_here_button_of_implentation_page() throws InterruptedException {
		  IM=new Implementation();
		 IM.clickTryHere();
		 //Thread.sleep(3000);
	}

	@Then("user is on TryEditor page")
	public void user_is_on_try_editor_page() throws InterruptedException  {
		TE=new TryEditor();
		String title = driver.getTitle();
		System.out.println(title);
	Assert.assertEquals("Assessment", title);
	//Thread.sleep(3000);
	}

	@When("user will send the data as input and click run")
	public void user_will_send_the_data_as_input_and_click_run() throws InterruptedException {
		TE= new TryEditor();
	    TE.clickTryEditor();
	    TE.clickbtnrun();
	   // Thread.sleep(3000);
	}

	@Then("user will display the output on the console")
	public void user_will_display_the_output_on_the_console() throws InterruptedException {
		TE=new TryEditor();
	   TE.displayoutputtxt();
	  // Thread.sleep(3000);
	}

	@Then("user will navigate to Stack page")
	public void user_will_navigate_to_stack_page() throws InterruptedException {
		SP=new StackPage();
	    driver.navigate().back();
	    driver.navigate().back();
	    //Thread.sleep(3000);
	}

	@Given("user is now on page Stack")
	public void user_is_now_on_page_stack() throws InterruptedException {
		SP=new  StackPage();
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Stack", title);
		//Thread.sleep(3000);
	}

	@When("user clicks on Applications link")
	public void user_clicks_on_applications_link() {
		OPS=new OperationsinStackPage();
	    OPS.clickApplication();
	}

	@Then("user is now on Applications page")
	public void user_is_now_on_applications_page() throws InterruptedException {
		AP=new ApplicationsPage();
		String title = driver.getTitle();
		System.out.println(title);

		Assert.assertEquals("Applications", title);
		//Thread.sleep(3000);
	}

	@When("user will click on Try Here button")
	public void user_will_click_on_try_here_button() throws InterruptedException {
	    AP.clickbtnTryHere();
	    //Thread.sleep(3000);
	}

	@When("user will execute try editor page")
	public void user_will_execute_try_editor_page() throws InterruptedException {
	   TE.clickTryEditor();
	   TE.clickbtnrun();
	   //Thread.sleep(3000);
	}

	@Then("will get the output on the console")
	public void will_get_the_output_on_the_console() throws InterruptedException {
	    TE.displayoutputtxt();
	 // Thread.sleep(3000);
	}

	@Then("user will navigate to Home page")
	public void user_will_navigate_to_home_page() {
	    driver.navigate().back();
	    driver.navigate().back();
	    driver.navigate().back();
	}
	
	
	
	// Stepdefinitions of Queue module
	
	
	@Given("user is now on home page")
	public void user_is_now_on_home_page() {
	 
		GP=new GetStarted();
		HP=new HomePage();
		LP= new LoginPage();
		SP= new StackPage();
		OPS=new OperationsinStackPage();
		TE=new TryEditor();
		IM=new Implementation();
		AP=new ApplicationsPage();
		QP=new QueuePage();
		IQP=new ImplementationsofQueueinPython();
		ICD=new Implimenationusingcollectionsdequeue();
		IA=new ImplementationusingArray();
		QO=new QueueOperations();

	}
    

	@When("user clicks on GetStarted button of Queue")
	public void user_clicks_on_get_started_button_of_queue() {
	   HP.clickGetStartedQueue();
	}

	@Then("user will be navigated to Queue page")
	public void user_will_be_navigated_to_queue_page()  {
             QP= new QueuePage();
     		
     		String title = driver.getTitle();
     		Assert.assertEquals("Queue", title);
     		
	}

	@When("user clicks on Implimentation of Queue in python")
	public void user_clicks_on_implimentation_of_queue_in_python() {
		QP= new QueuePage();
	    QP.clickImplimentationofQueueinPython();
	
	}
	@Then("user will be navigated to Implimentation of Queue in python page")
	public void user_will_be_navigated_to_implimentation_of_queue_in_python_page()  {
		IQP=new ImplementationsofQueueinPython();
		String title = driver.getTitle();
		System.out.println(title);
	Assert.assertEquals("Implementation of Queue in Python", title);

	
}

	@When("user clicks on try button")
	public void user_clicks_on_try_button() {
		IQP=new ImplementationsofQueueinPython();
		IQP.clickTryHere();
	}

	@Then("user will send the input and click run")
	public void user_will_send_the_input_and_click_run() {
		
	   TE= new TryEditor();
	   TE.clickTryEditor();
	   TE.clickbtnrun();
	}

	@Then("user will get the output displayed on console")
	public void user_will_get_the_output_displayed_on_console() {
		TE=new TryEditor();
	    TE.displayoutputtxt();
	}

	@Then("user will be navigated back to Queue page")
	public void user_will_be_navigated_back_to_queue_page() {
		
	driver.navigate().back();
	driver.navigate().back();
		
	}
	   
	

	@Given("user will be on Queue page")
	public void user_will_be_on_queue_page() {
		QP= new QueuePage();
		String title = driver.getTitle();
 		//Assert.assertEquals("Queue", title);
 		
	
	    
	}

	@When("user will click on Implementation using collections dequeue")
	public void user_will_click_on_implementation_using_collections_dequeue() {
		QP=new QueuePage();
		QP.clickImplementationsusingcollectionDequeue();
		
	}
	   
	

	@Then("user will be navigated to Implementation using collections dequeue page")
	public void user_will_be_navigated_to_implementation_using_collections_dequeue_page(){
		ICD=new Implimenationusingcollectionsdequeue();
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Implementation using collections.deque", title);
		
		
	}

	@When("user  will click on Try here button of Collections dequeue page")
	public void user_will_click_on_try_here_button_of_collections_dequeue_page() {
		ICD=new Implimenationusingcollectionsdequeue();
	    ICD.clickTryHere();
	}

	@Then("user will be navigated to the Try Editor page")
	public void user_will_be_navigated_to_the_try_editor_page(){
	    TE=new TryEditor();
	    String title = driver.getTitle();
 		//Assert.assertEquals("Assessment", title);
 		
	    
	}

	@When("user will give the input and click run")
	public void user_will_give_the_input_and_click_run() {
	    TE.clickTryEditor();
	    TE.clickbtnrun();
	}

	@Then("user will display output")
	public void user_will_display_output() {
	   TE.displayoutputtxt();
	}

	@Then("user will navigate to Queue page")
	public void user_will_navigate_to_queue_page()  {
	    QP=new QueuePage();
         driver.navigate().back();
	    driver.navigate().back();
	    
	}

	@Given("user is on Queue page")
	public void user_is_on_queue_page()  {
		QP=new QueuePage();
	
		 String title = driver.getTitle();
	 		Assert.assertEquals("Queue", title);
 		
	    
	}

	@When("user will click on Implementation using Array")
	public void user_will_click_on_implementation_using_array() {
		QP=new QueuePage();
		QP.clickImplimentationusingArray();
	}

	@Then("user will be navigated to the Implementation Using Array page")
	public void user_will_be_navigated_to_the_implementation_using_array_page() {
		IA=new ImplementationusingArray();
		String title = driver.getTitle();
		System.out.println(title);
 		Assert.assertEquals("Implementation using array", title);
 		
		
	}

	@When("click on Try here button")
	public void click_on_try_here_button() {
		IA=new ImplementationusingArray();
		IA.clickTryHere();
	}
	   
	

	@Then("user is navigated to the Try Editor page")
	public void user_is_navigated_to_the_try_editor_page() throws InterruptedException {
	    TE=new TryEditor();
	    String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Assessment", title);
		Thread.sleep(3000);
	    
	}

	@When("user give input data and click run")
	public void user_give_input_data_and_click_run() {
	    TE=new TryEditor();
	    TE.clickTryEditor();
	    TE.clickbtnrun();
	}

	@Then("user will receive output and display the output")
	public void user_will_receive_output_and_display_the_output() {
	    TE=new TryEditor();
	    TE.displayoutputtxt();
	}

	@Then("user navigates back to Queue page")
	public void user_navigates_back_to_queue_page() {
	    driver.navigate().back();
	    driver.navigate().back();
	}

	@Given("user is now on Queue page")
	public void user_is_now_on_queue_page() throws InterruptedException {
		 String title = driver.getTitle();
			System.out.println(title);
 		Assert.assertEquals("Queue", title);
 		Thread.sleep(3000);
	}
	    
	

	@When("user will click on Queue Operations")
	public void user_will_click_on_queue_operations() {
	    QP=new QueuePage();
	    QP.clicklnkQueueOperations();
	    String title = driver.getTitle();
	    System.out.println(title);
 		//Assert.assertEquals("Queue", title);
 		
	    
	}

	@Then("user is navigated to Queue Operations page")
	public void user_is_navigated_to_queue_operations_page() throws InterruptedException {
	   QO=new QueueOperations();
	   String title = driver.getTitle();
		System.out.println(title);
	Assert.assertEquals("Queue Operations", title);
	Thread.sleep(3000);
	   
	}

	@When("user will click on Try here button on Queue Opearations page")
	public void user_will_click_on_try_here_button_on_queue_opearations_page() {
	    QO=new QueueOperations();
	    QO.clickTryHere();
	}

	@Then("user will be on Tryeditor page")
	public void user_will_be_on_tryeditor_page() throws InterruptedException {
	    TE=new TryEditor();
	    String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Assessment", title);
		Thread.sleep(3000);
	}

	@Then("user will send input and clicks run")
	public void user_will_send_input_and_clicks_run() {
	    TE=new TryEditor();
	    TE.clickTryEditor();
	    TE.clickbtnrun();
	}

	@Then("user will get the output and displayed on console")
	public void user_will_get_the_output_and_displayed_on_console() {
	    TE=new TryEditor();
	    TE.displayoutputtxt();
	}

	@Then("user will be navigated to the Home page")
	public void user_will_be_navigated_to_the_home_page() {
	    driver.navigate().back();
	    driver.navigate().back();
	    driver.navigate().back();
	}

	
	
	
	
	@Given("user is on home page")
	public void user_is_on_home_page() {
	    ds.ValidateHomePage();
	}

	@When("user clicks on DataStructuresIntro get started button")
	public void user_clicks_on_data_structures_intro_get_started_button() {
	    ds.clickDataStructuresIntro();
	}

	@Then("user is on DataStructureIntro page")
	public void user_is_on_data_structure_intro_page() {
	   ds.validateDataStucturesIntroPage();
	}

	@And("user clicks on Time Complexity button")
	public void user_clicks_on_time_complexity_button() {
	    ds.timeComplexity();
	}

	@Then("user is on Time complexity page")
	public void user_is_on_time_complexity_page() {
	    ds.validateTimeComplexity();
	}

	@And("user clicks on Try here button")
	public void user_clicks_on_try_here_button() {
	    ds.tryHere();
	}

	@Then("user is on Editor page")
	public void user_is_on_editor_page() {
	     ds.validateTryHere();
	}

	@And("user enters python code and clicks Run button and gets output")
	public void user_enters_python_code_and_clicks_run_button_and_gets_output() {
	    ds.tryEditor();
	}

	@Then("user navigates back to HomePage from Editor")
	public void user_navigates_back_to_HomePage_from_Editor() {
	    ds.backtoHome_from_editor();
	}
	
	@And("user clicks on Practice Questions button")
	public void user_clicks_on_practice_questions_button() {
	    ds.practiceQuestions();
	}

	@Then("user is on Practice Questions page")
	public void user_is_on_practice_questions_page() {
	    ds.validatePracticeQuestions();
	}
	
	@Then("user navigates back to HomePage from PracticeQuestions")
	public void user_navigates_back_to_home_page_from_practice_questions() {
		ds.backtoHome_from_editor();
	}

	@When("user clicks on Array get started button")
	public void user_clicks_on_array_get_started_button() {
	    ds.clickArray();
	}
	
	@Then("user is on Array page")
	public void user_is_on_array_page() {
	    ds.validateArrayPage();
	}
	
	@And("user clicks on Arrays in Python button")
	public void user_clicks_on_arrays_in_python_button() {
	    ds.arraysInPython();
	}
	
	@Then("user is on Arrays in Python page")
	public void user_is_on_arrays_in_python_page() {
	    ds.validateArraysInPython();
	}
	
	@And("user clicks on Arrays using List button")
	public void user_clicks_on_arrays_using_list_button() {
	    ds.arraysUsingList();
	}
	
	@Then("user is on Arrays using List page")
	public void user_is_on_arrays_using_list_page() {
	    ds.validateArraysUsingList();
	}
	
	@Then("user clicks on Basic Operations in List button")
	public void user_clicks_on_basic_operations_in_list_button() {
	    ds.basicOperationsInLists();
	}

	@Then("user is on Basic Operations in List page")
	public void user_is_on_basic_operations_in_list_page() {
	    ds.validateBasicOperationsInLists();
	}
	
	@Then("user clicks on Applications of Array button")
	public void user_clicks_on_applications_of_array_button() {
	   ds.applicationsOfArray();
	}

	@Then("user is on Applications of Array page")
	public void user_is_on_applications_of_array_page() {
	    ds.validateApplicationsOfArray();
	}

	//Inside Practice Questions Page code in Arrays
	@Then("user clicks on Search the Array button in Practice")
	public void user_clicks_on_search_the_array_button_in_practice() {
	    ds.searchTheArray();
	}

	@Then("user is on question one page in Practice")
	public void user_is_on_question_one_page_in_practice() {
	    ds.validateQuestionOne();
	}

	@Then("user enters python code and clicks Submit button and gets output")
	public void user_enters_python_code_and_clicks_submit_button_and_gets_output() {
	    ds.questionOne();
	}

	@Then("user navigates back to Practice page")
	public void user_navigates_back_to_practice_page() {
	    ds.backtoPracticeQuestion_from_QuestionPage();
	}

	@Then("user clicks on Max Consecutive Ones button in Practice")
	public void user_clicks_on_max_consecutive_ones_button_in_practice() {
	    ds.maxConsecutiveOnes();
	}

	@Then("user is on question two page in Practice")
	public void user_is_on_question_two_page_in_practice() {
	    ds.validateQuestionTwo();
	}
	
	@Then("user clicks on Find Numbers with Even Number of Digits button in Practice")
	public void user_clicks_on_find_numbers_with_even_number_of_digits_button_in_practice() {
	    ds.findNumbersWithEvenNumberOfDigits();
	}
	
	@Then("user is on question three page in Practice")
	public void user_is_on_question_three_page_in_practice() {
	    ds.validateQuestionThree();
	}

	@Then("user clicks on Squares of a Sorted Array button in Practice")
	public void user_clicks_on_squares_of_a_sorted_array_button_in_practice() {
	    ds.squaresOfASortedArray();
	}

	@Then("user is on question four page in Practice")
	public void user_is_on_question_four_page_in_practice() {
	    ds.validateQuestionFour();
	}
	
	
	
///////////////////////////////////////////////////////////////////////graph and tree SD


	@When("user clicks on Graph Get Started button")
	public void user_clicks_on_graph_get_started_button() {
		ds.clickGraph();
	}


	@Then("user should navigate to Graph page")
	public void user_should_navigate_to_graph_page() {
		ds.ValidateGraphPage();	
	}


	@And("user clikcs on Graph")
	public void user_clikcs_on_graph() {
		ds.GraphLink();
	}


	@Then("clicks on Try here button")
	public void clicks_on_try_here_button() {
		ds.TryHereBtn();
	}


	@Then("user enter input")
	public void user_enter_input() {
		ds.InputData();
	}


	@And("click on Run")
	public void click_on_run() {
		ds.RunBtn();	
	}

	@Then("it should display entered input")
	public void Then_it_should_display_entered_input() {
		ds.OutputText();
	}
	
	@Then("user go back to Topic Covered page")
	public void user_go_back_to_Topic_Covered_page() {
	ds.returnBacktwice();
	}
	
	 @Given("user is on graph Topic covered page")
	 public void user_is_on_graph_Topic_covered_page() {
		 ds.ValidateGraphPage();	 
	 }
	 
	 
	 @When("user clikcs on Graph Representations")
	 public void user_clikcs_on_Graph_Representations() {
		ds.GraphRepresntbtn(); 
		 
	 }


	@Then("user navigate back to Home Page")
	public void user_navigate_back_to_home_page() {
		ds.backtoHome_from_editor();

		//ds.ValidateHomePage();
	}

	@Then("user clicks on Tree GetStarted button")
	public void user_clicks_on_tree_get_started_button() {
		ds.clickTree();
	}


	@Then("user should navigate to Tree page")
	public void user_should_navigate_to_tree_page() {
		ds.TreePageValidation();
	}


	@And("user clikcs on overview of Trees")
	public void user_clikcs_on_overview_of_trees() {
		ds.OverviewOfTreeBtn();
	}
	
	@Given("user is on Tree Topic covered page")
	public void user_is_on_tree_topic_covered_page() {
		ds.TreePageValidation();
	}
	
	
	@When("user clikcs on Terminologies")
	public void user_clikcs_on_terminologies() {
		ds.Terminologiesbtn();
	}
	
	@When("user clikcs on Types of Trees")
	public void user_clikcs_on_types_of_trees() {
		ds.TypeOfTreebtn();
	}
	
	@When("user clikcs on Tree Traversals")
	public void user_clikcs_on_tree_traversals() {
		ds.TreeTraversalsbtn();
	}
	
	
	@When("user clikcs on Traversals-Illustration")
	public void user_clikcs_on_traversals_illustration() {
		ds.TraversalsIllustrationbtn();
	}
	
	
	@When("user clikcs on Binary Trees")
	public void user_clikcs_on_binary_trees() {
		ds.BinaryTreesbtn();
	}
	
	
	@When("user clikcs on Types of Binary Trees")
	public void user_clikcs_on_types_of_binary_trees() {
		ds.TYpesOfBinarybtn();
	}
	
	@When("user clikcs on Implementation in Python")
	public void user_clikcs_on_implementation_in_python() {
		ds.ImplementationPythonbtn();
	}
	
	
	@When("user clikcs on Binary Tree Traversals")
	public void user_clikcs_on_binary_tree_traversals() {
		ds.BinaryTreeTraversalsbtn();
	}
	
	
	@When("user clikcs on Implementation of Binary Trees")
	public void user_clikcs_on_implementation_of_binary_trees() {
		ds.ImplementationOfBinarybtn();
	}
	
	
	@When("user clikcs on Applications of Binary trees")
	public void user_clikcs_on_applications_of_binary_trees() {
		ds.ApplicationsOfBinarybtn();
	}
	
	
	@When("user clikcs on Binary Search Trees")
	public void user_clikcs_on_binary_search_trees() {
		ds.BinarySearchbtn();
	}
	
	
	@When("user clikcs on Implementation Of BST")
	public void user_clikcs_on_implementation_of_bst() {
		ds.ImplementationOfBSTbtn();		
	}

//	
//	@And("clicks on SignOut btn")
//	public void clicks_on_SignOut_btn() {
//		ds.clickSignOut();
//		driver.close();
//
//	}
	
	
	
	
	// Linked List 
	
	
	@Given("user is on the home page")
	public void user_is_on_the_home_page() {
		HP.getHomePageTitle() ;
	}

	@When("user clicks on GetStarted button for LinkedList")
	public void user_clicks_on_GetStarted_button_for_LinkedList() {
		HP.clickGetStartedLinkedList();
	}

	@Then("user should navigate to LinkedList page")
	public void user_should_navigate_to_LinkedList_page() {
		LLMPPF= new LinkedListModPagePF();
		LLMPPF.isOnLinkedListPage();
	}

	@When("user clicks on Introduction link")
	public void user_clicks_on_Introduction_link() {
		LLMPPF= new LinkedListModPagePF();
		LLMPPF.IntroductionLinkClick();
	}

	@Then("user should navigate to Linkedlist page")
	public void user_should_navigate_to_Linkedlist_page() {
		LLMPPF= new LinkedListModPagePF();
		LLMPPF.IntroductionPageValidation();
	}

	@When("user clicks on Try Here button")
	public void user_clicks_on_Try_Here_button() {
		LLMPPF= new LinkedListModPagePF();
		LLMPPF.TryHereBtnClick();
	}

	@Then("user should navigate to tryEditor page")
	public void user_should_navigate_tryEditor_page() {
		LLMPPF= new LinkedListModPagePF();
		LLMPPF.TryEditorValidation();
	}

	@When("user enters input")
	public void user_enters_input() {
		LLMPPF= new LinkedListModPagePF();
		LLMPPF.inputData();
	}

	@And("clicks on Run")
	public void clicks_on_Run() {
		LLMPPF= new LinkedListModPagePF();
		LLMPPF.ClickRun();
	}

	@Then("user should see result of code")
	public void user_should_see_result_of_code() {
		LLMPPF= new LinkedListModPagePF();
		LLMPPF.viewCodeRestult();
	}

	@When("user clicks on go back button")
	public void user_clicks_on_go_back_button() {
		LLMPPF= new LinkedListModPagePF();
		LLMPPF.NavigateBackOnce();
	}

	@Then("user should navigate to Linkedlist Subpage")
	public void user_should_navigate_to_LinkedList_Subpage() {
		LLMPPF= new LinkedListModPagePF();
		LLMPPF.isOnLinkedListSubPage();
	}

	@When("user clicks on Creating a LinkedList link")
	public void user_clicks_on_Creating_a_LinkedList_link() {
		LLMPPF= new LinkedListModPagePF();
		LLMPPF.CreateLinkListClick();
	}

	@When("user clicks on Types of Linked List link")
	public void user_clicks_on_Types_of_Linked_List_link() {
		LLMPPF= new LinkedListModPagePF();
		LLMPPF.TypesOfLinkListClick();
	}

	@When("user clicks on Implement Linked List in Python link")
	public void user_clicks_on_Implement_Linked_List_in_Python_link() {
		LLMPPF= new LinkedListModPagePF();
		LLMPPF.ImpleLLInPythonClick();
	}

	@When("user clicks on Traversal link")
	public void user_clicks_on_Traversal_link() {
		LLMPPF= new LinkedListModPagePF();
		LLMPPF.TraversalLinkClick();
	}

	@When("user clicks on Insertion link")
	public void user_clicks_on_Insertion_link() {
		LLMPPF= new LinkedListModPagePF();
		LLMPPF.InsertionLinkClick();
	}

	@When("user clicks on Deletion link")
	public void user_clicks_on_Deletion_link() {
		LLMPPF= new LinkedListModPagePF();
		LLMPPF.DeletionLinkClick();
	}

	@When("user clicks on Practice Questions link")
	public void user_clicks_on_Practice_Questions_link() {
		LLMPPF= new LinkedListModPagePF();
		LLMPPF.PracticeQsLinkClick();
	}

	@Then("user should navigate to Practice Questions page")
	public void user_should_navigate_to_Practice_Questions_page() {
		LLMPPF= new LinkedListModPagePF();
		LLMPPF.PracticeQsPageValidate();
	}

	@When("user clicks NumpyNinja link")
	public void user_clicks_NumpyNinja_link() {
		LLMPPF= new LinkedListModPagePF();
		LLMPPF.NumpyNinjaLinkClick();
	}

//	@And("user clicks GetStarted  button")
//	public void user_clicks_GetStarted_button() {
//		gspg.GetStartedBtnClick();
//	}

	@Then("user should navigate to home page")
	public void user_should_navigate_to_home_page() {
		//HP.getHomePageTitle();
		driver.navigate().back();
		driver.navigate().back();
		driver.navigate().back();
	}

//	@After()
//	public void closeBrowser() {
//		driver.quit();
//	}
	
	@Then("user will click on Signout button")
	public void user_will_click_on_signout_button() {
	    HP=new HomePage();
	    HP.clickSignout();
	}
	

	
	
	
	
}
	
	
	
	
	
