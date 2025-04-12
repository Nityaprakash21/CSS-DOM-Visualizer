# CSS DOM Visualizer Project
**Interactive DOM Tree Visualization**
=====================================

**Overview**
------------

This project is an interactive visualization of the Document Object Model (DOM) tree, allowing users to explore and understand the structure of HTML documents. The visualization is rendered using D3.js and is interactive, enabling users to toggle different node types and adjust the visualization settings.

**Features**
------------

* **Interactive Visualization**: The visualization is interactive, allowing users to hover over nodes to view their properties and relationships.
* **Node Type Toggles**: Users can toggle the display of different node types, including element nodes, text nodes, and comment nodes.
* **Dark Mode**: The visualization can be switched to dark mode for improved readability.
* **Editable HTML**: Users can edit the HTML code in the provided editor, and the visualization will update in real-time.

**Usage**
-----

1. Open the `index.html` file in a web browser to view the visualization.
2. Edit the HTML code in the editor to update the visualization.
3. Use the toggle buttons to adjust the visualization settings.
4. Hover over nodes to view their properties and relationships.

**Technical Details**
--------------------

* **Libraries**: The project uses the following libraries:
	+ D3.js for visualization
	+ Ace.js for the HTML editor
	+ Split.js for layout management
* **Scripts**: The project includes the following scripts:
	+ `consts/node-types.js`: defines node type constants
	+ `init.js`: initializes the visualization and editor
	+ `vis.js`: renders the visualization
	+ `index.js`: handles user interactions and updates the visualization

**Author**
--------

Nitya Prakash Pattanaik
