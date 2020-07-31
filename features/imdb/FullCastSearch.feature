Feature: See Full Cast

    Scenario: Clicking show full cast produces full cast list

        Given user on imdb page for some movie

        When user clicks See full cast 

        Then full cast list is shown