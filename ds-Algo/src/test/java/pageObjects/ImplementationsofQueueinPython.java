package pageObjects;


	
	

	import org.openqa.selenium.WebElement;
	import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import Driver.DriverFactory;

	public class ImplementationsofQueueinPython extends DriverFactory {

		
		
		@FindBy(xpath="//*[@id=\"content\"]/li[1]/a")
		WebElement lnkImplementationofQueueinPython;
		
		@FindBy(xpath="//*[@id=\"content\"]/li[2]/a")
		WebElement lnkImplimentationusingcollectionsdequeue;
		
		@FindBy(xpath="//*[@id=\"content\"]/li[3]/a")
		WebElement lnkImplimentationusingArray;
		
		@FindBy(xpath="//*[@id=\"content\"]/li[4]/a")
		WebElement lnkQueueOperations;
		
		@FindBy(xpath="//*[@id=\"content\"]/a")
		WebElement lnkPracticeQuestions;
		
		
		@FindBy(xpath="/html/body/div[2]/div/div[2]/a")
		WebElement btnTryHere;
		
		public ImplementationsofQueueinPython() {
			
			PageFactory.initElements(driver,this);
		
		}
		
		
		public void clickImplementationofQueueinPython() {
			lnkImplementationofQueueinPython.click();
			
		}
		
		public void clicklnkImplimentationusingcollectionsdequeue() {
			lnkImplimentationusingcollectionsdequeue.click();
		}
		
		
		public void clickImplimentationusingArray() {
			
			lnkImplimentationusingArray.click();
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



