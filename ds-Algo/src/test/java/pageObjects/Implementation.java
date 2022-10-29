package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import Driver.DriverFactory;

public class Implementation extends DriverFactory {
	
	@FindBy(xpath="//*[@id=\"content\"]/li[1]/a")
	@CacheLookup
	WebElement lnkOperationsinStack;
	
	
	@FindBy(xpath="//*[@id=\"content\"]/li[2]/a")
	@CacheLookup
	WebElement lnkImplementation;
	
	@FindBy(xpath="//*[@id=\"content\"]/li[3]/a")
	@CacheLookup
	WebElement lnkApplications;
	
	@FindBy(xpath="//*[@id=\"content\"]/a")
	@CacheLookup
	WebElement lnkPractice;
	
	@FindBy(xpath="//a[@class='btn btn-info']")
	@CacheLookup
	WebElement btnTryHere;
	
	 public Implementation () {
			
		
			PageFactory.initElements(driver,this);
	 }
	public void clickOperationsinStack() {
		
		lnkOperationsinStack.click();
	}
	
public void clickImplementation() {
		
		lnkImplementation.click();
	}

public void clickApplications() {
	
	lnkApplications.click();
}
	
	public void clickPractice() {
		
		lnkPractice.click();
	}
	
	public void clickTryHere() {
		
		btnTryHere.click();
	}
	
	
	
}

