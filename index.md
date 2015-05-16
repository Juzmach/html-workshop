---
layout: default
---

* TOC    
{:toc}
{: .toc}

# Introduction

Welcome to the HTML Workshop material site. This site is made specifically for the workshop held in May 2015 for Aalto university's economics students, but the material is free for everyone to use. The materials are aimed for people who have no prior experience in HTML, CSS, JavaScript or website development in general. 

Web development is a huge subject nowadays. In fact it is so huge that there is an entire world built around it. And it's growing constantly, as businesses and services are migrating to web. Because of this, we can't possibly go over everything there is to web development in our limited time. What we are going over in this workshop are the very basic topics that build the very foundation of today's web.

The goal of this workshop is to get you off to a good start on learning web development.

# Setting up the environment

Let's go shortly over the basic tools we're using.

## Tools we're using

Creating websites do not require any fancy equipment. You only need a text editor and a browser! Most web developers have started their journey writing everything in Windows Notepad.

However, today there are a plethora of different editors and IDEs (Integrated Development Environments, basically editors with more complex features) that one can use, everyone of them has their own merits and downsides.

For our workshop, the choice of tools is limited by our location. I've found two editors that are suitable:

### Notepad / Gedit / TextEdit

The obvious one that is found on any Windows machine. On linux the alternative is Gedit and TextEdit on OS X. It's also very lightweight, but the reason is neglected by real development teams is that it lacks finer features that many other editors have, like syntax highlighting.

Typical workflow with Notepad includes writing the HTML, CSS and JavaScript files in Notepad (making sure to save them with `.html`, `.css` and `.js` filetypes respectfully), and opening the `.html` files with a web browser. 

### Cloud9 - A Browser-based IDE

![Cloud9 Home Page](assets/c9io-home.png)
Cloud9 Home Page

