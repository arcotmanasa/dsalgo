package pageObjects;

import java.time.Duration;
//import org.junit.Assert;
//import org.junit.Assert;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import Driver.DriverFactory;
//import io.cucumber.messages.types.Duration;

public class DataStructuresPage extends DriverFactory {
//	
//
//	import java.time.Duration;
//
//	import org.openqa.selenium.WebElement;
//	import org.openqa.selenium.interactions.Actions;
//	import org.openqa.selenium.support.FindBy;
//	import org.openqa.selenium.support.PageFactory;
//	import org.testng.Assert;
//
//	import driver.driverSetUp;
//
//	public class DataStructuresPage extends driverSetUp{
		
		Actions action = new Actions(driver);
		//Data-Structures-Introduction
		@FindBy(xpath="//a[@href='time-complexity']") WebElement btn_timecomplexity;
		@FindBy(xpath="//*[@href='/tryEditor']") WebElement btn_tryhere;
		@FindBy(xpath="//*[text()='Run']") WebElement btn_run;
		@FindBy(className="CodeMirror-lines") WebElement editorInput;
		@FindBy(xpath="//pre[@id='output']") WebElement editorOutput;
		@FindBy(xpath="//a[@href='data-structures-introduction']") WebElement ds;
		@FindBy(xpath="//*[contains(text(),'Practice')]") WebElement btn_practicequestions;
		//Array
		@FindBy(xpath="//a[@href='array']") WebElement array;
		@FindBy(xpath="//a[@href='arrays-using-list']") WebElement btn_arraysusinglist;
		@FindBy(xpath="//a[@href='arrays-in-python']") WebElement btn_arraysinpython;
		@FindBy(xpath="//a[@href='basic-operations-in-lists']") WebElement btn_basicoperationsinlists;
		@FindBy(xpath="//a[@href='applications-of-array']") WebElement btn_applicationsofarray;
		@FindBy(xpath="//a[@href='/question/1']") WebElement btn_searchthearray;
		@FindBy(xpath="//input[@type='submit']") WebElement btn_submit;
		@FindBy(xpath="//a[@href='/question/2']") WebElement btn_maxconsecutiveones;
		@FindBy(xpath="//a[@href='/question/3']") WebElement btn_findnumberswithevennumberofdigits;
		@FindBy(xpath="//a[@href='/question/4']") WebElement btn_squaresofasortedarray;
		//graph
				
		@FindBy(xpath="//a[@href='graph']") WebElement graph;
		@FindBy (xpath = "//ul//a[.='Graph']") WebElement Graph_btn;
		@FindBy (xpath = "//ul//a[.='Graph Representations']") WebElement GraphRepresnt_btn;
		@FindBy (xpath = "//*[@class='btn btn-info']") WebElement TryHere_btn;
		@FindBy (xpath = "//*[@class=' CodeMirror-line ']") WebElement input_data ;
		@FindBy (xpath = "//*[@type='button']") WebElement run_btn ;
		@FindBy (id = "output") WebElement Output_txt;
		//tree
		@FindBy(xpath="//a[@href='tree']") WebElement tree;
		@FindBy (xpath = "//*[contains(text(),'Overview of Trees')]") WebElement Overview_btn;
		@FindBy (xpath = "//*[contains(text(),'Terminologies')]") WebElement Terminologies_btn;
		@FindBy (xpath = "//*[contains(text(),'Types of Trees')]") WebElement TypeOfTree_btn;
		@FindBy (xpath = "//a[.='Tree Traversals']") WebElement TreeTraversals_btn;
		@FindBy (xpath = "//*[contains(text(),'Traversals-Illustration')]") WebElement TraversalsIllustration_btn;
		@FindBy (xpath = "//a[.='Binary Trees']") WebElement BinaryTrees_btn;
		@FindBy (xpath = "//*[contains(text(),'Types of Binary Trees')]") WebElement TYpesOfBinary_btn;
		@FindBy (xpath = "//*[contains(text(),'Implementation in Python')]") WebElement ImplementationPython_btn;
		@FindBy (xpath = "//*[contains(text(),'Binary Tree Traversals')]") WebElement BinaryTreeTraversals_btn;
		@FindBy (xpath = "//*[contains(text(),'Implementation of Binary Trees')]") WebElement ImplementationOfBinary_btn;
	    @FindBy (xpath = "//*[contains(text(),'Applications of Binary trees')]") WebElement ApplicationsOfBinary_btn;
		@FindBy (xpath = "//*[contains(text(),'Binary Search Trees')]") WebElement BinarySearch_btn;
		@FindBy (xpath = "//*[contains(text(),'Implementation Of BST')]") WebElement ImplementationOfBST_btn;
		@FindBy (xpath = "//*[@class='btn btn-info']") WebElement tryHere_btn;
		@FindBy (xpath = "//a[@href='/logout']") WebElement btn_signout;
		
		
		public DataStructuresPage() {
			PageFactory.initElements(driver,this);
		}
		
