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
Please see the [*Wireframes*](https://github.com/MarkSheehan72/milestoneproject2/tree/master/wireframes) directory in the project for wireframes of each page of the project. 

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

# CONTINUE HERE!!

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

To aid in creating a responsive site, I used Bootstrap’s Grid System. Through the creating process of this dashboard, I would check the various break points to see if the column sizes worked with the design on various device screen sizes, using Chrome Dev Tools, my own iPhone 8 and an iPad Pro (10.5).


**Sections:** The Grid System aided me greatly in arranging the sections for each page. 
As I was creating each section, and the graphs and text within each, I experimented with various column sizes for each breakpoint. 
As the graphs are not responsive, this was necessary to see which layout suited both the content and the graph sizes best, while I also would adjust graph sizes to suit the desired layout, if possible. 

**Section Paragraph Text:** I also used a media query for the font size of the section paragraph text, as I felt that the original size (18px) was too big for mobile devices.

@media (min-width: 767px) {
	.section-paragraph {
		font-size: 18px;
	}
}

**Graphs/Charts:** 
As the charts created by using the DC library are not responsive, I tested various dimensions for each chart's width, height and radius to see which would work best for all screen sizes. 

The only charts which did not work well were the scatter plots, as there are quite a lot of data points in this sample set. As such, I added a hidden section (see Lines 150 - 152 of index.html) visible for xs screen sizes only which would advise users to rotate their devices to landscape to be able to see the entire graph on their screens (as shrinking the graph to fit mobile devices made the points too undistinguishable.



# Deployment 

I created a repository on GitHub, linking my project on Cloud9 to it. I committed and pushed content to this repository at various stages of the project (e.g. when I had a graph/set of graphs functioning correctly on the page, or when I had a section fully structured and styled). I went into the settings tab on GitHub, and under the GitHub section I changed the source to the master branch. This allowed me to generate a GitHub Pages site for my project. This was incredibly useful in testing the site, as outlined above.

# Credits 

### Content 

* The basic structure for the graph.js file and some of the CSS stylings (which I felt worked well with the dashboard I had created, but with slight alterations) were obtained from the dashboard project in the Interactive Frontend Module.

* The arrow glyphicon was sourced from: https://fontawesome.com/icons/arrow-circle-down?style=solid 

* Aid for the number display function was obtained from my mentor (Mossa Hassan). 

# Media 

* The data obtained for this project was obtained from https://www.kaggle.com/spscientist/students-performance-in-exams

# Acknowledgements 

* I received some inspiration for this project from the dashboard project which was part of the Interactive Frontend Module.

 