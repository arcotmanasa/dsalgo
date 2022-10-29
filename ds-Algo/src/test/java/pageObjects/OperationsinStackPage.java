package pageObjects;


import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import Driver.DriverFactory;

public class OperationsinStackPage extends DriverFactory{
	
	
	@FindBy(xpath="//a[@class='btn btn-info']")
	@CacheLookup
	WebElement btnTryHere;
	
	
	
	
	
	@FindBy(xpath="//*[@id='content']/li[1]/a")
	@CacheLookup
	WebElement lnkOperationsinStack;
	
	
	
	@FindBy(xpath="//a[@href='implementation']")
	@CacheLookup
	WebElement lnkImplementation;
	
	
	@FindBy(xpath="//a[@href='stack-applications']")
	@CacheLookup
	WebElement lnkApplication;
	
	
	@FindBy(xpath="//*[@id=\"content\"]/a")
	@CacheLookup
	WebElement lnkPractice;
	
	public OperationsinStackPage() {
		
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
	public void clickImplementation() {
		lnkImplementation.click();
	}
	
}


