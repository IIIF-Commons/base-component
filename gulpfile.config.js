var metadata = require('./package');
var path = require('path');

var GulpConfig = (function () {
    function GulpConfig() {
        this.name = metadata.name;
        this.header = '// ' + this.name + ' v' + metadata.version + ' ' + metadata.homepage + '\n';
        this.dependencies = {
            // libs that MUST be included in a consuming app for this component to work
            libs: [
                'node_modules/tiny-emitter/dist/tinyemitter.js'
            ],
            // libs that MAY be included in a consuming app but are used here for example purposes
            examples: [],
            // ts definitions to copy to the typings dir
            typings: [
                'node_modules/tiny-emitter/index.d.ts'
            ]
        };
        this.fileNames = {
            jsOut: this.name + '.js',
            jsMinOut: this.name + '.min.js',
            jsBundleOut: this.name + '.bundle.js',
            dtsOut: this.name + '.d.ts',
            dtsBundleOut: this.name + '.d.ts'
        };
        this.directories = {
            dist:'./dist',
            typings:'./typings'
        };
        this.typescript = {
            src: [
                'src/_references.ts',
                'src/*.ts',
                'typings/*.ts',
                'typings/**/*.ts'
            ],
            config: {
                declarationFiles: true,
                noExternalResolve: true,
                noLib: false,
                module: 'commonjs',
                sortOutput: true
            }
        }
        this.browserify = {
            src: this.directories.dist,
            target: this.directories.dist,
            config: {
                standalone: this.name,
                debug: false
            }
        };
    }
    return GulpConfig;
})();

module.exports = GulpConfig;