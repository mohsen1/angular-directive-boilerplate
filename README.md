# Bower Publishable Angular Directive Boilerplate

This is a simple AngularJS directive boilerplate to help you start your own AngularJS directive and publish it in Bower and NPM.
This readme file itself is a boilerplate.

#### Using the boilerplate
Clone the project and install dependencies, then use Gulp to start the prject.
```shell
git clone git@github.com:mohsen1/angular-directive-boilerplate.git my-directive
cd my-directive
npm install
bower install
gulp serve
```
From here, you can start changing things and make your own directive.

# The Directive

### Installation

Install via bower

```shell
bower install angular-directive-template
```

### Usage

Add it as a dependency to your app and then use the directive in your HTML files.

### Development

Install Gulp via npm if you don't have it
```shell
npm install -g gulp
```

### Available commands

* `gulp`: build and test the project
* `gulp build`: build the project and make new files in`dist`
* `gulp serve`: start a server to serve the demo page and launch a browser then watches for changes in `src` files to reload the page
* `gulp test`: run tests
* `gulp serve-test`: runs tests and keep test browser open for development. Watches for changes in source and test files to re-run the tests

### License
MIT
