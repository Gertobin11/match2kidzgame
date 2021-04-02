# Manual Testing

My manual testing can be categorized into 3 sections. I have being testing throughout whenever I added a new section 
with [Chrome Developer Tools](https://developer.chrome.com/docs/devtools/) , the problems which I found have been logged throughout 
in my commits. Secondly when I deployed my page on GitHub Pages I sent it on to friends and family to try it out, they pointed out 1 or 2 grammatical errors,
and also when I tested on JSHint I had to declare variables. However when I declared them without attributing a value it caused a bug 
which caused every difficulty to have the same time, this was pointed out by a friends 6 year old son, So I declared the variables with the 
approriate values. 
Lastly I tested the site for the user stories and goals which I stated earlier and to check if the website works and behaves like it should ie. 
for functionality, usability and its responsiveness.

## Testing User Goals and User Stories
---
* Finding out how to play the game. I opened up the site and pressed the "how to play" button, this brought up a modal which explained 
how to launch the game and how to play it, closing this brought us back to the main window. Passed the test.[Screenshot 1](assets/images/test-images/home-how-to-play-cursor.jpg),
 [Screenshot 2](assets/images/test-images/how-to-play-modal.jpg)
* Starting the game fast. Within 2 clicks of arriving at the site through index.html you will be in the game. The first click will be on the 
play button , then this will take you to the choose your difficulty screen and after choosing your difficulty the game will start. [Screenshot 1](assets/images/test-images/home-page.jpg),
 [Screenshot 2](assets/images/test-images/choose-difficulty-screen.jpg), [screenshot 3](assets/images/test-images/game-on-screen.jpg) Passed the test.
* Being able to restart or replay the game. When the game finishes a modal will pop up up , it will be different depending on the outcomes. The options in 
these modals will be the same as you will have the 3 difficulty settings in the modal and a single click on these will start the game on the chosen 
difficulty. The try again button  and the play again button will bring you back to the game screen to choose your difficulty. [Screenshot 1](assets/images/test-images/game-won-modal.jpg),
[screenshot 2](assets/images/test-images/game-over-modal.jpg). Passed the test.
* Contacting the site owner. I set up a basic form with the users name, email address and a text area for the feedback they want to leave 
or any additional comments. I used EmailJS to send the site users details and feedback to my email. The alert when the email was sent also popped up.
This all worked as it it is supposed to. [Screenshot 1](assets/images/test-images/contact-form-with-emailjs.jpg), [screenshot 2](assets/images/test-images/contact-form-success-alert.jpg),
[screenshot 3](assets/images/test-images/email-response-from-feedback-form.jpg).
* Navigation. The navigation was an important aspect of the site as it was developed for kids. The big buttons provided a clear and easy method 
to navigate the site, I tested all the buttons and they linked correctly. The [navbar](assets/images/test-images/navbar-screen.jpg)also provided another means to get around the site 
which was clear and worked correctly.

 ## Functionality 
 ---
 To test for functionality I basically started at the homepage (index.html) , and clicked on how to play the game and the modal appeared as 
 it was supposed to. In the game itself when I clicked on a card it flipped over and stayed that way until I chose another card,
 then if they matched they stayed showing the card face, if they did not match they flipped back over. 
  Next I launched each gamemode (easy, medium and hard) and won the game on each difficulty and chose the various options 
 in the pop up modal. They all worked as required. Next to check if the timer was working as it should I launched each game and let the timer run 
 down, which upon reaching 0 the game over modal would pop up and I followed the links which all worked as intended. I also tried the contact page 
 where I entered details in the form and submitted it. I received the details through my email, as intended.
 The website functioned as intended, mainly because I was esting throughout which made the testing at the end alot smoother.


 ## Usability
 ---
 The game is intended for young kids so to check this I brought in my kids and a few of my frinds kids.
 They found the layout easy to navigate and the game easy to follow. I gave the game to my friends 6 year old son, and with no instruction he 
 was able to launch the game, play it and restart it. this shows me that the website and game is easy to use.

 ## Responsiveness
 ---
 I was testing the responsiveness of the website throughout the development of it with Chrome Dev tools, which 
 lead me to the decision to change the structure of the game from 16 tiles to 12 as when the screnn was reduced, 
 the user had to scroll to see all of the cards which lead to a bad user experience. I based the responsiveness of the website through bootstrap 
 and media queries. The devices I tested the game on were my 17 inch laptop screen , my mobile phone one plus 8t, my partners xaomi poco, 
 and my brothers lenovo tablet, I have included some screenshots of the mobile view [1](assets/images/test-images/screenshot-oneplus-1.jpg), 
 [2](assets/images/test-images/screenshot-oneplus-2.jpg), [3](assets/images/test-images/screenshot-oneplus-3.jpg), 
 [4](assets/images/test-images/screenshot-oneplus-4.jpg).I also have screenshots of the desktop view to compare views [1](assets/images/test-images/home-how-to-play-cursor.jpg) 
 , [2](assets/images/test-images/game-on-screen.jpg). I think the game resonds well to the shift in display areas,
 as all the content is displayed properly and clearly.

