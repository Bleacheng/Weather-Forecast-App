- Weather API: <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a>
- Geocoding from API Ninjas
- Location/Maps from Mapbox
- Time API for location timing

| Endpoint   | Input                                       | Output | Purpose                                  |
|------------|---------------------------------------------|--------|------------------------------------------|
| /login     | {username, password}                        |        | Login for user                           |
| /register  | {username, password, {city1, city2, city3}} |        | Register user                            |
| /passreset | {username, newpass}                         |        | Reset user's password                    |
| /addloc    | {username, {city1, city2, city3}            |        | Add cities to user's favourite/view list |
| /accdelete | {username, password}                        |        | Delete an account                        |
| /          |                                             |        |                                          |