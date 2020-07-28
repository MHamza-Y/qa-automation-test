Feature: See Full Cast

    Scenario: Clicking show full cast produces full cast list

        Given user on movie page for "After Life"

        When user clicks See full cast 

        Then full cast list of "65" members is shown