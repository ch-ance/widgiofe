### Widget Composition

Widgets live inside of a container that is a child element of a React-Grid-Layout Component.

Because their container is resizeable, they should *expect* to be resized frequently. This means each Widget should be responsive to a handful of different breakpoints.

We need to decide if Widget resizing should be "snap-grid" or "fluid". Snap-grid may improve developer experience when designing Widgets, because the breakpoints would be more well-defined. 
(I think this makes sense, I might be totally off here)

Here are some possible example configurations that Widgets could create breakpoints for.
- Square (500px / 500px)
- Portrait (500px / 724px)
- Row (500px / 200px)
- Column (200px / 500px)
- Full-width Row (1200px / 200px)
- Full-height column (200px / (common window height?))