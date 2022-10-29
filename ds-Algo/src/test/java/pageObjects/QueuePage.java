package pageObjects;



import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import Driver.DriverFactory;

	public class QueuePage extends DriverFactory {
		
		
		@FindBy(xpath="//a[@href='implementation-lists']")
		@CacheLookup
		WebElement lnkImplimentationofQueueinPython;
		
		
		@FindBy(xpath="//a[@href='implementation-collections']")
		@CacheLookup
		WebElement lnkImplementationsusingcollectionDequeue;
		
		
		@FindBy(xpath="//a[@href='Implementation-array']")
		@CacheLookup
		WebElement lnkImplimentationusingArray;
		
		@FindBy(xpath="//a[@href='QueueOp']")
		@CacheLookup
		WebElement lnkQueueOperations;
		
		public QueuePage () {
			
			PageFactory.initElements(driver,this);
		
		}
		
		
		public void clickImplimentationofQueueinPython() {
			
			lnkImplimentationofQueueinPython.click();
		}
		
		public void clickImplementationsusingcollectionDequeue() {
			lnkImplementationsusingcollectionDequeue.click();
		}

		public void clickImplimentationusingArray() {
			lnkImplimentationusingArray.click();
		}
		
		public void clicklnkQueueOperations() {
			lnkQueueOperations.click();
		}

		
	}



