# Frontend Starter Kit

Node version used `v14.15.4` - [Download](https://nodejs.org/en/download/)

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
Open the frontend folder [~\Project.Frontend\] in a terminal and run:

$ npm i
```

</details>

<details>
<summary><strong>Build the frontend</strong></summary>

```
Open the frontend folder [~\Project.Frontend\] in a terminal and run:

$ npm run build

This will move all relevant files to [~\Project.Site\build\]
```

</details>

<details>
<summary><strong>Run the frontend</strong></summary>

```
Open the frontend folder [~\Project.Frontend\] in a terminal and run:

$ npm run dev

This will run the webpack dev server and serve the development CSS and Javascript
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
Open the frontend folder [~\Project.Frontend\] in a terminal and run:

$ hygen cmp new componentname

*where "componentname" is the name of your new component
This will create the njks and scss file. It will also see to inject the imports and exports in the correct files.
This component is ready to be coded.
No restart of the node server required.
```

</details>
