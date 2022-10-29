package Driver;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.time.Duration;
import java.util.Properties;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import pageObjects.LoggerHelper;

public class DriverFactory {
	
	public static WebDriver driver;
	public static Properties prop;
	
	public DriverFactory() {
		
		
		try {
			prop = new Properties();
			FileInputStream fis = new FileInputStream("C:\\Users\\Arivoli\\eclipse-workspace\\ds-Algo\\src\\test\\resources\\config\\config.properties");
				prop.load(fis);
			} catch (FileNotFoundException e) {
				e.printStackTrace();
			} catch (IOException e) {
			e.printStackTrace();
		}
	
	}
	
	public static void Initialization() {
		
		Logger log = LoggerHelper.getLogger(LoggerHelper.class);
		
		String browserName = prop.getProperty("browser");
		
		if(browserName.equals("chrome")) {
			
			System.setProperty("webdriver.chrome.driver","/Users/Arivoli/eclipse-workspace/ds-Algo/Drivers/chromedriver.exe");
			driver=new ChromeDriver();
			log.info("chrome browser is initialized");
		}
		
		else if(browserName.equals("ff")) {
			
			System.setProperty("webdriver.gecko.driver","/Users/Arivoli/eclipse-workspace/ds-Algo/Drivers/Firefox Installer.exe");
			driver=new FirefoxDriver();
			log.info("Firefox browser is initialized");
		}
		
		else if (browserName.equals("edge")) {
			
			System.setProperty("webdriver.edge.driver","/Users/Arivoli/eclipse-workspace/ds-Algo/Drivers/MicrosoftEdgeSetup.exe");
			driver=new EdgeDriver();
			log.info("Edge browser is initialized");
		}
		
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
		driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(20));
		driver.manage().window().maximize();
		
		driver.get(prop.getProperty("url"));
	}
	
	

}

