# cricket-api-info
API's to fetch data from database

This project consists of 2 API's: Get Current Matches and Get Current Scores.

The Get Current Matches API returns the entire list of ongoing cricket matches.

URL: https://cricket-api-info.herokuapp.com/currentMatches

Sample Response:

[
    {
        "MATCH_ID": 1130744,
        "TEAM_1": "Bangladesh",
        "TEAM_2": "Sri Lanka",
        "MATCH_TYPE": "Test matches",
        "MATCH_DETAILS": "1st Test at Zahur Ahmed Chowdhury Stadium, Chittagong",
        "MATCH_URL": "https://www.espncricinfo.com/series/18527/game/1130744/bangladesh-vs-sri-lanka-1st-test-sl-in-bdesh-2017-18/",
        "MATCH_DATE": "Jan 31-Feb 4, 2018",
        "MATCH_STATUS": "Stumps - Bangladesh won the toss and elected to bat"
    },
    {
        "MATCH_ID": 1134200,
        "TEAM_1": "Burgher Recreation Club",
        "TEAM_2": "Saracens Sports Club",
        "MATCH_TYPE": "Premier League Tournament Tier A",
        "MATCH_DETAILS": "Super Eight at Colts Cricket Club Ground, Colombo",
        "MATCH_URL": "https://www.espncricinfo.com/series/8830/game/1134200/burgher-recreation-club-vs-saracens-sports-club-super-eight-premier-league-tournament-tier-a-2017-18/",
        "MATCH_DATE": "Jan 31-Feb 3, 2018",
        "MATCH_STATUS": "Stumps - Saracens Sports Club trail by 118 runs with 6 wickets remaining in the 1st innings"
    }
]

The Get Current Scores API takes in the Match id as a query parameter and returns the current scores of the respective match with match details

URL: https://cricket-api-info.herokuapp.com/currentScores?id=1130744

Sample Response:

[
    {
        "teamScores": {
            "teamOne": "None",
            "teamTwo": "None"
        },
        "batsmen": [
            {
                "batsmanName": "Mominul Haque",
                "batsmanScore": "175(203)",
                "batsmanBoundaries": "16x4 - 1x6",
                "batsmanStrikeRate": 86.2069
            },
            {
                "batsmanName": "Mahmudullah",
                "batsmanScore": "9(20)",
                "batsmanBoundaries": "2x4 - 0x6",
                "batsmanStrikeRate": 45
            }
        ],
        "bowlers": [
            {
                "bowlerName": "RAS Lakmal",
                "bowlerOvers": 17,
                "bowlerMaidens": 3,
                "bowlerRuns": 43,
                "bowlerWickets": 2,
                "bowlerEconomy": 2.52
            },
            {
                "bowlerName": "HMRKB Herath",
                "bowlerOvers": 20,
                "bowlerMaidens": 1,
                "bowlerRuns": 100,
                "bowlerWickets": 0,
                "bowlerEconomy": 5
            }
        ],
        "matchStatus": "Stumps - Bangladesh won the toss and elected to bat",
        "match": "Bangladesh v Sri Lanka, 1st Test at Zahur Ahmed Chowdhury Stadium, Chittagong",
        "matchId": "1130744"
    }
]
