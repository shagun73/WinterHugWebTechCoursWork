INTRODUCTION:
For the completion of this unit Web-Technologies, we have developed a website for a non-profit
organisation called Winter-Hug. This organisation collects clothes from local people and students around
the university area and distribute them to help vulnerable and less fortunate population of Bristol to fight
winters.
This was our first hands-on experience with all these technologies and we are now very confident that be
it any kind of web-site design, we will be able to make it. We have analysed the breadth of the project in
the sections followed. Also, we give our website following grades as mentioned below.

1. HTML (A for HTML)
2. CSS (A for CSS)
3. JAVA SCRIPT OR JS (A for JS)
4. PNG (A for PNG)
5. SVG (A for SVG)
6. SERVER (A for Server)
7. DATABASE (A for Database)
8. DYNAMIC PAGES (A for Dynamic Pages)
9. DEPTH (? For depth)

1. HTML
-Our main page of the website is index.html whereas the admin can login from login.html.
-We have 18 XHTML pages designed from scratch. 13 are main website pages and 5 are for admin
(in admin folder). We haven’t used any framework for this website development.
-We have used w3 organizations validator (https://validator.w3.org/) and hence all the web-pages
of our site are checked for standards.
-All the web-pages were developed on a computer with resolution 1280*720, but are made
responsive to the different screen sizes. We used mobile view feature of opera browser to check
the screen appearance on different mobile phones available like iPhone 5 and nexus p.
-We developed our website using browsers like chrome and opera mainly. But also tested on other
browsers like IE and safari.
-Most of the website is text only and hence convenient for the disabled people.

2. CSS
-All the styling content is written by us in a single file named style.cssin css folder, following do’s
and don’ts told in lectures.
-No style tag were used within HTML.
-Nearly all the dimensions are defined in percentages.
-The script is validated using W3C CSS validator (https://jigsaw.w3.org/css-validator/validator).
-We have played with very many attributes of CSS and discovered their interesting different
behaviors, like of transitions, content behaviors with respect to different width of browser.
-We gained knowledge about the restrictions on use of CSS on different browsers.

3. JAVA SCRIPT
-We have written all the JS code ourselves.
-We have a client side validation and asynchronous calls using the JavaScript.
-We gained better knowledge of the server client interaction.
-We used JQuery for most of the JavaScript part. We started with using the regular JavaScript but
liked using JQuery over it as being more convenient and easy to use.
-We avoided using the on attributes, abbreviated script tags and used strict(database.js) wherever
required.

4. PNG
-We created all the images used in the website. Images used in header background are captured
by us through our mobile camera.
-Apart from header background images all the images are in PNG format. We chose those as JPG
as we required them to be big and PNG images are hard to compress.
-We used gimp to modify the images. We used featureslike scaling, cropping, change in color and
contrast. Apart from that, we used advanced features like Gaussian blur, layer mask to create
images for the website.

5. SVG
-We used ink space for the vector drawing. We created social media icons and other images like
icons for menu on index.html page.
-We used it for the first time and gained a good knowledge by playing around with it.

6. SERVER
-We have created all of the server by ourselves from scratch.
-Instead of keeping all the server in a file we divided it into 4different parts i.e. index.js, server.js,
router.js, requesthandler.js. We did so to reduce the complexity.
-We gave a lot of time to build it and didn’t used any framework. All the Important points are met
in server with all necessary checking, validation, handling utf-8, url validation and various security
issues.
-We tried to cover all necessary things taught about server in lectures.
-We also tried to implement cookies, session and hosting on cloud but these 3 remained challenge
for us and left incomplete.

7. DATABASE
-We have manually created our database using DB Browser for SQLite.
-We have taken care that data remains secure by following guidelines given in slides.
-We have created our database on server which is separated from other modules and accessing it
from there.
-We are inserting data in the database for admin, news section, blogs and retrieving this
information on different web pages. Like admin can post the news and blogs related to the site
and these are displayed to the users in different sections of the website.
-We were also able to take care of the callbacks to make things work in right order.
-Details of handling data: pages make call to the server using some functions, these functions have
their definition in request handlers on server which makes further call to a database file which
have all the database interacting functions. All the results are obtained asynchronously.

8. DYNAMIC PAGES
-We have generated dynamic web-pages, like for sections like news and blogs.
-For these web-pages, there is dynamic organized delivery system which is used to provide data
dynamically.
-For all the dynamic content, we have written all the script code our self which looks complex
initially. But after reading and practically implementing things, we were able to do well.
-We have also used google maps. But due to its problem with XHTML the marks and scrolls are not
visible. We were successfully able to implement it on html version of page.
