## Sample to get the library things done

Create Folder and initialize Node Package
    mkdir PACKAGE_NAME
    cd PACKAGE_NAME
    npm init    // Follow the steps to initialize npm package 
install the following dependencies and dev dependencies
    npm install @nest/common rxjs reflect-metadata
    npm install -d @types/node rimraf typescript
Afterwards go to your package.json and change/add main, types, scripts to the following
    "main": "dist/index.js",
    "types": "dist/index.d.ts",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "rimraf dist && tsc",
        "prepublish": "npm run build"
    },
Run npm install

Create tsconfig.json file in your folder

Add following code to tsconfig.json

    "compilerOptions": {
        "experimentalDecorators": true,
        "target": "es2017",
        "module": "commonjs",
        "lib": ["es2017", "es7", "es6"],
        "declaration": true,
        "declarationMap": true,
        "sourceMap": true,
        "outDir": "./dist",
        "rootDir": "./src",
        "strict": true,
        "noImplicitAny": false,
        "strictNullChecks": false,
        "allowSyntheticDefaultImports": true,
        "esModuleInterop": true,
        "emitDecoratorMetadata": true
    },
    "exclude": [
            "node_modules",
            "dist"
        ]
    }
Create src folder. Add your Nest code in this folder.

Add a index.ts file in your src folder. In this file you export your Nest Code, that you want to use outside of this package. For Example:

    import { CpuUtilizationModule } from "./cpu-utilization-observer.module";
    import { CpuUtilizationService } from "./cpu-utilization.service";

    export { CpuUtilizationModule, CpuUtilizationService }
This exports a Module and a Service, wich you can import/provide in your Nest Project

Run npm run build. This will compile your code to into the dist folder.
Now you can install this package (locally) with npm i PATH_TO_PACKAGE

## Reference
- [guide](https://stackoverflow.com/questions/62324785/nestjs-create-reusable-publishable-library) - on stackoverflow.