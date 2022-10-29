package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.junit.Assert;

import Driver.DriverFactory;

public class HomePage extends DriverFactory{
	
	HomePage HP;
	LoginPage LP;
	
	@FindBy(xpath="//*[@id=\"navbarCollapse\"]/div[2]/ul/a[2]")
	WebElement lnkRegister;
	
	@FindBy(xpath="//a[@href='/login']")
	WebElement lnkSignin;
	
	@FindBy(xpath="//a[@href='/logout']")
	WebElement lnkSignout;
	

	@FindBy(xpath="//*[@class='card-title'][contains(text(),'Stack')]//..//a")
	@CacheLookup
	WebElement  btnclickGetStartedStack;
	
	@FindBy(xpath="//*[@class='card-title'][contains(text(),'Queue')]//..//a")
	@CacheLookup
	WebElement btnGetStartedQueue;

	@FindBy(xpath="//*[@class='card=title'][contains(text(),'data-structures-introduction']//..//a")
	@CacheLookup
	WebElement btnGetStartedDataStructures;
	
	

	@FindBy(xpath="/html/body/div[3]/div[2]/div/div/a")
	@CacheLookup
	WebElement btnGetStartedArray;
	
	@FindBy(xpath="//div//a[@href='linked-list']")
	@CacheLookup
	WebElement btnGetStartedLinkedList;
	
	@FindBy(xpath="//*[@class='card-title'][contains9text(),'Tree')]//..//a")
	@CacheLookup
	WebElement btnGetStartedTree;
	
	@FindBy(xpath="//*[@class='card-title'][contains(text(),'Graph')]//..//a")
	@CacheLookup
	WebElement btnGetStartedGraph;
	

	// For Data Structure Dropdown
	@FindBy(xpath = "//*[@data-toggle='dropdown']")
	WebElement DataStrDDownItem;
	@FindBy(xpath = "//*[contains(text(),'Arrays')]")
	WebElement ArrayDDownItem;
	@FindBy(xpath = "//div/a[contains(text(),'Linked List')]")
	WebElement LinedDDownItem;
	@FindBy(xpath = "//div/a[contains(text(),'Stack')]")
	WebElement StackDDownItem;
	@FindBy(xpath = "//div/a[contains(text(),'Queue')]")
	WebElement QueueDDownItem;
	@FindBy(xpath = "//div/a[contains(text(),'Tree')]")
	WebElement TreeDDownItem;
	@FindBy(xpath = "//div/a[contains(text(),'Graph')]")
	WebElement GraphDDownItem;
	@FindBy(xpath = "//ul/a[@href='/login']")
	WebElement SignInLink;
	@FindBy(xpath = "//*[@role='alert']")
	WebElement LoginSuccMsg;

	

	public boolean DataStrModValidation() {
		return btnGetStartedDataStructures.isDisplayed();

	}

	public boolean ArrayModValidation() {
		return btnGetStartedArray.isDisplayed();
	}

	public boolean LinkListModValidation() {
		return btnGetStartedLinkedList.isDisplayed();
	}

	public boolean StackModValidation() {
		return btnclickGetStartedStack.isDisplayed();
	}

	public boolean QueueModValidation() {
		return btnGetStartedQueue.isDisplayed();
	}

	public boolean TreeModValidation() {
		return btnGetStartedTree.isDisplayed();
	}

	public boolean GraphModValidation() {
		return btnGetStartedGraph.isDisplayed();
	}

	public boolean BtnVisibleCheck() {
		return (DataStrModValidation() && ArrayModValidation() && LinkListModValidation() && StackModValidation()
				&& QueueModValidation() && TreeModValidation() && GraphModValidation());
	}

	public void validateHomePage() {
		Assert.assertEquals(BtnVisibleCheck(), true);

	}

	public void DataStrDropdownClick() throws InterruptedException {
		DataStrDDownItem.click();
		System.out.println(DataStrDDownItem.getSize());
		System.out.println("Dropdown clicked");
		Thread.sleep(1500);
	}

	public String GetSuccessMsg() {
		String sucMsg = LoginSuccMsg.getText();
		System.out.println(sucMsg);
		return sucMsg;
	}
	
	public HomePage() {
	PageFactory.initElements(driver,this);
	}
	

	public void clickRegister() {
		lnkRegister.click();
	}
	
	
	public void clickSignin() {
		
		lnkSignin.click();
	}
	
	public void clickgetStartedArray() {
		btnGetStartedArray.click();
	}
		
	
	public void clickGetStartedStack() {
		
		btnclickGetStartedStack.click();
	}
	
	public void clickGetStartedQueue() {
		
		btnGetStartedQueue.click();
	}
	
	public void clickGetStartedDataStructures() {
		
		btnGetStartedDataStructures.click();
		
	}
	
	public void clickGetStartedLinkedList() {
		
		btnGetStartedLinkedList.click();
		
	}
	
	public void clickGetStartedTree() {
			
			btnGetStartedTree.click();
	}		
	
	public void clickGetStartedGraph() {
				
				btnGetStartedGraph.click();
	}


	public void getHomePageTitle() {
		String title = driver.getTitle();
		Assert.assertEquals("NumpyNinja", title);
		System.out.println("User is on " +title+ " page " );
		
		
		
	}
	
	public void clickSignout() {
		
		lnkSignout.click();
		
		
	}


				
			
			
	}
	
	

	

