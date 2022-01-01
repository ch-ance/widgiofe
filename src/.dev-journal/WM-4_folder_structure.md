### Atomic Design

#### Atoms:
Basic building blocks of matter, such as a button, input or a form label. They’re not useful on their own.

#### Molecules:
Grouping atoms together, such as combining a button, input and form label to build functionality.

#### Organisms:
Combining molecules together to form organisms that make up a distinct section of an interface (i.e. navigation bar)

#### Templates:
Consisting mostly of groups of organisms to form a page — where clients can see a final design in place.

#### Pages:
An ecosystem that views different template renders. We can create multiple ecosystems into a single environment — the application.

### Grouping by feature
Rather than group everything by its type (actions, components, containers, services, etc),
we can instead group things by *feature*

This allows us to work in contained environments. It can help prevent unwanted side-effects. We can work in one folder rather than needing to pull in a dozen different files from different directories to work on a single feature. It seems like this could be good for Developer Experience.

  src/
    app/
        Header.js
        Header-spec.js
        Sidebar.js
        Sidebar-spec.js
        App.js
        App-spec.js
        reducers.js
        reducers-spec.js
        routes.js
        routes-spec.js
    command/
        Command.js
        Commands-spec.js
        CommandActions.js
        CommandActions-spec.js
        CommandList.js
        CommandList-spec.js
        CommandItem.js
        CommandItem-spec.js
        CommandHelper.js
        CommandHelper-spec.js
        commandReducer.js
        commandReducer-spec.js
    product/
        Product.js
        Product-spec.js
        ProductActions.js
        ProductActions-spec.js
        ProductList.js
        ProductList-spec.js
        ProductItem.js
        ProductItem-spec.js
        ProductImage.js
        ProductImage-spec.js
        productReducer.js
        productReducer-spec.js
    user/
        User.js
        User-spec.js
        UserActions.js
        UserActions-spec.js
        UserProfile.js
        UserProfile-spec.js
        UserAvatar.js
        UserAvatar-spec.js
        userReducer.js
        userReducer-spec.js

resources/references:
- https://medium.com/@janelle.wg/atomic-design-pattern-how-to-structure-your-react-application-2bb4d9ca5f97
- https://marmelab.com/blog/2015/12/17/react-directory-structure.html