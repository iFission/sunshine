package seleniumtesting;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class CheckForm {

	// initiate driver
	public static void main(String[] args) throws InterruptedException {
		System.setProperty("webdriver.chrome.driver", "/Users/alicekham/seleniumWebDrivers/chromedriver");
		WebDriver driver = new ChromeDriver();

		// maximize page
		driver.manage().window().maximize();
		// implicit wait for 10sec
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		// open URL of app
		// driver.get("http://localhost:3001/contact/livechat/filterone/a");

		// wait in ms
		Thread.sleep(5000);

		driver.get("http://localhost:3001/");
		driver.findElement(By.linkText("Contact")).click();
		Thread.sleep(1000);
		driver.findElement(By.linkText("Go To Live Chat")).click();
		Thread.sleep(1000);
		driver.findElement(By.linkText("Book And Join A Tour")).click();
		Thread.sleep(1000);
		driver.findElement(By.linkText("Group Bookings")).click();
		
		String URL = "http://localhost:3001/contact/livechat/filterone/a";
		String startChat = "http://localhost:3001/startchat";
		
		Thread.sleep(2000);
		
		WebElement firstName = driver.findElement(By.id("firstName"));
		WebElement lastName = driver.findElement(By.id("lastName"));
		WebElement email = driver.findElement(By.id("email"));
		WebElement info = driver.findElement(By.id("info"));
		WebElement tAndC = driver.findElement(By.id("gridCheck1"));
		WebElement submitBtn = driver.findElement(By.id("submitbutton"));

		// Test 1: no email input
		firstName.sendKeys("Mary");
		lastName.sendKeys("Ann");
		submitBtn.click();
		if (driver.getCurrentUrl().compareTo(URL) == 0) {
			System.out.println("-- Test 1 --");
			System.out.println(" No Email Input ");
			System.out.println(" Successful ");
		} else {
			System.out.println("-- Test 1 --");
			System.out.println(" Error: Form Fill Not Completed ");
			System.out.println(" Failed ");

		}

		Thread.sleep(2000);
		firstName.clear();
		lastName.clear();

		// Test 2: no first name input
		lastName.sendKeys("ann");
		email.sendKeys("maryann@gmail.com");
		submitBtn.click();
		if (driver.getCurrentUrl().compareTo(URL) == 0) {
			System.out.println("-- Test 2 --");
			System.out.println(" No First Name Input ");
			System.out.println(" Successful ");
		} else {
			System.out.println("-- Test 2 --");
			System.out.println(" Error: Form Fill Not Completed ");
			System.out.println(" Failed ");
		}

		Thread.sleep(2000);
		email.clear();
		
		// Test 3: no last name input
		firstName.sendKeys("mary");
		email.sendKeys("maryann@gmail.com");
		submitBtn.click();
		if (driver.getCurrentUrl().compareTo(URL) == 0) {
			System.out.println("-- Test 3 --");
			System.out.println(" No Last Name Input ");
			System.out.println(" Successful ");
		} else {
			System.out.println("-- Test 3 --");
			System.out.println(" Error: Form Fill Not Completed ");
			System.out.println(" Failed ");
		}
		Thread.sleep(2000);
		email.clear();
		

		// Test 4: Terms and Conditions
		firstName.sendKeys("Teddy");
		lastName.sendKeys("Rogers");
		email.sendKeys("teddyrogers@gmail.com");
		info.sendKeys("I need help making a group booking to Australia.");
		submitBtn.click();
		if (driver.getCurrentUrl().compareTo(URL) == 0) {
			System.out.println("-- Test 4 --");
			System.out.println(" Terms And Conditions Not Agreed ");
			System.out.println(" Successful ");
		} else {
			System.out.println("-- Test 4 --");
			System.out.println(" Error: Form Fill Not Completed ");
			System.out.println(" Failed ");
		}

		Thread.sleep(2000);
		firstName.clear();
		lastName.clear();
		email.clear();
		info.clear();

		// Test 5: Complete Form
		firstName.sendKeys("Teddy");
		lastName.sendKeys("Rogers");
		email.sendKeys("teddyrogers@gmail.com");
		info.sendKeys("I need help making a group booking to Australia.");
		tAndC.click();
		submitBtn.click();
		if (driver.getCurrentUrl().compareTo(startChat) == 0) {
			System.out.println("-- Test 5 --");
			System.out.println(" Form Filled Correctly ");
			System.out.println(" Form Check Completed. ");
			System.out.println(" Successful ");

			List<String> browserTabs = new ArrayList<String>(driver.getWindowHandles());
			// System.out.println(browserTabs);

			System.out.println("-- Test 6 : Check For startChat --");
			if (browserTabs.size() == 2) {
				driver.switchTo().window(browserTabs.get(1));
				if (driver.getCurrentUrl().compareTo("http://localhost:300/") == 0) {
					System.out.println(" startchat Opened ");
					System.out.println(" Successful ");
				} else {
					System.out.println(" startChat Did Not Open Correctly ");
					System.out.println(" Failed ");
				}

				Thread.sleep(3000);
				driver.quit();

			}

		} else {
			System.out.println("-- Test 4 --");
			System.out.println(" Error: Form Fill Failed ");
			System.out.println(" Failed ");
		}

	}
}
