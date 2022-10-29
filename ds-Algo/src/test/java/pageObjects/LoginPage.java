package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.junit.Assert;

import Driver.DriverFactory;

public class LoginPage extends DriverFactory{
	
	LoginPage LP;
	HomePage HP;
	
	
	
	@FindBy(id="id_username")
	@CacheLookup
	WebElement txtUsername;



	@FindBy(id="id_password")
	@CacheLookup
	WebElement txtPassword;

	
	@FindBy(xpath="//input[@value='Login']")
	@CacheLookup
	WebElement btnLogin;
	
	
	
	@FindBy(xpath="//a[normalize-space()='Register!']")
	@CacheLookup
	WebElement lnkRegister;
	
	
	@FindBy(xpath="//div[@id='navbarCollapse']/div[2]/ul/a[3]")
	@CacheLookup
	WebElement lnkSignout;
	
	@FindBy(xpath="/html/body/div[3]")
	@CacheLookup
	By alertmsg;
	
	public LoginPage() {
	PageFactory.initElements(driver,this);
	}
	
	public void LoginPageValidate() {
		Assert.assertEquals(btnLogin.isDisplayed(), true);
	}
//	
//	public LoginPage(WebDriver driver) {
//		this.driver=driver;
//	
//	}
	public void getLoginPageTitle() {
		String title = driver.getTitle();
		Assert.assertEquals("Login", title);
		System.out.println("User is on " +title+ " page " );
		
	
	}
        
	
	public void setUsername(String uname) {
		
		txtUsername.sendKeys(uname);
		
	}
	
	public void setPassword(String password) {
		
		txtPassword.sendKeys(password);
	}
	
	
	public void clickLogin() {
			
		btnLogin.click();
	}
	
	public void clickRegister() {
		
		lnkRegister.click();
	}
	
	
	public void clickSignout() {
		
		lnkSignout.click();
		
	}
	
	
	public void alertmsghandle() {
		
	LP=new LoginPage();
	String msg= driver.findElement(alertmsg).getText();
	
	
	if(msg.contains("Invalid Username and Password")) {
		
		System.out.println(msg);
}
		
else if (msg.contains("User logged In Successfully")) {
		
		System.out.println(msg);
		HP.getHomePageTitle();
	}

	
	
//	public void  handlealertwithunameorpwd() {
//
//	driver.findElement(loginClickBtn).click();
//	// System.out.println("error: " +
//	// driver.findElement(passwordTxt).getAttribute("validationMessage"));
//    }
//	
//	
	
}

	





}
