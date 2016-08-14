/**
 * dynamic Just-In-Time (JIT) compiler
 * compiles the application in the browser and then launches the app
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);


/** 
 * static Ahead-Of-Time (AOT) compiler
 * much smaller application that launches faster, especially on mobile devices and high latency networks
 * ng compiler runs ahead of time as part of the build process, producing a collection of class factories in their own files
 * the ngfactory will be phisically at the location
*/
/**
 * import { platformBrowser } from '@angular/platform-browser';
 * import { AppModuleNgFactory } from './app/app.module.ngfactory';
 * platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
*/