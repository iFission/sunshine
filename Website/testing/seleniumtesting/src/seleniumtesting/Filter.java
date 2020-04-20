package seleniumtesting;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Filter {
	public static void main(String[] args) throws InterruptedException {
		System.setProperty("webdriver.chrome.driver", "/Users/alicekham/seleniumWebDrivers/chromedriver");
		WebDriver driver = new ChromeDriver();

		// maximize page
		driver.manage().window().maximize();
		// implicit wait for 10sec
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		// wait in ms
		Thread.sleep(5000);
		
		driver.get("http://localhost:3001/");
	}
}
