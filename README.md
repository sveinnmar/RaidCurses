# Frontend Starter Kit

Node version used `v14.15.4` - [Download](https://nodejs.org/en/download/)

### `Linters`
TBD

### `Examples`
Really basic example of markup can be found under `[~\Vettvangur.Site\html\]`

### `package.json`
When you are installing dependencies, be sure that the dependency is in the correct object in the file. `devDependencies` is only meant for stuff that pertains to the dev environment and the website does not rely on it. If the website relies on a package like dayjs, react, etc. then that dependency goes under `dependencies`. Be a hero 🦸 and don't just dump everything inside `dependencies`.

###  `Project Setup`
<details>
<summary><strong>Clone the project</strong></summary>

```
git clone https://github.com/Vettvangur/FrontStarter.git [folder name]
```

</details>

<details>
<summary><strong>Install node modules</strong></summary>

```
Open the frontend folder [~\Vettvangur.Frontend\] in a terminal and run:

$ npm i
```

</details>

<details>
<summary><strong>Run the frontend</strong></summary>

```
Open the frontend folder [~\Vettvangur.Frontend\] in a terminal and run:

$ npm run dev (standard)
$ npm run dev:njks (nunjucks)

This will run the webpack dev server and serve the development CSS and Javascript
```

</details>

<details>
<summary><strong>Build the frontend</strong></summary>

```
Open the frontend folder [~\Vettvangur.Frontend\] in a terminal and run:

$ npm run build (standard)
$ npm run build:njks (nunjucks)

This will move all relevant files to [~\Vettvangur.Site\build\]
```

</details>

# Regular projects

<details>
<summary><strong>Remove files</strong></summary>

```
Remove these files and/or folders:

[~\Vettvangur.Frontend\_templates]
[~\Vettvangur.Frontend\src\templates]
[~\Vettvangur.Site\] - This folder will be created with visual studio when creating a new project.

```

</details>


# Nunjucks

<details>
<summary><strong>Remove files</strong></summary>

```
Remove these files and/or folders:

[~\Vettvangur.Site\html\]

```

</details>

###  `Hygen`
<details>
<summary><strong>Install Hygen</strong></summary>

```
Open the terminal and run:

$ npm i -g hygen

This will install hygen globally
```

</details>

<details>
<summary><strong>Create a component with hygen</strong></summary>

```
Open the frontend folder [~\Vettvangur.Frontend\] in a terminal and run:

$ hygen cmp new componentname

*where "componentname" is the name of your new component
This will create the njks and scss file. It will also see to inject the imports and exports in the correct files.
This component is ready to be coded.
No restart of the node server required.
```

</details>

---


# Styles
Inside the styles folder we have some functions and mixins. Here are explanations of how to use them.

### `Nesting`
We made a choice a while ago to not nest our styles deeper than 3 levels. I (Binni) rarely nest anymore since I found out that way is much more manageable when refactoring is needed so that simplifies upkeep of the project. I usually only nest stuff like :hover, :before, :after and such things but never children of components nor modifiers. Example of this can be seen in the `[~\Vettvangur.Frontend\src\styles\global\buttons.scss]` file.

### `Sticky footer`
I included styling for stickyfooter using flex. Some projects of ours have not implemented a sticky footer solution until the customer or anyone of us points it out so this is baked into the starter now from the get go. An example of the markup can be found in the example html files. The requirements for this are as follows:

<details>
<summary><strong>Example</strong></summary>

```
main tag needs to have a class of .main

header and footer need to be outside of main in the markup so it ends up like this:

<body class="body preload">
  <header class="header">...</header>

  <main class="main">...</main>

  <footer class="footer">...</footer>
</body>

```

</details>

### `Preload class`
In the examples you can see that the body has a class of `.body` and another class of `.preload`. The reason for this is to stop any and all flickering caused by transition styling while the page loads. This in combination with the last few lines in `[~\Vettvangur.Frontend\src\scripts\scripts.ts]` make this work (the `DOMContentLoaded` event listener).

### `Remify`
We use a helper function called rem() to remify all of our px values. Yes, we use this for every single px value in the project. It's a matter of getting used to writing the function.

<details>
<summary><strong>Example</strong></summary>

```
.class {
  height: rem(100);
}
```

</details>

If you have a variable and need to change it to a negative number in certain circumstances, e.g. the gutter function, then you can do so like the example below (this also applies to the rem function).

<details>
<summary><strong>Example</strong></summary>

```
.class {
  margin-top: -#{gutter(large)};
}
```

</details>


If you are doing calculations, e.g. in calc(), then you can use the functions like this:

<details>
<summary><strong>Example</strong></summary>

```
Positive numbers:
.class {
  width: calc((100% / 4) - #{rem(100)});
}

Negative numbers:
.class {
  width: calc((100% / 4) - #{-#{rem(100)}});
}

I know this looks weird but this is the way.
```

</details>


###  `Media queries`

We have a set number of standard media queries that cover almost every use I have ever had for media queries. If they do not cover the size you're targeting then you can create your own for that instance. The breakpoints are descriptively named so there will be no confusion about what breakpoint you are tageting. There is a media label in the bottom right corner of the screen to help visually and the label has the same name as the breakpoint inside.
They break UP and not down so they are mobile-first. I have started to create components that rarely overwrite properties using these mixins, an example of this can be seen in the `[~\Vettvangur.Frontend\src\styles\components\example.scss]` file.

<details>
<summary><strong>Example</strong></summary>

```
@include mq(breakpoint) { ... }
From breakpoint and up

@include mqBetween(breakpoint, breakpoint) {...}
Between two breakpoints.

@include mqOnly(breakpoint) { ... }
Only a certain breakpoint
```

</details>



###  `Helpers`
We have a number of helper functions to fetch data from variables that are defined as sass maps. We are transitioning to using sass maps instead of only $variables since it will greatly simplify our variable setups. Inside the `[~\Vettvangur.Frontend\src\styles\resources\variables\]` folder you will see a few files. We break down every variable category into separate files to keep everything neat and tidy. Inside these files you can find the sass map definition and the helper functions.

I recommend you study these files carefully and try out the functions, I've been using this for a while now and it has greatly simplified upkeep of projects.

Here are some examples of usage.

<details>
<summary><strong>Example</strong></summary>

```
.class {
  color: color(red--default);

  background: color(red--default);

  border-radius: radius(circle);
  
  z-index: zindex(infinity);

  gap: gutter(small);

  transition: color .4s ease(cubic-in-out);

  font-family: font(text--default);
  
  font-weight: weight(bold);
}
```

</details>

### `Buttons`
We have a button stylesheet included which is comprised of a theme function, basic styling for all buttons and then modifier classes.

The button theme mixin is built up like this and is intended to make it easier to get different button styling. It's usage is simple and is highly customizable to your project.

<details>
<summary><strong>Example</strong></summary>

```
Every parameter is optional and has default values.

@mixin button-theme(
  $TextColor,
  $HoverTextColor,
  $BorderColor,
  $HoverBorderColor,
  $BackgroundColor,
  $HoverBackgroundColor,
  $Padding,
  $BorderRadius,
  $BorderWidth
)
```

</details>

When you need a new style for a button, you can do so like this:

<details>
<summary><strong>Example</strong></summary>

```
There are two ways of doing is.

1. No parameter names (requires the correct order)

.button--different {
  @include button-theme(
    #fff,
    #fff,
    color(blue--default),
    color(blue--default),
    color(blue--default),
    lighten(color(blue--default), 10%)
  );
}

2. Using the parameter names (recommended). 
I recommend this way just because when you only have to overwrite one or two parameters then you dont 
need to overwrite the ones that come before it. In this example I'm only overwriting the border colors.

.button--different {
  @include button-theme(
    $BorderColor: color(blue--default),
    $HoverBorderColor: color(blue--default)
  );
}

```

</details>

### `Images`
We're going to be using the picture tag to handle responsive images. We're still doing tests regarding images with query parameters like `PositionalContent` or `ImageProcessor` for `Umbraco`. So this is still a WIP but here is a very basic example of the usage. 

<details>
<summary><strong>Example</strong></summary>

```
<picture>
  <source media="(min-width:650px)" srcset="img_pink_flowers.jpg">
  <source media="(min-width:465px)" srcset="img_white_flower.jpg">
  <img src="img_orange_flowers.jpg" alt="Flowers" style="width:auto;">
</picture>
```

</details>

---

# TypeScript
Type-Safe javascript - hooray! ⭐

We made a decision over a year ago to exclusively use TypeScript for all projects. If you're not familiar with typescript then Binni, Mike, Mary and David have good understanding of it and can help you if you have any questions. The examples in this project can get you started so I recommend that you go over them and see how we set things up.

TypeScript will let you know about errors and help you write your code with intellisense so it's really helpful but you have to use it correctly so the intellisense works at its best. That means using interfaces when applicable, parameters need have their types and functions/methods need to have their return type even its just void.

We will not be using semicolons in javascript anymore since they are not needed. There are some edge cases though so be mindful about that, they are really rare in our type of work though.

### `var, const, let`
We use `const` and `let`, no `var`.

### `TypeScript files (not finalized yet)`

<details>
<summary><strong>Example of a TypeScript file</strong></summary>

```
const test = {
  el: {
    root: document.querySelector<HTMLELement>('.class'),
  },

  init(): void {
    if (this.el.root) {
      const parameter = 'Hello'

      this.doSomething(parameter)
    }
  },

  doSomething (test: string): void {
    console.log(`${string} World!`)
  },

  // Example of returning a promise
  async handleFetch (): Promise<void> {
    const request = await fetch('url')

    console.log(request.json())
  },

  // Example of returning string
  returnString (): string {
    return 'This is a string'
  },
}

export default test
```

</details>

### `Fetch API`
We use the fetch API for all requests so that everyone will be on the same page and anyone can understand your request code. It's really simple and powerful so if you're not using it today I highly recommend you read through the docs. Below are examples of requests from our projects.

* [Fetch API documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

<details>
<summary><strong>Example</strong></summary>

```
  ('submit', e => {
    this.handleSubmit(e)
  })

  // POST (with our custom response object (success, result))
  async handleSubmit(form: HTMLFormElement): Promise<void> {
    const req = await fetch(
      form.getAttribute('action'),
      {
        method: form.getAttribute('method'),
        body: new FormData(form),
      }
    ).then(r => r.json())

    if (req.success) {
      ...
    } else {
      ...
    }
  },

  // POST
  async handleSubmit(form: HTMLFormElement): Promise<void> {
    const req = await fetch(
      form.getAttribute('action'),
      {
        method: form.getAttribute('method'),
        body: new FormData(form),
      }
    )

    if (req.status >= 200 && req.status < 300) {
      ...
    } else {
      ...
    }
  },

  // GET
  async handleGet(): Promise<void> {
    const req = await fetch('url')

    console.log(req.json())
  },

```

</details>

### `Click events`
Sometimes when using click events in TypeScript then it doesn't recognize the event.target for e.g. .classList, this can be mitigated with this bit of code:

<details>
<summary><strong>Example</strong></summary>

```
This also applies to any other property on the event interface that doesn't get recognized. 
And of course this applies to all event listeners.

addEventListener('click', (e: Event & { target: HTMLAnchorElement }) => {
  ...
})
```

</details>

### `Global objects`

When working with global objects things might seem a little tricky but the solution is really simple when you get used to it. I included my umbraco dictionary solution to the scripts to demonstrate this. The example below is a simplified version. The dictionary file is located here: `[~\Vettvangur.Frontend\src\scripts\utility\dictionary.ts]`

<details>
<summary><strong>Example</strong></summary>

```
First create an interface wich extends the Window interface

interface INameExtention extends Window {
  objectInQuestion: []
}

Then declare it

declare let window: INameExtention

now you can use it as any other global object.

console.log(window.objectInQuestion)

```

</details>

# Common libraries

* dayjs (not moment)
* GSAP
* Swiper
* Kennitala
