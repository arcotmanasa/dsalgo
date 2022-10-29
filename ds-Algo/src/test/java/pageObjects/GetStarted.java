package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import Driver.DriverFactory;

public class GetStarted extends DriverFactory{

	
	public GetStarted() {
	PageFactory.initElements(driver,this);
	}
	
	@FindBy(xpath="/html/body/div[1]/div/div/a/button")
	@CacheLookup
	WebElement btnGetStarted;	
	
	
	public void clickGetStarted() {
        btnGetStarted.click();
        
	}
	
	
	
	
	
	
	
	
}