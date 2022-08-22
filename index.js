#!/usr/bin/env node

const fs = require('fs')

//open up current dir
fs.readdir(process.cwd(), (err, filenames) => {
    if (err) {
        console.log(err)
    }
    const statPromises = filenames.map(filename => {
            return fs.lstat(filename)
        })
        //array of promises, waits for all to finish
    const allStats = await Promise.all(statPromises)

    for (let stats of allStats) {
        const index = allStats.indexOf(stats)
        console.log(filenames[index], stats.isFile())
    }
})