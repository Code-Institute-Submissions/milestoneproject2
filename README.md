# Factors which affect education 

Deployed website: https://marksheehan72.github.io/milestoneproject2/

**The brief for this project is as follows:** 

>CREATE A DATA DASHBOARD 
>
>Build a data dashboard that visualizes a dataset of your choice.
>
>Your data can be stored locally (e.g., in a js file) or sourced from an API.
>
>Visualise your data using D3.js and dc.js

As such, I set about creating a single-page dashboard, using a dataset I obtained from [Kaggle](https://www.kaggle.com/spscientist/students-performance-in-exams), which would visualise the data contained within in an aesthetically pleasing and easily digestible manner for those viewing it.

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
 
# Wireframe
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

* Reset Button - resets all graphs on the page.

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

##### Researchers User Story: 

*Display data in visual format:* 

* Clear from the dashboard that this has been achieved.

* Also, Jasmine test for seeing if the charts loads passes. 



*Aesthetically pleasing graphs:* 

* Charts have either defined or predetermined colours, which add the the aesthetic of the site.

* Again, Jasmine test for seeing if charts load passes. 

 

*Inference on graphs:* 

* These can be seen with each graph/set of graphs in the dashboard.

* As all content loads (as per Jasmine test), these are garaunteed to load. 

 

*Data interacts with each other:* 

* Go to various graphs and the selector.

* Click on an element of these graphs/selector.

* See if the other graphs change to only display the data set seleted (e.g. females).

* For the specific example in the user story (math/reading correlation for females), we can see that by selecting the female bar in the gender bar chart, only the pink (female) dots are left on the statter graph.

* There are certains elements of graphs which do work in line with this interactivity (e.g. clicking one of the elements of the <strong>legend</strong> of the stacked bar chart), but all elements have a graph/chart/selector which allow us to get the specific intersection of data dimensions that one may want. 

 

##### Users User Story: 

*Understandable visualisations/Additional commentary:* 

* All graphs have inferences to add additional explanations.

* Jasmine test shows these will display. 


*Colour coded data:* 

* See "Researchers" point on "Aesthetically pleasing graphs".


*Selecting specific groups to isolate data to study:* 

* See "Researchers" point on "Data interacts with each other".


### Jasmine Testing:

Jasmine was used to test 3 things in particular for this project:

* That the data loaded for the project.

* That the content of the page also loaded.

* That a specific example of a graph (i.e. the gender bar chart) loaded. 


### Responsiveness of site: 

To aid in creating a responsive site, I used Bootstrap’s Grid System. Through the creating process of this dashboard, I would check the various break points to see if the column sizes worked with the design on various device screen sizes, using Chrome Dev Tools, my own iPhone 8 and an iPad Pro (10.5).


**Navbar:** The Grid system aided me here in placing the content where I wanted, in particular placing the reset button at the right-hand side of the navbar.
After adding the reset button, I needed to test various breakpoints to see which combination of col sixes and offset sizes worked best.

**Sections:** The Grid System aided me greatly in arranging the sections for each page. 
As I was creating each section, and the graphs and text within each, I experimented with various column sizes for each breakpoint. 
As the graphs are not responsive, this was necessary to see which layout suited both the content and the graph sizes best, while I also would adjust graph sizes to suit the desired layout, if possible. 

**Section Paragraph Text:** I also used a media query for the font size of the section paragraph text, as I felt that the original size (18px) was too big for mobile devices.

`@media (min-width: 767px) {
	.section-paragraph {
		font-size: 18px;
	}
}`

**Graphs/Charts:** 
As the charts created by using the DC library are not responsive, I tested various dimensions for each chart's width, height and radius to see which would work best for all screen sizes. 

The only charts which did not work well were the scatter plots, as there are quite a lot of data points in this sample set. As such, I added a hidden section (see Lines 153 - 155 of index.html) visible for xs screen sizes only which would advise users to rotate their devices to landscape to be able to see the entire graph on their screens (as shrinking the graph to fit mobile devices made the points too undistinguishable.

### Debugging:

**Reset Button:** Initially, the reset button reset all of the charts, but not the number displays. As such, I needed to create a custom function which would recall the makeGraphs function. 
As such, I needed to make studentData a global object, by inserting the following in the makeGraphs function:

`sd = studentData;`

I then created the reset function, as follows:

`function reset() {
    makeGraphs(null, sd);
}`

and linked it inline to the button element in index.html using the onClick function:

`<button class="btn btn-danger navbar-btn" onClick="reset();">Reset All</button>`


# Deployment 

I created a repository on GitHub, linking my project on Cloud9 to it. I committed and pushed content to this repository at various stages of the project (e.g. when I had a graph/set of graphs functioning correctly on the page, or when I had a section fully structured and styled). I went into the settings tab on GitHub, and under the GitHub section I changed the source to the master branch. This allowed me to generate a GitHub Pages site for my project. This was incredibly useful in testing the site, as outlined above.

# Credits 

### Content 

* The basic structure for the graph.js file and some of the CSS stylings (which I felt worked well with the dashboard I had created, but with slight alterations) were obtained from the dashboard project in the Interactive Frontend Module.

* The arrow glyphicon was sourced from [here](https://fontawesome.com/icons/arrow-circle-down?style=solid). 

* Aid for the number display function was obtained from my mentor (Mossa Hassan). 

* Aid for the second and third Jasmine Tests were obtained from [here](https://github.com/Migacz85/data-visualisation). 


# Media 

* The data obtained for this project was obtained from [Kaggle](https://www.kaggle.com/spscientist/students-performance-in-exams).

# Acknowledgements 

* I received some inspiration for this project from the dashboard project which was part of the Interactive Frontend Module.

 