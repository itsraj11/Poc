let a=[
    { timestamp: "2023-02-14 17:14:00", "ghani.og01.active_power": "5.08" },
   { timestamp: "2023-02-14 17:15:00", "ghani.og01.active_power": "4.96" },
   { timestamp: "2023-02-14 17:16:00", "ghani.og01.active_power": "4.85" },
   { timestamp: "2023-02-14 17:17:00", "ghani.og01.active_power": "4.73" },
   { timestamp: "2023-02-14 17:18:00", "ghani.og01.active_power": "4.62" },
   { timestamp: "2023-02-14 17:14:00", "ghani.og01.reactive_power": "3.51" },
   { timestamp: "2023-02-14 17:15:00", "ghani.og01.reactive_power": "3.41" },
   { timestamp: "2023-02-14 17:16:00", "ghani.og01.reactive_power": "3.31" },
   { timestamp: "2023-02-14 17:17:00", "ghani.og01.reactive_power": "3.21" },
   { timestamp: "2023-02-14 17:18:00", "ghani.og01.reactive_power": "3.11" }
]

var data = {
    labels: [timestamp],  // here all the timestamp value will come
    datasets: [
        {
            label: 'ghani_og01.active_power',  // all the 2nd attribute of each object -ps-only the unique one
            data: [5.08,4.96,4.85,4.73,4.62]  // like this way  -required way
        },
        {
            label: '',
            data: []  //  same will follow here if there is any new entry
        }
    ]
}

// what i did 
// removed timestamp from each object after taking use of it ,basically after assigning it to labels
// after that how can i convert into this?
// object.keys is converting into array of array ,,,so stuck there..tried stackoverflow but didnt get the quick result.
