# Tomato varieties

### The brief
The project revolves around building an interface to present different varieties of tomatoes and let users rate them.
We need to quickly knock-up a responsive carousel for a demo this afternoon, and then iterate on it over the next few days. Therefore we're only focusing on a subset of requirements that matter most right now.

The UX team love the Bupa Health Information carousel http://www.bupa.co.uk/health-information and they are asking if we can build something similar.

### Basic requirements:
We have the following crude wireframe to work with:
![Tomato Slider Wireframe](/tomato-slider.png?raw=true)

1. We need to build a slider to showcase the varieties of tomatoes. Each slide should have an image, customer rating, and description (see wireframe).
2. On a maximized desktop (`min-width: 1140px`) 3 images should be visible within the main content area at a time. The slider should move one image at a time with an animation.
3. On mobile devices (`max-width: 480px`) the images should stack vertically only showing the first four images (no carousel functionality at this size).
4. Star ratings:
    - On hover, show the stars filling up as the cursor moves along. Star ratings must be clickable.
    - On selecting a rating, the selected value needs to be sent in an API request to the server (in this exercise, simulate this by logging to the console). Success is indicated by changing the colour and value of the rating control for a 5-second period, during which the rating control must not be interactive.
5. Accessibility is a major priority: The carousel and rating components must support keyboard operation, and the page should be accessible via screen readers.
6. If we can squeeze it in: 
    - the UX guys would really love the slider to loop infinitely (tomatoes should always appear in their original order).
    - the slider should stretch to the full width of the viewport, edge to edge, generating duplicate items as needed to fill the gaps, outside of the main content area items should be semi-transparent.
    - Free to experiment with the visuals if you have the time to do so; At minimum, assume that a detailed design (following the wireframe) will be coming in the next few days and will need to be implemented based on your code.

### Technical information

- A sample dataset of tomatoes is provided for your convenience in [data/tomatoes.yaml](data/tomatoes.yaml).
- A fairly bare-bones Grunt configuration is provided which compiles ES2015 to ES5, bundles JavaScript and compiles SCSS to CSS. You _may_ change it or even replace it entirely if you find it necessary to do so, but obviously keep in mind the time constraints.
    - `grunt` or `grunt build` builds the application.
    - `grunt serve` opens a local development server, with live reloading via Browsersync.
