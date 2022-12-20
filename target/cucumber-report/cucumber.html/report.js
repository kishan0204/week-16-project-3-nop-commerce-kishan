$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ComputerTest.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Test",
  "description": "As user I want to explore Computer page of nop commerce website",
  "id": "computer-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "verify User Should Navigate To Computer Page Successfully",
  "description": "",
  "id": "computer-test;verify-user-should-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to computer page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 131334200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerStepTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 79504900,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElements(DefaultElementLocator.java:87)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementListHandler.invoke(LocatingElementListHandler.java:37)\r\n\tat com.sun.proxy.$Proxy20.iterator(Unknown Source)\r\n\tat com.nopcommerce.demo.pages.HomePage.clickOnMenuTab(HomePage.java:88)\r\n\tat com.nopcommerce.demo.steps.ComputerStepTest.iClickOnComputerTab(ComputerStepTest.java:14)\r\n\tat ✽.When I click on Computer tab(ComputerTest.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ComputerStepTest.iShouldNavigateToComputerPageSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 11,
  "name": "verify User Should Navigate To Desktops Page Successfully",
  "description": "",
  "id": "computer-test;verify-user-should-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@sanity"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should navigate to Desktops Page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 46000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerStepTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 6109800,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElements(DefaultElementLocator.java:87)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementListHandler.invoke(LocatingElementListHandler.java:37)\r\n\tat com.sun.proxy.$Proxy20.iterator(Unknown Source)\r\n\tat com.nopcommerce.demo.pages.HomePage.clickOnMenuTab(HomePage.java:88)\r\n\tat com.nopcommerce.demo.steps.ComputerStepTest.iClickOnComputerTab(ComputerStepTest.java:14)\r\n\tat ✽.When I click on Computer tab(ComputerTest.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ComputerStepTest.iClickOnDesktopsLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerStepTest.iShouldNavigateToDesktopsPageSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "verify That User Should Build Your Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computer-test;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on product name Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select processor \"\u003cprocessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select ram \"\u003cram\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select hdd \"\u003chdd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select OS \"\u003cos\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select Software \"\u003csoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should see product has been added to your shopping cart confirmation message",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "computer-test;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;",
  "rows": [
    {
      "cells": [
        "processor",
        "ram",
        "hdd",
        "os",
        "software"
      ],
      "line": 32,
      "id": "computer-test;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 33,
      "id": "computer-test;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 34,
      "id": "computer-test;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "VistaHome [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 35,
      "id": "computer-test;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 33,
  "name": "verify That User Should Build Your Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computer-test;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on product name Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select processor \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select ram \"2 GB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select hdd \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select OS \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select Software \"Microsoft Office [+$50.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should see product has been added to your shopping cart confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 40000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerStepTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 6082800,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElements(DefaultElementLocator.java:87)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementListHandler.invoke(LocatingElementListHandler.java:37)\r\n\tat com.sun.proxy.$Proxy20.iterator(Unknown Source)\r\n\tat com.nopcommerce.demo.pages.HomePage.clickOnMenuTab(HomePage.java:88)\r\n\tat com.nopcommerce.demo.steps.ComputerStepTest.iClickOnComputerTab(ComputerStepTest.java:14)\r\n\tat ✽.When I click on Computer tab(ComputerTest.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ComputerStepTest.iClickOnDesktopsLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterStepsTest.iClickOnProductNameBuildYourOwnComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 20
    }
  ],
  "location": "ComputerStepTest.iSelectProcessor(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 14
    }
  ],
  "location": "ComputerStepTest.iSelectRam(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerStepTest.iSelectHdd(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerStepTest.iSelectOS(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 19
    }
  ],
  "location": "ComputerStepTest.iSelectSoftware(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerStepTest.iClickOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerStepTest.iShouldSeeProductHasBeenAddedToYourShoppingCartConfirmationMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 34,
  "name": "verify That User Should Build Your Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computer-test;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on product name Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select ram \"4GB [+$20.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select hdd \"400 GB [+$100.00]\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select OS \"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select Software \"Acrobat Reader [+$10.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should see product has been added to your shopping cart confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 67600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerStepTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 6489700,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElements(DefaultElementLocator.java:87)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementListHandler.invoke(LocatingElementListHandler.java:37)\r\n\tat com.sun.proxy.$Proxy20.iterator(Unknown Source)\r\n\tat com.nopcommerce.demo.pages.HomePage.clickOnMenuTab(HomePage.java:88)\r\n\tat com.nopcommerce.demo.steps.ComputerStepTest.iClickOnComputerTab(ComputerStepTest.java:14)\r\n\tat ✽.When I click on Computer tab(ComputerTest.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ComputerStepTest.iClickOnDesktopsLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterStepsTest.iClickOnProductNameBuildYourOwnComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerStepTest.iSelectProcessor(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 14
    }
  ],
  "location": "ComputerStepTest.iSelectRam(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 14
    }
  ],
  "location": "ComputerStepTest.iSelectHdd(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 13
    }
  ],
  "location": "ComputerStepTest.iSelectOS(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 19
    }
  ],
  "location": "ComputerStepTest.iSelectSoftware(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerStepTest.iClickOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerStepTest.iShouldSeeProductHasBeenAddedToYourShoppingCartConfirmationMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 35,
  "name": "verify That User Should Build Your Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computer-test;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on product name Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select ram \"8GB [+$60.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select hdd \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select OS \"VistaHome [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select Software \"Total Commander [+$5.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should see product has been added to your shopping cart confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 26800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerStepTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 5327200,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElements(DefaultElementLocator.java:87)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementListHandler.invoke(LocatingElementListHandler.java:37)\r\n\tat com.sun.proxy.$Proxy20.iterator(Unknown Source)\r\n\tat com.nopcommerce.demo.pages.HomePage.clickOnMenuTab(HomePage.java:88)\r\n\tat com.nopcommerce.demo.steps.ComputerStepTest.iClickOnComputerTab(ComputerStepTest.java:14)\r\n\tat ✽.When I click on Computer tab(ComputerTest.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ComputerStepTest.iClickOnDesktopsLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterStepsTest.iClickOnProductNameBuildYourOwnComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerStepTest.iSelectProcessor(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 14
    }
  ],
  "location": "ComputerStepTest.iSelectRam(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerStepTest.iSelectHdd(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "VistaHome [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerStepTest.iSelectOS(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 19
    }
  ],
  "location": "ComputerStepTest.iSelectSoftware(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerStepTest.iClickOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerStepTest.iShouldSeeProductHasBeenAddedToYourShoppingCartConfirmationMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("LoginTest.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As user I want to login into nop commerce website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 32200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 4169400,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy19.getText(Unknown Source)\r\n\tat com.nopcommerce.demo.pages.HomePage.clickOnLoginLink(HomePage.java:47)\r\n\tat com.nopcommerce.demo.steps.LoginStepsTest.iClickOnLoginLink(LoginStepsTest.java:20)\r\n\tat ✽.When I click on login link(LoginTest.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepsTest.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@sanity"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "errorMessage"
      ],
      "line": 19,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "abcd123@gmail.com",
        "xyz123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 20,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "xyz123@gmail.com",
        "abc123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 21,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "adfafasd@gmail.com",
        "xyz123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 22,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    },
    {
      "line": 10,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter email \"abcd123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"xyz123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 36400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 3478400,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy19.getText(Unknown Source)\r\n\tat com.nopcommerce.demo.pages.HomePage.clickOnLoginLink(HomePage.java:47)\r\n\tat com.nopcommerce.demo.steps.LoginStepsTest.iClickOnLoginLink(LoginStepsTest.java:20)\r\n\tat ✽.When I click on login link(LoginTest.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginStepsTest.iEnterEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123",
      "offset": 18
    }
  ],
  "location": "LoginStepsTest.iEnterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepsTest.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 32
    }
  ],
  "location": "LoginStepsTest.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 21,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    },
    {
      "line": 10,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter email \"xyz123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 29800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 7301900,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy19.getText(Unknown Source)\r\n\tat com.nopcommerce.demo.pages.HomePage.clickOnLoginLink(HomePage.java:47)\r\n\tat com.nopcommerce.demo.steps.LoginStepsTest.iClickOnLoginLink(LoginStepsTest.java:20)\r\n\tat ✽.When I click on login link(LoginTest.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginStepsTest.iEnterEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 18
    }
  ],
  "location": "LoginStepsTest.iEnterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepsTest.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 32
    }
  ],
  "location": "LoginStepsTest.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 22,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    },
    {
      "line": 10,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter email \"adfafasd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"xyz123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 57500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 5794800,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy19.getText(Unknown Source)\r\n\tat com.nopcommerce.demo.pages.HomePage.clickOnLoginLink(HomePage.java:47)\r\n\tat com.nopcommerce.demo.steps.LoginStepsTest.iClickOnLoginLink(LoginStepsTest.java:20)\r\n\tat ✽.When I click on login link(LoginTest.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "adfafasd@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginStepsTest.iEnterEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123",
      "offset": 18
    }
  ],
  "location": "LoginStepsTest.iEnterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepsTest.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 32
    }
  ],
  "location": "LoginStepsTest.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 25,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-test;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@sanity"
    },
    {
      "line": 24,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I enter email \"abc123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter password \"Abcd1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I should see logout link is display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 31400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 5212000,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy19.getText(Unknown Source)\r\n\tat com.nopcommerce.demo.pages.HomePage.clickOnLoginLink(HomePage.java:47)\r\n\tat com.nopcommerce.demo.steps.LoginStepsTest.iClickOnLoginLink(LoginStepsTest.java:20)\r\n\tat ✽.When I click on login link(LoginTest.feature:27)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginStepsTest.iEnterEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Abcd1234",
      "offset": 18
    }
  ],
  "location": "LoginStepsTest.iEnterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepsTest.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepsTest.iShouldSeeLogoutLinkIsDisplay()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 34,
  "name": "User should logout successfully",
  "description": "",
  "id": "login-test;user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I enter email \"abc123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter password \"Abcd1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on logout link",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I should see login link is display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 80400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 10397900,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy19.getText(Unknown Source)\r\n\tat com.nopcommerce.demo.pages.HomePage.clickOnLoginLink(HomePage.java:47)\r\n\tat com.nopcommerce.demo.steps.LoginStepsTest.iClickOnLoginLink(LoginStepsTest.java:20)\r\n\tat ✽.When I click on login link(LoginTest.feature:36)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginStepsTest.iEnterEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Abcd1234",
      "offset": 18
    }
  ],
  "location": "LoginStepsTest.iEnterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepsTest.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepsTest.iClickOnLogoutLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepsTest.iShouldSeeLoginLinkIsDisplay()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("RegisterTest.feature");