The second option is a browser-based IDE [Cloud9](https://c9.io) that looks very promising. It is an IDE, meaning that it's got more features than a simple text editor and it runs in a browser, which means it runs on almost any computer with a modern browser.

Personally I think this is the better alternative, but if for some reason it doesn't work, then I see no shame in using Notepad.

#### Setting up Cloud9

In fact, let's go over setting up Cloud9 real quick. Signing up is really simple. Just click the Sign Up -button and register.

Once you've got yourself an account and logged in, you'll be greeted with the dashboard

![Cloud9 Dashboard](assets/c9io-dash.png)
Cloud9 Dashboard

On the left side you can see your projects. When you want to start working on a new project, click the green button **Create New Workspace**. It'll open up a popup menu, where you have to select **Create New Workspace** again.

![Cloud9 New Project](assets/c9io-select-project.png)
Select HTML5 from this window

A window pop ups like in the image above. For most of this workshop we'll be working with the HTML5 project, so select that. Give the project a name and press **Create**.

![Cloud9 Project](assets/c9io-start-edit.png)
The Project Page with Start Editing button

You return back to the dashboard, but notice on the left side there is a new project building up with the name you gave. After it's ready and available, click it. The project page opens up in the main section. From there you can click the **Start editing** button to go to the editor.

In the next window, Cloud9 will ask you the editor layout. I suggest selecting the minimal editor mode, as the full IDE mode might look a bit overwhelming. You can change these layouts anytime from the top menubar: **Window -> Presets** (If it's not showing, just click the topmost area of the site, just a little bit below the blue line at the very top).

![Cloud9 Editor](assets/c9io-editor.png)
Finally, the editor! It's so dark!

Now we're finally somewhere! The project has some basic files already included, like a `hello-world.html` file and a `README.md` file. But we don't have to worry about those yet.

#### One thing of note about Cloud9

Cloud9 is free to use for public projects. The free account gives you one private project, but for more you need to subscribe to one of their pricing plans.

For our purposes, the free account will do just fine. **If you're anxious about giving out private information online, use fake information in our exercises and/or use the private project.**

# HTML

## What does HTML look like?

{% highlight html %}
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>The Page title in the top bar of the browser</title>
    </head>
    <body>
        <h1>A header</h1>
        <p>This is a paragraph, where you can write any kind of text.</p>
    </body>
</html>
{% endhighlight %}
A basic HTML file saved in `index.html` file, for example.

HTML stands for Hypertext Markup Language. It is the standard language used to create web pages. Above you can see a very basic HTML file. HTML uses tags enclosed in angle brackets (like `<html>`) called **HTML elements** to describe what is shown on the page. There are a lot of different HTML elements with their own purposes, and we'll go over most of them in this workshop. Among other things as well.

The main thing you should notice about the elements is that they always come in pairs: `<html></html>` or `<body></body>`. It means that the element tag always has it's closing tag, identified by the forward slash `/` inside the angle brackets. Why? Well the main reason is that we can add stuff inside the element, like in our example above.

### The main elements of an HTML document

Let's go over the elements we see in that example.

The first one is `<!DOCTYPE html>`, which identifies that everything inside this file is HTML. It is needed every time we want to write HTML. The second important element for us is the `<html>` element. Inside it we write every other element we need in our web page.

Now inside the `<html>` element we see two HTML elements with other elements inside it. The `<head>` and `<body>` tags. These two elements are where we're going to do most of our work in, especially in the latter. `<head>` element is where we add general information (metadata) about the HTML document, most commonly the document title (with `<title>` element) that shows up at the top of the browser. But there are other elements that go there as well, like the `<meta>` element that can be used to add metadata for the document. In our example, we use it to set the document's [character set](http://en.wikipedia.org/wiki/Character_encoding) to `utf-8`.

Now on to the `<body>` element. Inside this element we write everything we want to show in our document. It is truly the body of our document. In our example we have a header `<h1>` and a paragraph `<p>`.

When we open our example HTML document in a browser it looks like this:

![Basic HTML example](assets/example-basic.png)

### Summary

Every HTML document starts with `<!DOCTYPE html>`.

Every element goes inside `<html></html>`.

The `<head>` element is the mind of the document. It covers all the abstract information about it, stuff you don't see on the document. Except the `<title>`.

The `<body>` element is the body of the document. Everything inside it is visible to the person viewing the document/site. 

# Assignment: Personal portfolio site

In this workshop we're going to practice our website building skills by creating a personal portfolio site. We're going to start by creating the HTML documents for the site and adding content into them and then adding more features step by step. I'm going to use an imaginary person on this site as an example, but you can obviously make the site for yourself or someone else. And of course **you don't have to follow the examples religiously. You are free (and encouraged) to add your own modifications.**

Let's say that Jane Doe is a 24-year old recent graduate with a degree in Economics. During her studies she has worked in multiple projects with different companies and NGOs. Now she wants to build herself a portfolio site to show her experience. The site would include:

* A resume page
* A biography/about me page
* A small gallery of images
* A links page

![Jane Doe's portfolio](assets/portfolio_example/portfolio.png)
The resulting site would look something like this.

## Ex. 1 Setup the index.html

Create a new file called `index.html` and copy the snippet below inside it. Give the page a **title**.

{% highlight html %}
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title></title>
	</head>
	<body>
		
	</body>
</html>
{% endhighlight %}
It's dangerous to go alone! Take this!

### Why index.html?

The reason lies in how web servers (the computers where your site, meaning the HTML documents you've created, are *hosted*) are built. When a user visits a site, say http://www.janedoe.com/, the web server where the site http://www.janedoe.com/ is located receives a request from the user's browser and automatically returns the index.html document. The index.html is the home page, or index page, of the site, and it is something that web servers are always looking for.

However, if the user wants to open up a different page on the site, say `about.html`, the address would be http://www.janedoe.com/about.html .

## Ex. 2 Adding content

Now we should have an index.html document with the main elements inside it. If we open that up in a browser (if using Notepad or the like just right-click the saved index.html document and select *Open with* -> *Google Chrome/Mozilla Firefox/etc.*, or if you're using Cloud9: Right-click and select *Preview* from the list).

![Blank index.html](assets/portfolio_example/blank_index.png)
But there's nothing in here!


<!--
# Sources

[University of Helsinki's Web Development Course 2015](http://web-selainohjelmointi.github.io)
[Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/HTML)
-->
