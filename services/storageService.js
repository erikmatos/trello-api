"use strict"

//region dependencies


//endregion

class StorageService {

    constructor() {

    }

    post(provider, data) {

        console.log("*************************************************************************************************");
        console.log("Provider [%s]", provider);
        console.log(data);
        console.log("*************************************************************************************************");

    }

}

module.exports = StorageService;