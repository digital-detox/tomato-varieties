# Tomato varieties

### The brief
The project is in it's early stages, but revolves around building an interface to present different varieties of tomatoes.
We need to quickly knock-up a responsive carousel for a demo this afternoon. Nothing too fancy (e.g. touch gestures) just a proof of concept.
The UX team love the Bupa Health Information carousel http://www.bupa.co.uk/health-information and are asking if we can build something similar.

### Basic requirements:
We have the following crude wireframe to work with:
![Tomato Slider Wireframe](/tomato-slider.png?raw=true)

1. We need to build a slider to showcase the varieties of tomatos, there is no design so feel free to experiment (following the basic structure of the wireframe).
2. Each slide should have an image, customer rating and description (see wireframe).
3. On a maximized desktop (min-width: 1140px) 3 tomatoes should be visible within the main content area at a time, and the slider should move 1 tomato at a time with an animation.
4. On mobile devices (max-width: 380px) the tomato items should stack vertically only showing the first four tomato items (no carousel functionality at this size).
5. Demonstrate the star rating interaction, on hover we show the stars filling up as the cursor moves along.
5. If we can squeeze it in: 
    - the UX guys would really love the slider to loop infinitely (tomatoes should always appear in their original order).
    - the slider should stretch to the full width of the viewport, edge to edge, generating duplicate items as needed to fill the gaps, outside of the main content area items should be semi-transparent.
    - on selecting a star rating, change the rating to match what was selected.
