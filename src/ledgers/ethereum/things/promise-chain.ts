// import {Executor, Instantiable} from "./manager";
// import Database from "../database";
// import Block from "ethereumjs-block";

// export default class PromiseChain<T, U> implements PromiseLike<T> {
//     public value: U;
//     protected db: Database
//     constructor(pending: Promise<Buffer>, Type: Instantiable<U>, db: Database) {
//         pending.then((rawBlock) => {
//             this.resolved = true;
//             this.value = new Type(rawBlock);
//             this.resolutions.forEach(r => r(this));
//         });
//         // super((resolve, reject) => {
//         //     // if we don't have a type then the arg1
//         //     // must be an `executor`
//         //     if (!Type) {
//         //         return new Promise(arg1 as Executor<Buffer>);
//         //     }

//         //     // If arg1 is a Promise, await teh result of the promise then construct our `Type`
//         //     // from the result
//         //     if (arg1 instanceof Promise) {
//         //         arg1.then((rawBlock) => {
//         //             //this.value = new Type(rawBlock);
//         //             //resolve(this);
//         //         }, reject);
//         //     // If arg1 is an executor, create a new Promise, await the result, then construct our `Type`
//         //     // from the result
//         //     } else if(typeof arg1 === "function") {
//         //         new Promise(arg1).then((result) => {
//         //             if (Buffer.isBuffer(result)){
//         //                 //this.value = new Type(result);
//         //                 // resolve((function(){return this;})());
//         //             } else {
//         //                 resolve(result);
//         //             }
//         //         }, reject);
//         //     } else {
//         //         reject(new Error("Invalid arg passed to constuctor"));
//         //     }
//         // });
//         this.db = db;
//     }
// }