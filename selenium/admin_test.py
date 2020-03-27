from selenium import webdriver
import requests
import unittest
from selenium.webdriver.common.keys import Keys
from time import sleep


class Test_Admin(unittest.TestCase):
    def setUp(self):
        options = webdriver.ChromeOptions()
        options.binary_location = "//Volumes/Apps/Applications/Chrome.app/Contents/MacOS/Google Chrome"
        # options.headless = True
        chrome_driver_binary = "/usr/local/bin/chromedriver"
        self.driver = webdriver.Chrome(chrome_driver_binary,
                                       chrome_options=options)

        self.agent1 = {
            'email': 'agent1@email.com',
            'firstName': 'Adam',
            'lastName': 'Agent1',
            'agentID': '1',
            'password': 'bestPassword1',
            'availability': True
        }
        self.agent2 = {
            'email': 'agent2@email.com',
            'firstName': 'Bob',
            'lastName': 'Agent2',
            'agentID': '2',
            'password': 'bestPassword1',
            'availability': False
        }

    def test_create_new_redirect(self):
        self.driver.get('http://localhost:3000/admin/resources/Agent')
        create_new_button = self.driver.find_element_by_xpath(
            '//*[@id="app"]/section/section[2]/section[3]/section[2]/section[2]/a/span'
        )
        assert (self.driver.current_url ==
                "http://localhost:3000/admin/resources/Agent")

    def test_create_new_agent_1(self):
        self.driver.get(
            'http://localhost:3000/admin/resources/Agent/actions/new')
        email_box = self.driver.find_element_by_xpath('//*[@id="email"]')
        agentId_box = self.driver.find_element_by_xpath('//*[@id="agentId"]')
        firstName_box = self.driver.find_element_by_xpath(
            '//*[@id="firstName"]')
        lastName_box = self.driver.find_element_by_xpath('//*[@id="lastName"]')
        availability_box = self.driver.find_element_by_xpath(
            '//*[@id="app"]/section/section[2]/section[3]/form/section[1]/section[6]/div/span/a'
        )
        password_box = self.driver.find_element_by_xpath('//*[@id="password"]')
        email_box.send_keys(self.agent1['email'])
        agentId_box.send_keys(self.agent1['agentID'])
        firstName_box.send_keys(self.agent1['firstName'])
        lastName_box.send_keys(self.agent1['lastName'])
        if self.agent1['availability']:
            availability_box.click()
        password_box.send_keys(self.agent1['password'])
        email_box.send_keys(Keys.ENTER)
        sleep(1)

        assert (self.driver.current_url ==
                "http://localhost:3000/admin/resources/Agent")

    # def test_delete_agent(self):
    #     agent1_box = self.driver.find_element_by_xpath(
    #         '//*[@id="app"]/section/section[2]/section[3]/section[3]/table/tbody/tr[1]/td[2]/section/span'
    #     )
    #     agent1_box.click()
    #     delete_button = self.driver.find_element_by_xpath(
    #         '//*[@id="app"]/section/section[2]/section[3]/section[2]/section[2]/a[1]/span'
    #     )
    #     delete_button.click()
    #     self.driver.switch_to.alert.accept()

    #     assert (self.driver.current_url ==
    #             "http://localhost:3000/admin/resources/Agent")

    def tearDown(self):
        self.driver.close()
