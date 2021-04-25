let statistics = {
    redCars: 21,
    blueCars: 45,
    raceCars: 5,
    blackCars: 40,
    rareCarse: 2
};

for (prop in statistics) {
    if (prop[0] === 'r' || statistics[prop] % 2 == 1) {
        console.log(statistics[prop]);
    }
}