		public void ValidateHomePage() {
			String title=driver.getTitle();
			System.out.println("You are on Page : "+ title);
		}
		
		public void clickDataStructuresIntro() {
			ds.click();
		}
		
		public void validateDataStucturesIntroPage() {
			String title=driver.getTitle();
				System.out.println("you are on this page : "+title);
		}
		
		public void timeComplexity() {
			btn_timecomplexity.click();
		}
		
		public void validateTimeComplexity() {
			String title=driver.getTitle();
			System.out.println("you are on this page: "+title);
		}
		
		public void tryHere() {
			btn_tryhere.click();
		}
		
		public void validateTryHere() {
			String title=driver.getTitle();
			System.out.println("you are on this page: "+title);
	}
		public void tryEditor() {
			//editorInput.sendKeys("hello");
			Actions action=new Actions(driver);
			action.click(editorInput).sendKeys("print('Hello world')").perform();
			btn_run.click();
			driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(30));
			driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(30));
			String output=editorOutput.getText();
			System.out.println("----The output is---- : "+output);
		}
		
		public void backtoHome_from_editor(){
			driver.navigate().back();
			driver.navigate().back();
			driver.navigate().back();
		}

		public void practiceQuestions() {
			btn_practicequestions.click();
		}
		
		public void validatePracticeQuestions() {
			String title=driver.getTitle();
			System.out.println("you are on this page: "+title);
		}
		
		public void clickArray() {
			array.click();
		}
		
		public void validateArrayPage() {
			String title=driver.getTitle();
				System.out.println("you are on this page : "+title);
		}
		
		public void arraysInPython() {
			btn_arraysinpython.click();
		}
		
		public void validateArraysInPython() {
			String title=driver.getTitle();
			System.out.println("you are on this page: "+title);
		}

		public void arraysUsingList() {
			btn_arraysusinglist.click();
		}
		
		public void validateArraysUsingList() {
			String title=driver.getTitle();
			System.out.println("you are on this page: "+title);
		}
		
		public void basicOperationsInLists() {
			btn_basicoperationsinlists.click();
		}
		
		public void validateBasicOperationsInLists() {
			String title=driver.getTitle();
			System.out.println("you are on this page: "+title);
		}
		
		public void applicationsOfArray() {
			btn_applicationsofarray.click();
		}
		
		public void validateApplicationsOfArray() {
			String title=driver.getTitle();
			System.out.println("you are on this page: "+title);
		}
		
		public void searchTheArray() {
			btn_searchthearray.click();
		}
		
		public void validateQuestionOne() {
			String title=driver.getTitle();
			System.out.println("you are on this page: "+title);
		}
		
		public void questionOne() {
				Actions action=new Actions(driver);
				action.click(editorInput).sendKeys("print('Hello world')").perform();
				//btn_run.click();
				driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(30));
				driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(30));
				btn_submit.click();
				String output=editorOutput.getText();
				System.out.println("----The output is---- : "+output);
		}
		
		public void backtoPracticeQuestion_from_QuestionPage(){
			driver.navigate().back();
		}
		
		public void maxConsecutiveOnes() {
			btn_maxconsecutiveones.click();
		}
		
		public void validateQuestionTwo() {
			String title=driver.getTitle();
			System.out.println("you are on this page: "+title);
		}
		
		public void findNumbersWithEvenNumberOfDigits() {
			btn_findnumberswithevennumberofdigits.click();
		}
		
		public void validateQuestionThree() {
			String title=driver.getTitle();
			System.out.println("you are on this page: "+title);
		}
		
		public void squaresOfASortedArray() {
			btn_squaresofasortedarray.click();
		}
		
		public void validateQuestionFour() {
			String title=driver.getTitle();
			System.out.println("you are on this page: "+title);
		}
		
		
		///////////////////////////////////////////////////////////////////////////graph and tree page
		
		

