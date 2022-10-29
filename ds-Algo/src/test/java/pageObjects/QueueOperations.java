package pageObjects;


	
	import org.openqa.selenium.WebElement;
	import org.openqa.selenium.support.CacheLookup;
	import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import Driver.DriverFactory;

	public class QueueOperations extends DriverFactory{

		

		@FindBy(xpath="/html/body/div[2]/ul[1]/a")
		@CacheLookup
		WebElement lnkImplimentationofQueueinPython;
		
		
		@FindBy(xpath="/html/body/div[2]/ul[2]/a")
		@CacheLookup
		WebElement lnkImplementationsusingcollectionofDequeue;
		
		
		@FindBy(xpath="/html/body/div[2]/ul[3]/a")
		@CacheLookup
		WebElement lnkImplimentationusingArray;
		
		@FindBy(xpath="/html/body/div[2]/ul[4]/a")
		@CacheLookup
		WebElement lnkQueueOperations;
		
		@FindBy(xpath="/html/body/div[2]/div/div[2]/a")
		@CacheLookup
		WebElement btnTryHere;
		
		
public QueueOperations() {
			
			PageFactory.initElements(driver,this);
		
		}
		




		public void clickImplimentationofQueueinPython() {
			
			lnkImplimentationofQueueinPython.click();
		}
		
		public void clickImplementationsusingcollectionofDequeue() {
			lnkImplementationsusingcollectionofDequeue.click();
		}

		public void clickImplimentationusingArray() {
			lnkImplimentationusingArray.click();
		}
		
		public void clicklnkQueueOperations() {
			lnkQueueOperations.click();
		}
		public void clickTryHere() {
			
			btnTryHere.click();
		}
		
		
		
		
		
		
		
		
		
		
		
		
	}


