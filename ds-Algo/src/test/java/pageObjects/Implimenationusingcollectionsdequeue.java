package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import Driver.DriverFactory;

public class Implimenationusingcollectionsdequeue extends DriverFactory{
	

	
	
	@FindBy(xpath="//*[@id=\"content\"]/li[2]/a")
	WebElement lnkImplementationusingcollectionsdequeue;
	
	@FindBy(xpath="//*[@id=\"content\"]/li[3]/a")
	WebElement lnkImplementationusingArray;
	
	@FindBy(xpath="//*[@id=\"content\"]/li[4]/a")
	WebElement lnkQueueOperations;
	
	@FindBy(xpath="//*[@id=\"content\"]/a")
	WebElement lnkPracticeQuestions;
	
	
	@FindBy(xpath="/html/body/div[2]/div/div[2]/a")
	WebElement btnTryHere;
	
	public Implimenationusingcollectionsdequeue() {
		
		PageFactory.initElements(driver,this);
	
	}
	
	
	public void clickImplimenationusingcollectionsdequeue() {
		
		lnkImplementationusingcollectionsdequeue.click();
	}

	
	
	public void clicklnkImplimentationusingcollectionsdequeue() {
		lnkImplementationusingcollectionsdequeue.click();
	}
	
	
	public void clickImplimentationusingArray() {
		
		lnkImplementationusingArray.click();
	}
	
	public void clickQueueOperations() {
		lnkQueueOperations.click();
		
	}
	public void clickPracticeQuestions() {
		
		lnkPracticeQuestions.click();
	}
	public void clickTryHere() {
		
		btnTryHere.click();
	}
	
}

