package pageObjects;

import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import Driver.DriverFactory;

public class LinkedListModPagePF extends DriverFactory{
	
	Actions action = new Actions(driver);
	
	//WebDriver driver;
	

	@FindBy(xpath = "//h4[@class='bg-secondary text-white']")
	WebElement LinkedListText;
	@FindBy(xpath = "//p[contains(text(),'Linked List')]")
	WebElement LinkedListTextOnSubPage;
	@FindBy(xpath = "//a[contains(text(),'Introduction')]")
	WebElement IntroductionLink;
	@FindBy(xpath = "//p[contains(text(),'Introduction')]")
	WebElement IntroductionTxt;
	@FindBy(xpath = "//div//div[@class='CodeMirror-scroll']")
	WebElement input_data;
	@FindBy(xpath = "//a[@href='/tryEditor']")
	WebElement TryHereBtn;
	@FindBy(xpath = "//*[@id='answer_form']/button")
	WebElement RunBtn;
	@FindBy(id = "output")
	WebElement CodeResult;
	@FindBy(xpath = "//a[contains(text(),'Creating')]")
	WebElement CreateLinListLlink;
	@FindBy(xpath = "//a[contains(text(), 'Types')]")
	WebElement TypesOfLListLink;
	@FindBy(xpath = "//a[contains(text(), 'Implement')]")
	WebElement ImpleLLInPythonLink;
	@FindBy(xpath = "//a[contains(text(), 'Traversal')]")
	WebElement TraversalLink;
	@FindBy(xpath = "//a[contains(text(), 'Insertion')]")
	WebElement InsertionLink;
	@FindBy(xpath = "//a[contains(text(), 'Deletion')]")
	WebElement DeletionLink;
	@FindBy(xpath = "// *[@id=\"content\"]/a")
	WebElement PracticeQsLink;
	@FindBy(xpath = "//*[contains(text(),'NumpyNinja')]")
	WebElement NumpyNinjaLink;
	

	public LinkedListModPagePF() {
		//this.driver = driver;
		PageFactory.initElements(driver, this);
		//action = new Actions(driver);
	}

	public void isOnLinkedListPage() {
		Assert.assertEquals(LinkedListText.isDisplayed(), true);
	}

	public void isOnLinkedListSubPage() {
		Assert.assertEquals(LinkedListTextOnSubPage.isDisplayed(), true);
	}

	public void IntroductionLinkClick() {
		IntroductionLink.click();
	}

	public void TryEditorValidation() {
		Assert.assertEquals(RunBtn.isDisplayed(), true);
	}

	public void TryHereBtnClick() {
		TryHereBtn.click();
	}

	public void IntroductionPageValidation() {
		String title = driver.getTitle();
		Assert.assertEquals("Introduction", title);
	}

	public void inputData() {
		action.click(input_data).sendKeys("print('Hello World')").perform();
	}

	public void ClickRun() {
		RunBtn.click();
	}

	public void viewCodeRestult() {
		Assert.assertEquals(CodeResult.getText(), "Hello World");
	}

	public void NavigateBackTwice() {
		driver.navigate().back();
		driver.navigate().back();
	}

	public void NavigateBackOnce() {
		driver.navigate().back();
	}

	public void CreateLinkListClick() {
		CreateLinListLlink.click();
	}

	public void TypesOfLinkListClick() {
		TypesOfLListLink.click();
	}

	public void ImpleLLInPythonClick() {
		ImpleLLInPythonLink.click();
	}

	public void TraversalLinkClick() {
		TraversalLink.click();
	}

	public void InsertionLinkClick() {
		InsertionLink.click();
	}

	public void DeletionLinkClick() {
		DeletionLink.click();
	}

	public void PracticeQsLinkClick() {
		PracticeQsLink.click();

	}

	public void PracticeQsPageValidate() {
		Assert.assertEquals(NumpyNinjaLink.isDisplayed(), true);

	}

	public void NumpyNinjaLinkClick() {
		NumpyNinjaLink.click();
	}
	
	
	

}
