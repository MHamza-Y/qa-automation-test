Feature: Post Flyer
    Scenario: registered and logged in user can post a flyer
        Given user navigates to register page
        And registers new account 
        And logs in
        When user navigate to post flyer
        And posts a new flyer 
        Then user can see the flyer on home page
