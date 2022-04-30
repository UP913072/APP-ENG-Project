# Application Engineering Project notes

## Setting up the project

1. Unzip the project file

2. Express install to add all website dependency

3. Run: npm start -> via localhost:8080

## To do / Goals

- Setup Linting
-  Navigation bar
- Browse (Takes you to catalogue of available items for purchase)
- Bonsai page
- Log-in (auth0)
- Checkout / Shopping cart -> show prices of products added all together.
- Simulated checkout

## Future work

- Clean up website, improve UI. More specifically the navigation bar and overall feel and look.
Admittedly looks pretty lacking in appearance department.

- Implement log-in functionality

- When basket in the navigation bar is clicked, it is added to basket. Need to fix this inorder to improve stability.

- Add bonsai building instructions for the bonsai page, and add a bigger focus on bonsai as the client asked to promote it as a special.

- Index2.mjs: Line 4 and line 66 needs fixing as fetch and alert function shows as undefined.
However, the website still runs.

- When an item is added, it can only be added once, but quantity can be played around with inside the basket.
In the future, I need to make it so that the quantity can be added the more I click on 'add to cart'.
I did manage to make it so that the items are removable from the basket when the the picture is selected.
Item quantity can also be decreased or increased with an optional + and - button inside the basket.
In addition, the amount of an item is restricted to how much I set inside data.mjs. This limits the user to adding only a specificed max level of quantity that I have assigned.

- Use svg format for images, use SVG sources and lecture next time

- Need to optimise localstorage so that quantity levels of the selected items remain when adding to basket and moving to another page.

- center the add to cart buttons in the browse page to improve symmetry and alignment.

- - Add an actual popup/simulated purchase next time with the objective of thanking the user for purchasing after proceed to checkout is clicked on. 
https://www.youtube.com/watch?v=LaPPZ6SMa5s&ab_channel=CodingwithJan-ShopifyDeveloper

### Stuff used

* Node
* Express (server)
* Github (to push project)   

### Referencing

- All items/products found for sale in index.html sourced via:
Brickset home page. (n.d.). 
Brickset.com. Retrieved March 23, 2022, 
https://brickset.com/


- Linting via App Eng Lecture:
Application Engineering - Starting a new project with linting, unit testing, Git and Github Actions. (n.d.). 
Www.youtube.com. Retrieved March 2, 2022, 
from https://www.youtube.com/watch?v=tjWjqFJAiA0&ab_channel=SoftEng


- shopping cart setup based from: 
Create a Shopping Cart With Vanilla JavaScript | ES6. (n.d.).
 Www.youtube.com. Retrieved April 1, 2022, 
 from https://www.youtube.com/watch?v=UcrypywtAm0&t=415s&ab_channel=CodeExplained


 - Local storage implementation inspired from App Eng Lecture:
Application Engineering / Web Programming - In-browser storage / bonus drag and drop. (n.d.). 
Www.youtube.com. Retrieved April 19, 2022, 
from https://www.youtube.com/watch?v=Dwz2F-iBnCw&ab_channel=SoftEng


 - Learned how to use iframe (embed youtube):
 HTML iframe tag. (n.d.). 
 Www.w3schools.com. Retrieved April 23, 2022
 https://www.w3schools.com/tags/tag_iframe.asp