formatter.feature({
  "line": 1,
  "name": "Register Test",
  "description": "As user I want to register to nop commerce website",
  "id": "register-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "verify user should navigate to register page successfully",
  "description": "",
  "id": "register-test;verify-user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to register page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 38300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepsTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 10435600,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy19.getText(Unknown Source)\r\n\tat com.nopcommerce.demo.pages.HomePage.clickOnRegisterLink(HomePage.java:59)\r\n\tat com.nopcommerce.demo.steps.RegisterStepsTest.iClickOnRegisterLink(RegisterStepsTest.java:18)\r\n\tat ✽.When I click on register link(RegisterTest.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RegisterStepsTest.iShouldNavigateToRegisterPageSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "verify that firstname lastname email password and confirm password fields are mandatory",
  "description": "",
  "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@sanity"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the error message \"\u003cerrorMessage\u003e\" for fieldName \"\u003cfieldName\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;",
  "rows": [
    {
      "cells": [
        "fieldName",
        "errorMessage"
      ],
      "line": 18,
      "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;1"
    },
    {
      "cells": [
        "FirstName",
        "First name is required."
      ],
      "line": 19,
      "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;2"
    },
    {
      "cells": [
        "LastName",
        "Last name is required."
      ],
      "line": 20,
      "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;3"
    },
    {
      "cells": [
        "Email",
        "Email is required."
      ],
      "line": 21,
      "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;4"
    },
    {
      "cells": [
        "Password",
        "Password is required."
      ],
      "line": 22,
      "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;5"
    },
    {
      "cells": [
        "ConfirmPassword",
        "Password is required."
      ],
      "line": 23,
      "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "verify that firstname lastname email password and confirm password fields are mandatory",
  "description": "",
  "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    },
    {
      "line": 10,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the error message \"First name is required.\" for fieldName \"FirstName\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 34200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepsTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 7842700,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy19.getText(Unknown Source)\r\n\tat com.nopcommerce.demo.pages.HomePage.clickOnRegisterLink(HomePage.java:59)\r\n\tat com.nopcommerce.demo.steps.RegisterStepsTest.iClickOnRegisterLink(RegisterStepsTest.java:18)\r\n\tat ✽.When I click on register link(RegisterTest.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RegisterStepsTest.iClickOnRegisterButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 32
    },
    {
      "val": "FirstName",
      "offset": 72
    }
  ],
  "location": "RegisterStepsTest.iShouldSeeTheErrorMessageForFieldName(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 20,
  "name": "verify that firstname lastname email password and confirm password fields are mandatory",
  "description": "",
  "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    },
    {
      "line": 10,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the error message \"Last name is required.\" for fieldName \"LastName\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 48600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepsTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 13993400,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy19.getText(Unknown Source)\r\n\tat com.nopcommerce.demo.pages.HomePage.clickOnRegisterLink(HomePage.java:59)\r\n\tat com.nopcommerce.demo.steps.RegisterStepsTest.iClickOnRegisterLink(RegisterStepsTest.java:18)\r\n\tat ✽.When I click on register link(RegisterTest.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RegisterStepsTest.iClickOnRegisterButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Last name is required.",
      "offset": 32
    },
    {
      "val": "LastName",
      "offset": 71
    }
  ],
  "location": "RegisterStepsTest.iShouldSeeTheErrorMessageForFieldName(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 21,
  "name": "verify that firstname lastname email password and confirm password fields are mandatory",
  "description": "",
  "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    },
    {
      "line": 10,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the error message \"Email is required.\" for fieldName \"Email\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 48400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepsTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 5658600,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy19.getText(Unknown Source)\r\n\tat com.nopcommerce.demo.pages.HomePage.clickOnRegisterLink(HomePage.java:59)\r\n\tat com.nopcommerce.demo.steps.RegisterStepsTest.iClickOnRegisterLink(RegisterStepsTest.java:18)\r\n\tat ✽.When I click on register link(RegisterTest.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RegisterStepsTest.iClickOnRegisterButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is required.",
      "offset": 32
    },
    {
      "val": "Email",
      "offset": 67
    }
  ],
  "location": "RegisterStepsTest.iShouldSeeTheErrorMessageForFieldName(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 22,
  "name": "verify that firstname lastname email password and confirm password fields are mandatory",
  "description": "",
  "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    },
    {
      "line": 10,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the error message \"Password is required.\" for fieldName \"Password\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 612100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepsTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 9659700,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy19.getText(Unknown Source)\r\n\tat com.nopcommerce.demo.pages.HomePage.clickOnRegisterLink(HomePage.java:59)\r\n\tat com.nopcommerce.demo.steps.RegisterStepsTest.iClickOnRegisterLink(RegisterStepsTest.java:18)\r\n\tat ✽.When I click on register link(RegisterTest.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RegisterStepsTest.iClickOnRegisterButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 32
    },
    {
      "val": "Password",
      "offset": 70
    }
  ],
  "location": "RegisterStepsTest.iShouldSeeTheErrorMessageForFieldName(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 23,
  "name": "verify that firstname lastname email password and confirm password fields are mandatory",
  "description": "",
  "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    },
    {
      "line": 10,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the error message \"Password is required.\" for fieldName \"ConfirmPassword\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 289900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepsTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 5561500,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy19.getText(Unknown Source)\r\n\tat com.nopcommerce.demo.pages.HomePage.clickOnRegisterLink(HomePage.java:59)\r\n\tat com.nopcommerce.demo.steps.RegisterStepsTest.iClickOnRegisterLink(RegisterStepsTest.java:18)\r\n\tat ✽.When I click on register link(RegisterTest.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RegisterStepsTest.iClickOnRegisterButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 32
    },
    {
      "val": "ConfirmPassword",
      "offset": 70
    }
  ],
  "location": "RegisterStepsTest.iShouldSeeTheErrorMessageForFieldName(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "verify that user should create account successfully",
  "description": "",
  "id": "register-test;verify-that-user-should-create-account-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I select gender\"\u003cgender\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter firstname \"\u003cfirstName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter lastname \"\u003clastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select date of birth  \"\u003cday\u003e\"\"\u003cmonth\u003e\"\"\u003cyear\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter random email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter confirm password \"\u003cconfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should see registration confirmation message",
  "keyword": "Then "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "register-test;verify-that-user-should-create-account-successfully;",
  "rows": [
    {
      "cells": [
        "gender",
        "firstName",
        "lastName",
        "day",
        "month",
        "year",
        "password",
        "confirmPassword"
      ],
      "line": 40,
      "id": "register-test;verify-that-user-should-create-account-successfully;;1"
    },
    {
      "cells": [
        "Female",
        "blue",
        "ocean",
        "22",
        "February",
        "1980",
        "Abcd1234",
        "Abcd1234"
      ],
      "line": 41,
      "id": "register-test;verify-that-user-should-create-account-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 41,
  "name": "verify that user should create account successfully",
  "description": "",
  "id": "register-test;verify-that-user-should-create-account-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I select gender\"Female\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter firstname \"blue\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter lastname \"ocean\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select date of birth  \"22\"\"February\"\"1980\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter random email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter password \"Abcd1234\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter confirm password \"Abcd1234\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should see registration confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 17600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepsTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 4906600,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy19.getText(Unknown Source)\r\n\tat com.nopcommerce.demo.pages.HomePage.clickOnRegisterLink(HomePage.java:59)\r\n\tat com.nopcommerce.demo.steps.RegisterStepsTest.iClickOnRegisterLink(RegisterStepsTest.java:18)\r\n\tat ✽.When I click on register link(RegisterTest.feature:28)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Female",
      "offset": 16
    }
  ],
  "location": "RegisterStepsTest.iSelectGender(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "blue",
      "offset": 19
    }
  ],
  "location": "RegisterStepsTest.iEnterFirstname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ocean",
      "offset": 18
    }
  ],
  "location": "RegisterStepsTest.iEnterLastname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "22",
      "offset": 25
    },
    {
      "val": "February",
      "offset": 29
    },
    {
      "val": "1980",
      "offset": 39
    }
  ],
  "location": "RegisterStepsTest.iSelectDateOfBirth(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cemail\u003e",
      "offset": 22
    }
  ],
  "location": "RegisterStepsTest.iEnterRandomEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Abcd1234",
      "offset": 18
    }
  ],
  "location": "LoginStepsTest.iEnterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Abcd1234",
      "offset": 26
    }
  ],
  "location": "RegisterStepsTest.iEnterConfirmPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterStepsTest.iClickOnRegisterButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterStepsTest.iShouldSeeRegistrationConfirmationMessage()"
});
formatter.result({
  "status": "skipped"
});
});