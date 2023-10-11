# Airbnb No Split Stays

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/decemberthedeveloper)

## Abstract
This Chrome browser extension hides split-stays on Airbnb. Split stays allow you to stay at more than one location for a set period of time - for example, if you were looking for a place to stay in Amsterdam for two weeks, you might see several split stay options where you could stay at one rental for a few days and the other for the rest of the time. Unfortunately, there's no way to disable this, so I thought I would create a browser extension to give users more options.

Note: Currently this extension only works on airbnb.com, airbnb.es, airbnb.mx, airbnb.co.uk, airbnb.ca, airbnb.de, airbnb.fr, airbnb.it, and airbnb.com.br - but in the future I hope to add more of the Airbnb domain extensions.

## Tech Stack
This project uses vanilla JS, CSS, and HTML.

## Setup/Installation
You can clone the repo locally using `git clone`.

[This article](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked) offers detailed instructions on loading an unpacked chrome extension. You can navigate to the chrome extensions page via the puzzle piece icon in the toolbar. Enable "developer mode" on the top-right. From there, you can click "load unpacked extension" and choose the folder via the popup. You should then see the map marker icon appear in the toolbar. When you click on it, you can see "No Airbnb Split Stays."

From the Airbnb home page, you can make a search for a stay in any city. Then, you can zoom into an area with a few listings - as the number of listings decreases, you're more likely to see split stays without the extension. Even as you zoom in you should not see split stays - if you test the same city and the same stay length without the extension, you should see split stays. 

## Screenshots
Before:
![airbnbnosplitview_before2](https://github.com/garnetred/airbnb-no-splitstays/assets/59572865/b73f4db1-0b43-44b8-8315-dbc951413cdc)

![airbnbnosplitview_before1](https://github.com/garnetred/airbnb-no-splitstays/assets/59572865/d2f7a66e-f5ec-478d-a11f-4a32a605ba75)

After:
![airbnbnosplitview_after1](https://github.com/garnetred/airbnb-no-splitstays/assets/59572865/8f7d8692-0637-48c6-8480-e48416941814)

![airbnbnosplitview_after2](https://github.com/garnetred/airbnb-no-splitstays/assets/59572865/e195b2fc-d74a-4704-9b51-5c1a692e9750)


## Future Changes
At some point I hope to make all of my Chrome browser extensions cross-browser so that they work with Firefox as well.


