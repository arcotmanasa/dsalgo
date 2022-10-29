package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import Driver.DriverFactory;

public class ApplicationsPage extends DriverFactory{
	
	@FindBy(xpath="//a[@class='btn btn-info']")
	@CacheLookup
	WebElement btnTryHere;
	
	
	@FindBy(xpath="//*[@id='content']/li[1]/a")
	@CacheLookup
	WebElement lnkOperationsinStack;
	
	
	
	@FindBy(xpath="//*[@id='content']/li[2]/a")
	@CacheLookup
	WebElement lnkImplimentation;
	
	
	@FindBy(xpath="//*[@id='content']/li[2]/a")
	@CacheLookup
	WebElement lnkApplication;
	
	
	@FindBy(xpath="//*[@id=\"content\"]/a")
	@CacheLookup
	WebElement lnkPractice;
	
	 public ApplicationsPage() {
			
		    super();
			PageFactory.initElements(driver,this);
	
	 }
	public void clickbtnTryHere() {
		
		btnTryHere.click();
	}
	
	public void clicklnkOperationsinStack() {
		
		lnkOperationsinStack.click();
	}

	public void clickApplication() {
		
		lnkApplication.click();
		
	}
	public void clickPractice() {
		
		lnkPractice.click();
	}
	public void clickImplimentation() {
		lnkImplimentation.click();
	}
	
}

