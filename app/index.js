/**
 * @file yo generator-melon-component
 * @author leon <ludafa@outlook.com>
 */

const _ = require('lodash');
const Base = require('yeoman-generator').Base;
const chalk = require('chalk');
const yosay = require('yosay');
const mkdirp = require('mkdirp');

class MelonComponentGenerator extends Base {

    constructor(...args) {
        super(...args);
    }

    prompting() {

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the breathtaking ' + chalk.red('melon-component') + ' generator!'
        ));

        const prompts = [
            {
                'type': 'input',
                'name': 'projectName',
                'message': 'name of your npm package',
                'default': _.kebabCase(this.appname),
                'store': false
            },
            {
                'type': 'input',
                'name': 'componentName',
                'message': 'name of your new melon component',
                'default': 'SampleComponent',
                'store': false
            },
            {
                'type': 'input',
                'name': 'version',
                'message': 'version',
                'default': '1.0.0'
            },
            {
                'type': 'input',
                'name': 'description',
                'message': 'description',
                'default': 'A melon component'
            },
            {
                'type': 'input',
                'name': 'author',
                'message': 'author\'s name',
                'default': this.user.git.name()
            },
            {
                'type': 'input',
                'name': 'email',
                'message': 'author\'s email',
                'default': this.user.git.email()
            },
            {
                'type': 'input',
                'name': 'keywords',
                'message': 'Keywords',
                'default': 'melon, component'
            }
        ];

        return this
            .prompt(prompts)
            .then(props => {
                // To access props later use this.props.someAnswer;
                this.props = Object.assign(
                    {},
                    props,
                    {
                        keywords: JSON.stringify(props.keywords.split(/,/).filter(item => !!item)),
                        bebabComponentName: _.kebabCase(props.componentName),
                        pascalProjectName: _.upperFirst(_.camelCase(props.projectName))
                    }
                );
            });
    }

    install() {
        // this.installDependencies();
    }

    writing() {

        mkdirp.sync(this.destinationPath('src'));
        mkdirp.sync(this.destinationPath('example'));
        mkdirp.sync(this.destinationPath('test/spec'));
        mkdirp.sync(this.destinationPath('tools'));

        const configFiles = [
            {
                from: 'bower.json',
                to: 'bower.json'
            },
            {
                from: 'coveralls.yml',
                to: '.coveralls.yml'
            },
            {
                from: 'editconfig',
                to: '.editconfig'
            },
            {
                from: 'esdoc.json',
                to: 'esdoc.json'
            },
            {
                from: 'gitignore',
                to: '.gitignore'
            },
            {
                from: 'gulpfile.js',
                to: 'gulpfile.js'
            },
            {
                from: 'npmignore',
                to: '.npmignore'
            },
            {
                from: 'package.json',
                to: 'package.json'
            },
            {
                from: 'travis.yml',
                to: '.travis.yml'
            },
            {
                from: 'src/index.js',
                to: 'src/' + this.props.componentName + '.js'
            },
            {
                from: 'src/index.styl',
                to: 'src/' + this.props.componentName + '.styl'
            },
            {
                from: 'example/index.js',
                to: 'example/index.js'
            },
            {
                from: 'example/index.html',
                to: 'example/index.html'
            },
            {
                from: 'example/index.styl',
                to: 'example/index.styl'
            },
            {
                from: 'test/karma.conf.js',
                to: 'test/karma.conf.js'
            },
            {
                from: 'test/karma.local.conf.js',
                to: 'test/karma.local.conf.js'
            },
            {
                from: 'test/karma.travis.conf.js',
                to: 'test/karma.travis.conf.js'
            },
            {
                from: 'test/spec/index.spec.js',
                to: 'test/spec/' + this.props.componentName + '.spec.js'
            },
            {
                from: 'tools/server.js',
                to: 'tools/server.js'
            },
            {
                from: 'tools/webpack.dev.js',
                to: 'tools/webpack.dev.js'
            },
            {
                from: 'README.md',
                to: 'README.md'
            }
        ];

        configFiles.forEach(({from, to}) => {
            this.fs.copyTpl(
                this.templatePath(from),
                this.destinationPath(to),
                this.props
            );
        });

    }
}

module.exports = MelonComponentGenerator;
