package StepDefinitions;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;

import Driver.DriverFactory;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;

public class Hooks extends DriverFactory{
	
	
	public ExtentReports extent;
	public ExtentTest extentTest;
	
	
	
	
	@After(order=1)
	public void takeScreenshotonFailure(Scenario scenario) {
		
		if(scenario.isFailed()) {
			
			TakesScreenshot ts= (TakesScreenshot)driver;
			byte[] src = ts.getScreenshotAs(OutputType.BYTES);
			scenario.attach(src, "image/png", "screenshot");
		}
	}
	
	@After(order=0)
	public  void tearDown() {
		
		
		driver.quit();
	}
	
	
	
	

}
