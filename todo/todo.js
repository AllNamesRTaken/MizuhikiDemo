define(["clazzy/IoC", "clazzy/Clazzy", "clazzy/Deferred", "mizuhiki/Mizuhiki", "mizuhiki/TemplatedObject", "dojo/cache", "mizuhiki/MizuhikiMeta", "mizuhiki/abstraction/Lang"], function(IoC, Class, Deferred, mizu, templated, cache, meta, lang) {
	Class("ns.Todo", mizuhiki.TemplatedObject, ["MizuControl"], {
		constructor: function() {
			this.addModel({
				todos: []
			});
			//state and private variables, not part of the model
			this.titles = {title:"Todo List", addnew:"Add new item", remove:"Remove"};
			this.tempstring = "";
		},
		addTodo:function(ev){
			var lang = this.get("tempstring");
			if(lang.length == 0) return;
			var len = this.get("todos").length;
			this.set("todos", lang, len);
		},
		removeTodo:function(ev){
			var newArr = this.get("todos").slice();
			var removed = newArr.splice(parseInt(ev.target.getAttribute("data-index")), 1)
			this.set("todos", newArr);
		},
		addNewLang: function(ev){
			this.addLang(this.get("tempstring"));
		},
		triggerChange: function(ev) {
			lang.event.emit(ev.target, "change");
		}
	});

	// Setup the IoC registies
	IoC.register("IRenderer", "mizuhiki.Mizuhiki");
	IoC.register("IRendererMeta", "mizuhiki.MizuhikiMeta");
	IoC.register("ITodo", "ns.Todo");
	IoC.registerTemplate("TodoTemplate", "ns.Todo", cache(new dojo._Url("todotemplate.html")));
});
