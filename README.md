# Rule of Thumb App

The app <b>Rule of Thumb</b> tm. tracks the sentiment of their users on trending and controversial people from different fields, including politics, business, media and entertainment, etc. The website has the following requirement: they need to present their users with an easy way to share their opinion on each presented celebrity, using votes (thumbs up and down), and display the results to the user while the poll is open. These features should be available to all users, regardless of where they're accessing the website from, whether it's a smartphone, a tablet or a desktop computer.
___   

#### App design Requirements:
    https://github.com/zemoga/ui-test   

___   

## Acceptance criteria:  
✅ Mobile prototype.  
✅ Tablet prototype.  
✅ Desktop prototype.  
✅ Mobile version only shows a horizontal scrolling list of cards.  
✅ in Tablet/Desktop version, user can switch LIST/GRID view.  
  > If list view selected, then cards will be stacked vertically.  
  > If grid view selected, then cards are positioned as grid elements.  

✅ Each card contains a functional gauge bar showing votes as percentage.  
✅ Each card contains three buttons, "thumbs UP", "thumbs DOWN", "Vote now".  
✅ Pressing "thumbs UP" or "thumbs DOWN" will highlight its border in white color, and will enable "Vote now" button.  
✅ if "Vote now" button is pressed, then the vote will be posted.  
✅ after pressing "Vote now" button, an eyebrow text will show "Thank you for your vote", with an enabled "Vote again" button.  
✅ The gauge bar will reflect changes after a vote is sent.  
✅ if "Vote again" button is pressed, then will enable voting buttons again.  
✅ all posted button are persistent (json server).  
✅ if user voted or enable voting again, those changes will persist if refreshing the browser.  
✅ some unit test were implemented with jest (npm run test).  

#### Steps to Test in local machine.

1. execute command <code>npm install</code>
2. execute command <code>npm start</code>
(* This command has been modified in package.json, to run in parallel: Json Server & react-script start )
3. to execute tests, you can use command <code>npm run  test</code>

___   

#### dev-dependencies:
- "json-server": "^0.16.3" (It was configured to serve on port: 3001/data, check package.json )


<!-- Social networks section -->

<br>
<br>
<table>
  <tr>
    <td>
      <img
        src="https://avatars.githubusercontent.com/u/65184918?v=4"
        width="150px"
      />
    </td>
    <td>
      <img
        src="https://github.com/ronniebm/holbertonschool-web_front_end/blob/master/qr-code.png"
        width="150px"
      />
    </td>
  </tr>
</table>

<h3>
  <b>👋 Hi, I'm Ronnie Barrios.
  </b>
</h3>
____________________________________
<br>
Let's get in touch !, scan this QR code.
<br><br>

<a href="https://twitter.com/ronniealberto">
  <img 
    src="https://pics.freeicons.io/uploads/icons/png/20422544081555590088-512.png"
    width="30px"
  />
</a>
&emsp;

<a href="https://www.linkedin.com/in/ronniebm/">
  <img 
    src="https://pics.freeicons.io/uploads/icons/png/15792152941556105325-512.png"
    width="30px"
  />
</a>
&emsp;

<a href="https://github.com/ronniebm/">
  <img 
    src="https://pics.freeicons.io/uploads/icons/png/13702699181561032680-512.png"
    width="30px"
  />
</a>
&emsp;
<br>
<a href="mailto:ronnie.coding@gmail.com?subject=Let's do a meet ! &amp;body=Hi Ronnie, %0D%0A%0D%0A I've check your Github profile, i would like to contact you.%0D%0A%0D%0A Att,%0D%0A------------------------%0D%0A***your sign*** &amp;">
<br>
--->&emsp;or Send EMAIL here&emsp;<---
</a>
