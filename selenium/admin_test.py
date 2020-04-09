from selenium import webdriver
import requests
import unittest
from selenium.webdriver.common.keys import Keys
from time import sleep
from selenium.webdriver.firefox.firefox_binary import FirefoxBinary


class Test_Admin(unittest.TestCase):
    def setUp(self):
        options = webdriver.ChromeOptions()
        options.binary_location = "//Volumes/Apps/Applications/Chrome.app/Contents/MacOS/Google Chrome"
        chrome_driver_binary = "/usr/local/bin/chromedriver"
        self.driver = webdriver.Chrome(chrome_driver_binary,
                                       chrome_options=options)
                                       
        self.agent1 = {
            'email': 'agent1@email.com',
            'firstName': 'Adam',
            'lastName': 'Agent1',
            'agentID': '1',
            'password': 'bestPassword1',
            'availability': True,
            'skill': ["1", "2"]
        }
        self.agent2 = {
            'email': 'agent2@email.com',
            'firstName': 'Bob',
            'lastName': 'Agent2',
            'agentID': '2',
            'password': 'bestPassword1',
            'availability': True,
            'skill': ["2", "3"]
        }
        self.agent3 = {
            'email': 'agent3@email.com',
            'firstName': 'Charles',
            'lastName': 'Agent3',
            'agentID': '3',
            'password': 'bestPassword1',
            'availability': True,
            'skill': ["1", "3"]
        }
        self.agent4 = {
            'email': 'agent4@email.com',
            'firstName': 'Dom',
            'lastName': 'Agent4',
            'agentID': '4',
            'password': 'bestPassword1',
            'availability': False,
            'skill': ["1", "3"]
        }

    def test_create_new_redirect(self):
        self.driver.get('http://localhost:3000/admin/resources/Agent')
        create_new_button = self.driver.find_element_by_xpath(
            '//*[@id="app"]/section/section[2]/section[3]/section[2]/section[2]/a/span'
        )
        assert (self.driver.current_url ==
                "http://localhost:3000/admin/resources/Agent")

    def test_create_new_agent_1(self):
        # find elements
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
        skill_add_button = self.driver.find_element_by_xpath(
            '//*[@id="app"]/section/section[2]/section[3]/form/section[1]/div/section/button'
        )
        skill_add_button.click()
        skill1_box = self.driver.find_element_by_xpath('//*[@id="skill.0"]')
        skill_add_button.click()
        skill2_box = self.driver.find_element_by_xpath('//*[@id="skill.1"]')
        password_box = self.driver.find_element_by_xpath('//*[@id="password"]')

        # input data
        email_box.send_keys(self.agent1['email'])
        agentId_box.send_keys(self.agent1['agentID'])
        firstName_box.send_keys(self.agent1['firstName'])
        lastName_box.send_keys(self.agent1['lastName'])
        if self.agent1['availability']:
            availability_box.click()

        skill1_box.send_keys(self.agent1['skill'][0])
        skill2_box.send_keys(self.agent1['skill'][1])
        password_box.send_keys(self.agent1['password'])

        sleep(5)
        email_box.send_keys(Keys.ENTER)
        sleep(1)

        assert (self.driver.current_url ==
                "http://localhost:3000/admin/resources/Agent")

    def test_create_new_agent_2(self):
        # find elements
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
        skill_add_button = self.driver.find_element_by_xpath(
            '//*[@id="app"]/section/section[2]/section[3]/form/section[1]/div/section/button'
        )
        skill_add_button.click()
        skill1_box = self.driver.find_element_by_xpath('//*[@id="skill.0"]')
        skill_add_button.click()
        skill2_box = self.driver.find_element_by_xpath('//*[@id="skill.1"]')
        password_box = self.driver.find_element_by_xpath('//*[@id="password"]')

        # input data
        email_box.send_keys(self.agent2['email'])
        agentId_box.send_keys(self.agent2['agentID'])
        firstName_box.send_keys(self.agent2['firstName'])
        lastName_box.send_keys(self.agent2['lastName'])
        if self.agent2['availability']:
            availability_box.click()

        skill1_box.send_keys(self.agent2['skill'][0])
        skill2_box.send_keys(self.agent2['skill'][1])
        password_box.send_keys(self.agent2['password'])

        sleep(5)
        email_box.send_keys(Keys.ENTER)
        sleep(1)

        assert (self.driver.current_url ==
                "http://localhost:3000/admin/resources/Agent")

    def test_create_new_agent_3(self):
        # find elements
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
        skill_add_button = self.driver.find_element_by_xpath(
            '//*[@id="app"]/section/section[2]/section[3]/form/section[1]/div/section/button'
        )
        skill_add_button.click()
        skill1_box = self.driver.find_element_by_xpath('//*[@id="skill.0"]')
        skill_add_button.click()
        skill2_box = self.driver.find_element_by_xpath('//*[@id="skill.1"]')
        password_box = self.driver.find_element_by_xpath('//*[@id="password"]')

        # input data
        email_box.send_keys(self.agent3['email'])
        agentId_box.send_keys(self.agent3['agentID'])
        firstName_box.send_keys(self.agent3['firstName'])
        lastName_box.send_keys(self.agent3['lastName'])
        if self.agent3['availability']:
            availability_box.click()

        skill1_box.send_keys(self.agent3['skill'][0])
        skill2_box.send_keys(self.agent3['skill'][1])
        password_box.send_keys(self.agent3['password'])

        sleep(5)
        email_box.send_keys(Keys.ENTER)
        sleep(1)

        assert (self.driver.current_url ==
                "http://localhost:3000/admin/resources/Agent")

    def test_create_new_agent_4(self):
        # find elements
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
        skill_add_button = self.driver.find_element_by_xpath(
            '//*[@id="app"]/section/section[2]/section[3]/form/section[1]/div/section/button'
        )
        skill_add_button.click()
        skill1_box = self.driver.find_element_by_xpath('//*[@id="skill.0"]')
        skill_add_button.click()
        skill2_box = self.driver.find_element_by_xpath('//*[@id="skill.1"]')
        password_box = self.driver.find_element_by_xpath('//*[@id="password"]')

        # input data
        email_box.send_keys(self.agent4['email'])
        agentId_box.send_keys(self.agent4['agentID'])
        firstName_box.send_keys(self.agent4['firstName'])
        lastName_box.send_keys(self.agent4['lastName'])
        if self.agent4['availability']:
            availability_box.click()

        skill1_box.send_keys(self.agent4['skill'][0])
        skill2_box.send_keys(self.agent4['skill'][1])
        password_box.send_keys(self.agent4['password'])

        sleep(5)
        email_box.send_keys(Keys.ENTER)
        sleep(1)

        assert (self.driver.current_url ==
                "http://localhost:3000/admin/resources/Agent")

    def tearDown(self):
        self.driver.close()
