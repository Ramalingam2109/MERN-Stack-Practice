1. What is HTML?
   HTML (HyperText Markup Language) is the standard markup language used to create and structure content on the web. It defines the skeleton of a webpage using tags and elements.

2. Why is HTML Used?
   To structure web content (text, images, links, forms).

To define headings, paragraphs, lists, and tables.

To embed multimedia (videos, audio).

Acts as the foundation for web development (combined with CSS & JS).

3. What is Emmet? List 5 Emmet Shortcuts
   Emmet is a toolkit for fast HTML/CSS coding.
   5 Emmet Shortcuts:
   ! -> for generating html boiler plate
   h1.main-heading -> to create a element with a class name of main-heading
   ul>li\*5 --> for creating a list of 5 childs
   a[href=#]{clicke me} --> <a href= "#">Click me</a>
   p#para-element --> creates a id with name para-element

Short cut to create html boilerplate
! or html + tab

structure of html

<!DOCTtYPE html>
<html>
<head></head>
<body></body>
</html>

head tag :
- used for storing title ,icon , stylesheets and extenral resources to display inside the body 
- stores meta information like , username ,author , keywords, description of the page .... 

body tag:
- Contains visible content (text based and media based )

Difference between elements and tags ? 
- tag consists of a opening and closing 
- element : the single keyword inside the tag 
eg: <p></p>  --> opening tag + closing tag
    p  --> element inside them 

CSS : Cascading style sheet

--> used for styling html elements both block level and inline level like colors , font properties or background properties
--> to create responsiveness to the structure 
 --> to create layouts using flex box and grids     


HOW TO CONNECT HTML & CSS

TAG USED - link 
Emmet Short cut -link:css

HOW TO GET FONT & COLOR , IMAGE, CDN

💡 Fonts - google fonts using the embed code and place it in head tag of html file 

💡 Color - using hex code of the required color 

💡 IMAGE - uploading in a cdn server for better caching 

💡 CDN - imagekit.io


WHen to use bg property and img 
- background property is used when there shoud be content to write above the image 
- img tag should be used to display some specific image and ensures seo ranking by using the alt property 

layout - used to adjust contents in horizontal and vertical directions

flex- flex is the proprty used to acheive layouts 
display: flex → Activates Flexbox.

justify-content → Horizontal alignment (center, space-between).

align-items → Vertical alignment (center, flex-start).

flex-direction → Row/column (row, column).

 What is Tailwind CSS & Why is it Used?

 tailwind css is a utility first framework used for rapid ui devalopment and responsive by default 
