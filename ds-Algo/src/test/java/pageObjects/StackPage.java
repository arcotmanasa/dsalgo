package pageObjects;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import Driver.DriverFactory;

public class StackPage extends DriverFactory {
	
	
	@FindBy(xpath="/html/body/div[2]/ul[1]/a")
	@CacheLookup
	WebElement  lnkOperationsinStack;
	
	
	@FindBy(xpath="//a[@href='implementation']")
	@CacheLookup
	WebElement lnkImplementation;
	
	
	@FindBy(xpath="//a[@href='stack-applications']")
	@CacheLookup
	WebElement lnkApplication;
	
	
	@FindBy(xpath="//*[@class='btn btn-info']")
	@CacheLookup
	WebElement   clickbtnTryhere;
	
	
    public StackPage () {
		
		PageFactory.initElements(driver,this);
	
	}
	
   
	
	public void clickOperationsinStack() {
		 lnkOperationsinStack.click();
		
	}
	
	public void clickImplementation() {
		lnkImplementation.click();
		
	}
	public void clickApplication() {
		
		lnkApplication.click();
	}

	
	

}
