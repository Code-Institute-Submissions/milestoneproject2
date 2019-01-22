# Educational factors - a sample... 

Deployed website: https://marksheehan72.github.io/milestoneproject2/

**The brief for this project is as follows:** 

>CREATE A DATA DASHBOARD 
>
>Build a data dashboard that visualizes a dataset of your choice.
>
>Your data can be stored locally (e.g., in a js file) or sourced from an API.
>
>Visualise your data using D3.js and dc.js

As such, I set about creating a single-page dashboard, using a dataset I obtained from https://www.kaggle.com/spscientist/students-performance-in-exams, which would visualise the data contained within in an aesthetically pleasing and easily digestible manner for those viewing it.

This included laying out the various pieces of information in different sections, so that users could easily locate the statistics which are useful to them, adding colour (e.g. gender colours) to aid the aesthetic, and adding inference commentary to aid the user in understanding what the graphs are telling us.
 

# UX 

This website has two primary parties involved –  Those who conducted the research and want to visualise it, and those who want to view the results of the research. The user stories for these parties are as follows:

**Researchers:** 
* We want to display the data in visual format.
* We want to display the data in a way which is aesthetically pleasing and easily demonstrates the results.
* We want to add inferences (commentart) to the graphs, to clearly explain what the results of the data are and what the graphs are telling us.
* We want the data to interact with each other, so that users can see various links between data (e.g. corellation between math and reading scores for females in the data set).

**Users:**  
* We want to be able to get easily understandable visualisations of the data in this study.
* We want to have additional commentary on the data with inferences to see what is happening in various areas of education, according to this study's sample.
* We want various groups of data to be colour coded to ease the cross examination of data.
* We want to have a feature on this website to allow us to select various groups of data which would change all graphs on the page so that the group we want to study in detail is isolated.
 
