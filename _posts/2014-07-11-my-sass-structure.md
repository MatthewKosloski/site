---
layout: post
categories: journal
title: My Sass Structure
---

I've been using [Sass](http://sass-lang.com) for about a month now, and I have fallen in love with it.  I should of began using it a long time ago.  It's amazing.  At this moment in time, I don't have a comprehensive understanding of Sass' capabilities; however, I thought I should share with everyone my setup.  

My Sass structure includes: mixins, [normalize.css](http://necolas.github.io/normalize.css/), a custom reset, and Dan Eden's [Toast](http://daneden.github.io/Toast/) responsive grid. Without further ado, let me show you around.

The structure is quite simple.  You will be greeted with two files, and a folder that contains four files.  Here's a visual representation: 

<pre>
src
  - _mixins.scss
  - _normalize.scss
  - _reset.scss
  - _grid.scss

style.scss
index.html 
</pre> 

Inside <code>_mixins.scss</code> there are three mixins that I always use.  I really don't know of any other ones that I would need.  I have mixins for transitions, border-radius, and converting px to em (I made an online [tool](http://matthewkosloski.me/labs/pixem) for this, too).

I would like to show you how to use the px to em mixin (there are comments in the file to show you how to use all of them).  So, this is the mixin:

<pre>
@function em($target, $base: 18) {
	@return ($target / $base) * 1em;
}
</pre>

Now, to use it you would do something like this: <code>font-size: em(16);</code>

Also, make sure <code>$base</code> is equal to your base font-size.  In this case it's 18 because in <code>style.scss</code>, our font-size is 112.5% (1.125 * 16 = 18).  So, to figure out <code>$base</code>, just multiply your body font-size by 16.

I'm not going to explain <code>normalize.scss</code> or <code>grid.scss</code> &mdash; you can research them yourself!

I made a custom <code>reset.scss</code> file, and included some resets that I thought were necessary.  Here's my custom reset:

<pre>
*,
:before,
:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    border: none;
    outline: none;
}

body {
    -webkit-font-smoothing: antialiased;
}

.cf:before,
.cf:after {
    content: " ";
    display: table; 
}

.cf:after {
    clear: both;
}

.cf {
    *zoom: 1;
}
</pre>

I stripped the default borders and outlines from elements, and eliminated the default margins and paddings.  I hate it when I click a button, and I see that blue outline!  <code>.cf</code> is a clearfix hack by [Nicolas Gallagher](http://nicolasgallagher.com/micro-clearfix-hack/).  

***

Go ahead and download my Sass structure on [Github](https://github.com/MatthewKosloski/sass)!







