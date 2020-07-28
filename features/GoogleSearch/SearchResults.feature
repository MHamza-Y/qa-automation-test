Feature: Google Searching

  Scenario: Search from the search bar produces correct links

    Given A web browser is at the Google home page

    When The user enters "After Life" into the search bar

    Then link contatining "After Life (TV Series 2019– ) - IMDb" is shown on the results page