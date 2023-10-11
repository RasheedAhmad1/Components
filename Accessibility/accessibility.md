# Accessibility
Accessibility is the practice of making your websites usable by as many people as possible. We traditionally think of this as being about people with disabilities, but the practice of making sites accessible also benefits other groups such as those using mobile devices, or those with slow network connections.

# What is WAI-ARIA?
Let's start by looking at what WAI-ARIA is, and what it can do for us.

A whole new set of problems
As web apps started to get more complex and dynamic, a new set of accessibility features and problems started to appear.

For example, HTML introduced a number of semantic elements to define common page features (<nav>, <footer>, etc.). Before these were available, developers would use <div>s with IDs or classes, e.g. <div class="nav">, but these were problematic, as there was no easy way to easily find a specific page feature such as the main navigation programmatically.

The initial solution was to add one or more hidden links at the top of the page to link to the navigation (or whatever else), for example:

HTML
<a href="#hidden" class="hidden">Skip to navigation</a>

But this is still not very precise, and can only be used when the screen reader is reading from the top of the page.

As another example, apps started to feature complex controls like date pickers for choosing dates, sliders for choosing values, etc. HTML provides special input types to render such controls:

HTML
<input type="date" /> <input type="range" />

These were originally not well-supported and it was, and still is to a lesser extent, difficult to style them, leading designers and developers to opt for custom solutions. Instead of using these native features, some developers rely on JavaScript libraries that generate such controls as a series of nested <div>s which are then styled using CSS and controlled using JavaScript.

The problem here is that visually they work, but screen readers can't make any sense of what they are at all, and their users just get told that they can see a jumble of elements with no semantics to describe what they mean.

# Enter WAI-ARIA
WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications) is a specification written by the W3C, defining a set of additional HTML attributes that can be applied to elements to provide additional semantics and improve accessibility wherever it is lacking. There are three main features defined in the spec:

### Read Article: 
https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics

## Accessible Rich Internet Applications
WAI-ARIA is a technology that can help with such problems by adding in further semantics that browsers and assistive technologies can recognize and use to let users know what is going on.

## aria-controls
To show that what really it's doing i.e what is this controls, when I click on it what will open,
say open 'primary navigation' --> aria-controls='primary-navigation';

## aria-expanded
It says that the menu is closed or not, here I used it in combination with 'aria-controls'
aria-expanded='false';

## aria-pressed

## aria-labelledby
<img src="dinosaur.png" aria-labelledby="dino-label" />
<p id="dino-label">The Mozilla red Tyrannosaurus…</p>
In this case, we are not using the alt attribute at all — instead, we have presented our description of the image as a regular text paragraph, given it an id, and then used the aria-labelledby attribute to refer to that id, which causes screen readers to use that paragraph as the alt text/label for that image. This is especially useful if you want to use the same text as a label for multiple images — something that isn't possible with alt.

### CSS
##### Correct semantics and user expectation
It is possible to use CSS to make any HTML element look like anything, but this doesn't mean that you should. As we frequently mentioned in our HTML: A good basis for accessibility article, you should use the appropriate semantic element for the job, whenever possible. If you don't, it can cause confusion and usability issues for everyone, but particularly users with disabilities. Using correct semantics has a lot to do with user expectations — elements look and behave in certain ways, according to their functionality, and these common conventions are expected by users.

### JavaScript
##### JavaScript can also break accessibility, depending on how it is used.
Modern JavaScript is a powerful language, and we can do so much with it these days, from simple content and UI updates to fully-fledged 2D and 3D games. There is no rule that says all content has to be 100% accessible to all people — you just need to do what you can, and make your apps as accessible as possible.