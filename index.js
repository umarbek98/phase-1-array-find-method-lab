const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]


function superbowlWin(record){
    const winner = record.find(({ result }) => result === "W")
    if (winner === undefined) {
        return undefined
    }else {
        return winner.year
    }
}
console.log(superbowlWin(record))