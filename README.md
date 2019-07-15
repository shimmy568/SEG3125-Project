# UI Project

## Pages

This will just be a quick overview of the pages on our demo and what each one of them does

### Main Page

This is the landing page for the site. This is responsible for letting the user enter in the username(s) that they want to view and sending them to either SingleView or MultiView to view the info on the users.

### SingleView

This page is at "/single" and uses the "user" query param to get the username of the person that it needs to display for. It will display the information for a single user for the site and give a link to that users github profile page.

### MultiView

This page is at "/multi" and uses query parameters in the format of "user<n>" where <n> is a number from 0-4 (since the page is only designed to compare up to 5 github users at a time). This page will allow the user to compare multiple github users to each other. With some generic stats.
