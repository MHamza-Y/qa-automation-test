Feature: Post Flyer
    Scenario: registered and logged in user can post a flyer
        Given user navigates to register page
        And registers new account 
        And logs in
        When user navigate to post flyer
        And fill the flyer 
        And posts flyer
        Then i can see my flyer on home page
