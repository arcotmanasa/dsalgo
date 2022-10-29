package pageObjects;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import Driver.DriverFactory;

public class TryEditor extends DriverFactory {
	
	
	Actions action = new Actions(driver);
	
	@FindBy (xpath = "//*[@class=' CodeMirror-line ']") WebElement input_data ;
	@FindBy (xpath = "//*[@type='button']") WebElement run_btn ;
	@FindBy (id = "output") WebElement Output_txt;

   
	
	
	
	 public TryEditor() {
			
			PageFactory.initElements(driver,this);
	
	 }	
	 

			
	 public void clickTryEditor()
			 
	{	
				 
	 action.click(input_data).sendKeys("print('Hello Everyone')").perform();	 	 


	}	
					
	public void clickbtnrun() {	
		
		
				
	run_btn.click();
					
		}
		 
		 
		 
	 
 public void displayoutputtxt() {
	 
	
	System.out.println("User entered: " +Output_txt.getText());
	

 }
	
}
	
	

