const fs = require('fs');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

// get the file
// read the file
// parse through the data
// organize it


fs.readFile("fruit.csv", "utf8", function (err, data){ 
// use fs to readfile, fruit in utf8, then function is either say error, or spit back data. 
    const fruitArray = [];
    if (err) {
        console.log("There was a problem reading the file.");
    }else { // split by "enter" and ","" to create data bites
        let splitByCommaArray = data.split(",");
        let splitWithSpaceArray = data.split("\r\n");
    // 
        for (let i = 0; i < splitWithSpaceArray.length; i++) { // create different rows
            let row = splitWithSpaceArray[i];
            const rowSplitArray = row.split(","); // rowSplitArray is each column

            let fruit = rowSplitArray[0];

            if (rowSplitArray.length === 3) { // create the object of the data
                const obj = {
                    fruit = rowSplitArray[0],
                    color = rowSplitArray[1],
                    number = rowSplitArray[2],
                };

                console.log(obj);
            }
        }
        }
    });

