# etch-a-sketch

In this project, I’ll be creating a pretty neat toy for my portfolio to flex my DOM manipulation skills. I'm going to build a browser version of something between a sketchpad and an Etch-A-Sketch.


Tasks:

Start new GIT repo - DONE
Create blank HTML and link to external script.js file - DONE
Create a webpage with a 16x16 grid of square divs - DONE
Add buttons and inputs to allow user to set a new grid size and to reset the grid back to the initial 16x16 - DONE
Set up a “hover” effect so that the grid divs change color when your mouse passes over them - 
Push the project to GitHub - 

Challenges:
It took while to figure out that the best approach for creating the grid was to use CSS Grid. Originally I intended to use Flexbox but CSS Grid is much better suited as it works better with 2D layouts.

I had to spend some time learning about CSS Grid before coming back to use it in this project. 

I began by hard coding in multiple divs to get my basic layout working with HTML and CSS. I spent some time adding and modifying the appropriate CSS.

Once I was happy that I had figured out how CSS Grid worked I then set about writing the javascript to create the divs. 

The first challenge here was to figure out how to set up a default 16x16 grid using JS. This was carried out using a function that takes an argument size (width of grid) and then loops over the size*size total and creates a div each time. For the initial default grid the size is 16. 

A second function was created to allow for the grid size to be changed. An input field takes a number from 1 to 100 and an event listener was added to a button. The function takes the inputted number and changes the grid size accordingly. The CSS for the grid template columns was changed using this function also. When I had the function created I realised that clicking the button simply added divs. I needed to created another function to clear all the divs out first before then creating the new grid. The clear function lops over all elements and the removes them utilises the removeChild method.

A function to reset the grid to 16x16 was required. An event listener was added to a new "reset" button and this called the reset function which itself called the clear function, and the create grid function with 16 set as the size parameter.