# Need to insert wireframe
Please see the [*Wireframes*](https://github.com/MarkSheehan72/monkees/tree/master/wireframes) directory in the project for wireframes of each page of the project. 

# Features 

**Existing Features** 

* Number display – displays the number of each gender in the survey as a percentage.

* Bar charts - represents data as bars on a chart (here used for gender split and race/ethnicity split in the data set).

* Pie charts - represents data as segments of a circle (here used to show the gender split within the results for each subject).

* Parental level of education selector - allows users to select a specific parental level of education, which filters the other charts on the page (and is specifically to be used with the race/ethnicity bar chart with it).

* Stacked bar chart - represents the parental level of education as percentages according to the race/ethnicity.

* Scatter graphs - show the correlation between the various subjects.

* Line graphs - show the difference between the average score achieved by those who completed the test preparation course and those who did not.

**Features Left to Implement** 

* Adding nav tabs to the navbar on the top of the page, which will allow users to jump to a specific section.

# Technologies Used 

**HTML** 

The project uses [HTML](https://en.wikipedia.org/wiki/HTML5) to structure the site. 

**CSS** 

The project uses [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) to style the site. 

**Javascript**

The project uses [Javascript](https://en.wikipedia.org/wiki/JavaScript), in particular DC, D3 and Crossfilter libraries, to add interactivity (in particular, charts and a selector) to the site. 

**Bootstrap 3.3.7** 

The project uses [Bootstrap](https://getbootstrap.com/docs/3.3/getting-started/) to aid in both the styling (Bootstrap CSS and Components) and structure (Grid System) of the site, as well as aiding to create a responsive design (also through the Grid System). 

**FontAwesome** 

The project uses [FontAwesome](https://use.fontawesome.com/releases/v5.6.3/css/all.css) to add an arrow glyphicon to clearly mark the selector element on the page.

**DC/D3/Crossfilter**

The project uses [DC](static/js/dc.min.js), [D3](static/js/d3.min.js) and [Crossfilter](static/js/crossfilter.min.js) to add interactive charts (including number displays and a selector) to the site.

# Testing 

### Scenarios: 

##### Monkees User Story: 

*Promoting music – Intro, audio and video clips:* 

* Go to the "Home" page 

* See if the intro text and video appear. 

* Click on the video and see if it plays (also see if audio from video is also present). 

* Go to the “Catalogue” page. 

* See if the audio clips appear for each of the four songs. 

* Click on each audio clip to ensure that they work and that audio can be heard. 

 

*Giving information on the band:* 

* Go to the “About" page 

* See if each of the four sections appear. 

* Click on each band member’s picture to see if the corresponding Wikipedia link opens in a new tab. 

 

*Giving information on the band’s ability to perform at functions (weddings/Christmas parties):* 

* Go to the “Functions" page 

* See if each of the two sections (weddings and Christmas parties) appear. 

* Hover over the download icons in each section to ensure that the animation occurs. 

* Click on each icon to ensure that the corresponding pdfs open in new tabs. 

 

*Booking the band for functions:* 

* Go to each page to see if the contact icon appears in the footer of each page. 

* Hover over the icon on each page to ensure the animation works. 

* Click the icon on each page to see if it takes you to the “Contact Us” page. 

* Go to the “Functions" page 

* See if the “Book Us” button appears at the bottom of the section. 

* Hover over the button to ensure the animation works. 

* Click on the button to see if it takes you to the “Contact Us” page. 

* Hover over the download icons in each section to ensure that the animation occurs. 

* Click on each icon to ensure that the corresponding pdfs open in new tabs. 

* Go to “Contact Us”. 

* Press “Send Request” button with fields missing to see if an error message pops up. 

 

##### Established Fan User Story: 

*Accessing social media:* 

* Go to each page to see if the social media icons appear in the footer of each page. 

* Hover over each on each page to ensure the animation is working. 

* Click on each icon to see if the corresponding social media site opens in a new tab. 

All other scenarios for this user group have been tested through “The Monkees User Story” scenarios (see “UX” section for more details). 

 

##### New Users User Story: 

All scenarios for this user group have been tested through “The Monkees User Story” and “Established Fans User Story scenarios (see “UX” section for more details). 

 

### Responsiveness of site: 

To aid in creating a responsive site, I used Bootstrap’s Grid System. Through the creating of each page, I would check the various break points to see if the column sizes worked with the design on various device screen sizes, using Chrome Dev Tools, my own iPhone 8 and an iPad Pro (10.5). 

 

**Header:** I have 5 buttons that I wanted to arrange differently for the various device sizes so that these were still visible and prominent. As such, I had them in a line on desktop, two rows with 2 on top and 3 on the bottom at tablet view, and three rows with the home button on top (to show its importance as the index page), with 2 then on the other 2 rows. I felt that this was the most visually pleasing way of arranging them, while also still displaying the order of importance of these buttons through sizes and row placements (top row being most important). 

 

**Sections:** The Grid System aided me greatly in arranging the sections for each page. 

In the “About” page, I had an interesting issue where one of the sections was moving to the next row unexpectedly. It turned out that the width of one of the images I used (although was being resized in the browsers) was causing the issue, and resizing the jpeg file in Cloud9 alleviated the issue. 

The images and video were causing some issues sizing wise for different devices, mainly at mobile level. Through researching methods to alleviate this, I found that adding height: auto; with a specified width (either 100% or 50%) allowed these elements to automatically resize for different mobile screen sizes, thus solving my issue. 

Due to the arrangement I wanted for the sections in the “Functions” page (where the first section had the image first and the second section had the image last), I saw that although it looked fine for tablets and desktops, at mobile level it looked a bit strange. As such, I copied the text div of the second section and placed it after the image, adding hidden-xs  to the first div, and hidden-sm, hidden-md, hidden-lg to the second, so that the text would appear before the image on mobile, while keeping the desired design for all other devices. 

 

**Footer:** The Grid system once again worked well to get the three sections I wanted for the footer, horizontally on desktop and tablet, and vertically on mobile. However, I encountered an issue where the footer was not staying at the bottom of the page, due to the section not filling the page (e.g. the “Home” page). My tutor recommended that I fix the footer to the bottom, which did sort the issue, but I did not like the feel of it on all device sizes. As such, I kept the fixed footer on desktop, but removed this property on mobile and tablet, where I felt it looked quite bulky and obtrusive to the page content. 

 

# Deployment 

I created a repository on GitHub, linking my project on Cloud9 to it. I committed and pushed content to this repository at various stages of the project (e.g. when I had the structure of a page completed or when I had a page fully structured and styled). I went into the settings tab on GitHub, and under the GitHub section I changed the source to the master branch. This allowed me to generate a GitHub Pages site for my project. This was incredibly useful in testing the site, as outlined above, and also in relation to file paths for the media I was using on the page. This was as a result of using the file paths given by Cloud9 (by right clicking the media item and selecting “Copy file path”, which worked on the Cloud9 preview, but did not work on the deployed GitHub Pages page. As such, I needed to investigate this, and found some great feedback on slack, directing me to change /assets/ to ../ in order to move up a directory so that I could then have my file path going into the images directory and then to my desired image (or video directory for the video in that case). 

# Credits 

### Content 

* The code for the social links in the footer and their animation was copied from the Resume Project (although colours were altered to fit the theme). 

* The *hr* styling was obtained from https://stackoverflow.com/questions/4151743/how-i-change-the-thickness-of-my-hr-tag. 

* The Google Fonts Copyright Glyphicon was obtained at https://glyphicons.bootstrapcheatsheets.com/#. 

* The video auto sizing was obtained from https://www.w3schools.com/css/css_rwd_videos.asp. 

* The code for the contact form was obtained from the Resume Project (although text and margins were altered). 

* Aid for maintaining a fixed footer in desktop view was received from my mentor (Mossa Hassan) and from https://www.w3schools.com/css/css_rwd_videos.asp (in particular adding padding to the bottom of the body and setting a matching height to the footer).      

# Media 

* The photos and videos used in this site were obtained from https://github.com/Code-Institute-Org/project-assets (except for background.jpeg, which was obtained from https://cdn.pixabay.com/photo/2016/01/21/04/14/color-1152782_960_720.jpg.   

# Acknowledgements 

* I received some inspiration for this project from solomonj2k12/The-Official-Monkees.

 