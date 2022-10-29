package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.support.PageFactory;
import org.junit.Assert;

import Driver.DriverFactory;

public class RegisterPage extends DriverFactory{
	
	HomePage HP;


public By btnGetStarted = By.xpath("/html/body/div[1]/div/div/a/button");
public By lnkRegister=By.xpath("//*[contains(text(),' Register ')]");
public By txtUsername=By.id("id_username");
public By txtPassword=By.id("id_password1");
public By txtconfpassword=By.id("id_password2");
public By btnRegister=By.xpath("/html/body/div[2]/div/div[2]/form/input[5]");
public By Alertmsg=By.xpath("//*[@class='alert alert-primary']");


//Constructor of page class

public RegisterPage() {
	
PageFactory.initElements(driver,this);
}

////page actions features 


public void getRegisterPageTitle() {
	
	String title = driver.getTitle();
	Assert.assertEquals("Registration", title);
	System.out.println("User is on " +title+ " page " );
	

}
	
	public void clickGetStarted() throws InterruptedException {
      driver.findElement(btnGetStarted).click();                   
      Thread.sleep(2000);
       
	}

	public void clickRegister() {
		driver.findElement(lnkRegister).click();
	}
	

public void setUsername(String uname) {
	
driver.findElement(txtUsername).sendKeys(uname);

}

public void setPassword(String password) {
	
	driver.findElement(txtPassword).sendKeys(password);
}


public void setconfpassword(String confpassword) {
	
driver.findElement(txtconfpassword).sendKeys(confpassword);

}


public void clickbtnRegister() {
	
	driver.findElement(btnRegister).click();
}
public void getLoginPageTitle() {

	String title = driver.getTitle();
	Assert.assertEquals("Login", title);
	System.out.println("User is on " +title+ " page " );
	
}

public void alertmsghandle() {
	
	
	HP=new HomePage();
	String msg= driver.findElement(Alertmsg).getText();
	
	
	if(msg.contains("password_mismatch:The two password fields didn’t match.")) {
		
		System.out.println(msg);
}
		
else if (msg.contains("New Account Created.")) {
		
		System.out.println(msg);
		HP.getHomePageTitle();
	}

}





}



