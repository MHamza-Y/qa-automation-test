Feature: Google Searching

  Scenario: Search from the search bar produces correct links

    Given A web browser is at the Google home page

    When The user enters a movie name into the search bar

    Then link contatining movie name is shown on the results page