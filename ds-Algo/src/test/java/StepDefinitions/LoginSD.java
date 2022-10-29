package StepDefinitions;

import Driver.DriverFactory;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pageObjects.GetStarted;
import pageObjects.HomePage;
import pageObjects.LoginPage;
import pageObjects.RegisterPage;
import pageObjects.StackPage;
import pageObjects.TryEditor;

 
	public class LoginSD  extends DriverFactory{
		
    
		LoginPage LP;
		RegisterPage RP;
		GetStarted GP;
		HomePage HP;
		StackPage SP;
		TryEditor TE;
			
			@Before
			public void setup() {
			
			Initialization();
			}	
				@Given("user will be on GetStarted page")
			public void user_will_be_on_get_started_page() {
					    GP= new GetStarted();
					    HP= new HomePage();
						RP= new RegisterPage();
						LP=new LoginPage();
						TE=new TryEditor();
				driver.get("https://dsportalapp.herokuapp.com");
				
			}
				
				@When("user clicks on GetStarted")
				public void user_clicks_on_getstarted() {
				        GP.clickGetStarted();
			
				}
			
			    @Then("User navigated to the Home Page")
				public void user_navigated_to_the_home_page() {
				            // HP.getHomePageTitle();
			
					}
	
	
                  @When("user is now on Home page")
                 public void user_is_now_on_home_page() {
                	 
                 // HP.getHomePageTitle();
}

           
                  
@When("user clicks on the Signin")
public void user_clicks_on_the_signin() {
//	HP.getHomePageTitle();
	HP=new HomePage();
	HP.clickSignin();  	
    }
		
	@Given("user is on login page {string}")
	public void user_is_on_login_page(String url) {
		LP=new LoginPage();
	    
	    LP.alertmsghandle();
	}

	@When("user gets the title of the page")
	public void user_gets_the_title_of_the_page() throws InterruptedException {
	   // LP.getLoginPageTitle();
	    Thread.sleep(3000);
	}
    
	@When ("^user enters Username as (.*) and Password as (.*)$")
	public void user_enters_Username_as_uname_and_Password_as_password(String uname,String password) {
		LP=new LoginPage();
		LP.setUsername(uname);
		LP.setPassword(password);
	}
    @And ("clicks on login button")
    public void clicks_on_login_button() {
    	LP=new LoginPage();
    	LP.clickLogin();
    	
    }
    @Then ("user will be logged In")
    public void user_will_be_logged_In() {
    	HP=new HomePage();
         //HP.getHomePageTitle();
    	
    }

	  }
	  
 
   
	