//			//Constructor
//			public datastructurestrialPage() {
//				PageFactory.initElements(driver,this);
//			}
	//
//			public void ValidateHomePage() {
//				String title=driver.getTitle();
//				System.out.println("You are on Page : "+ title);
//			}
			
			public void clickGraph() {
				graph.click();
			}
				
			//graph Methods
			public void ValidateGraphPage() {

				String title = driver.getTitle();
				Assert.assertEquals("Graph", title);
				System.out.println("User is on " + title + " Page" );
			}
			
			
			public void ValidationAssesment() {
				
				String title = driver.getTitle();
				Assert.assertEquals("Assessment", title);
				System.out.println("User is on " + title + " Page" );
				
			}


			public void GraphLink() {

				Graph_btn.click();	
			}
			
			public void GraphRepresntbtn() {

				GraphRepresnt_btn.click();	
			}

			public void returnBacktwice(){
				driver.navigate().back();
				driver.navigate().back();
		}
//			
//			public void backtoHome_from_editor(){
//				driver.navigate().back();
//				driver.navigate().back();
//				driver.navigate().back();
//			}
			
			//tree methods
			public void clickTree() {
				tree.click();
			}
			
			public void TreePageValidation() {
				
				String title = driver.getTitle();
				Assert.assertEquals("Tree",title);
				System.out.println("user is on " + title + " page");	
			}
			
			
			public void TypeOfTreebtn() {
				
				TypeOfTree_btn.click();
				
			}
			
			public void Terminologiesbtn() {
					
				Terminologies_btn.click();
					
				}
			
			public void TreeTraversalsbtn() {
				
				TreeTraversals_btn.click();
				
			}
			
			public void BinaryTreesbtn() {
				
				BinaryTrees_btn.click();
				
			}
			
			public void TYpesOfBinarybtn() {
				
				TYpesOfBinary_btn.click();
				
			}
			
			public void ImplementationPythonbtn() {
				
				ImplementationPython_btn.click();
				
			}
			
			public void BinaryTreeTraversalsbtn() {
				
				BinaryTreeTraversals_btn.click();
				
			}
			
			public void ImplementationOfBinarybtn() {
				
				ImplementationOfBinary_btn.click();
				
			}
			
			public void ApplicationsOfBinarybtn() {
				
				ApplicationsOfBinary_btn.click();
				
			}
			
			public void BinarySearchbtn() {
				
				BinarySearch_btn.click();
				
			}
			
			public void ImplementationOfBSTbtn() {
				
				ImplementationOfBST_btn.click();
				
			}
			
			
			public void OverviewOfTreeBtn() {
				
				Overview_btn.click();
				
			}
			
			public void TraversalsIllustrationbtn() {
				TraversalsIllustration_btn.click();
			}
				
				
				public void TryHereBtn () {
					
					tryHere_btn.click();
				}
				
				
				public void InputData() {
					
					action.click(input_data).sendKeys("print('Testing001')").perform();
					
				}
				
				
				public void RunBtn() {
					 
					run_btn.click();
					
				}
				
			public void OutputText() {
					
					System.out.println("User entered :- " + Output_txt.getText());
				}
				
			public void clickSignOut() {
				btn_signout.click();
			}
		
		
	}





