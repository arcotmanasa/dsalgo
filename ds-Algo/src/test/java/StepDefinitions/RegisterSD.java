package StepDefinitions;

import Driver.DriverFactory;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pageObjects.GetStarted;
import pageObjects.HomePage;
import pageObjects.LoginPage;
import pageObjects.RegisterPage;

public class RegisterSD  extends DriverFactory{
	

LoginPage LP;
RegisterPage RP;
GetStarted GP;
HomePage HP;
	
	
	@Before
	public void setup() {
	
	Initialization();
	}	
		@Given("user opens the GetStarted page")
	public void user_opens_the_get_started_page() {
			    GP= new GetStarted();
			    HP= new HomePage();
				RP= new RegisterPage();
		driver.get("https://dsportalapp.herokuapp.com");
		
	}
		
		// Register page 

		@When("user clicks on GetStarted button")
		public void user_clicks_on_get_started_button() {
	        GP.clickGetStarted();

		}

		@Then("User is on the Home Page")
		public void user_is_on_the_home_page() {
	             HP.getHomePageTitle();

		}

		@When("user will click on Register link")
		public void user_will_click_on_register_link() {
		    RP.clickRegister();
		}

		@Then("user will be navigated to the Register page")
		public void user_will_be_navigated_to_the_register_page() {
	            RP.getRegisterPageTitle();

		}

		@When("^Enter the username (.*) and (.*)  and (.*)$")
		public void enter_the_username_uname_and_password_and_confpassword(String uname,String password,String confpassword) {
	            RP.setUsername(uname);
	            RP.setPassword(password);
	           RP.setconfpassword(confpassword);

		}

		@When("Click on register button")
		public void click_on_register_button() {
		    RP.clickbtnRegister();
		}

		@Then("The user will navigate to the Home page")
		public void the_user_will_navigate_to_the_Home_page() {
	    RP. alertmsghandle();
	    
	}
	
		
} 
		    
			
		