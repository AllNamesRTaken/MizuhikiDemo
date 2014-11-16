MizuhikiDemo
============

Some simple demos on how to use mizuhiku and clazzy to create components with separate templates, and logic

To test the demos out. Just download Clazzy, Mizuhiki, dojo, and dijit into the directories with said names and louch the html file from you favourite webserver.

The todo demo is a very simple todo list component to demo how to bind and build objects in Clazzy to template files, instanciate them (and resolving deps) using the Clazzy IoC and then bind/render them using Mizuhiki, with Dojo and underscore as function libraries and Dijit as compoent library.

If a template needs components from a library to be loaded that will be taken care of by the IoC if there is a "data-dojo-type" attribute containing a module to be loaded written with dot-notation. E.g. my.ns.thing will be required as "my/ns/thing". if you dont want to be so "dojo centered" just change the regex in the "getTemplateDependencies" function Clazzys IoC.

Since all connections with underscore, dojo or dijit is bound though the abstraction layer, it is easy to replace with pure js, jquery and/or bootstrap. Just require them in the abstraction layer and swap out the functions.

--
The dummy app is mostly interesting to see how the template binding can be done, still it is missing partials which do aslo exist.

Good luck
