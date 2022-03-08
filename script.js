Vue.createApp({
    data(){
        return{
            stabilityPoints: "100,100 0,150 0,50",
            playfulnessPoints: "100,100 0,50 100,0",
            // huntingPoints: "100,100 100,0 200,50",
            huntingPoints: "100,100 100,50 150,75",
            // agilityPoints: "100,100 200,50 200,150",
            agilityPoints: "100,100 150,75 150,125",
            obediencePoints: "100,100 200,150 100,200",
            walkingPoints: "100,100 100,200 0,150",

            items: [
                {category:"stadga", rating:4},
                {category:"lydnad", rating:4},
                {category:"lekfullhet", rating:4},
                {category:"jakt", rating:4},
                {category:"agility", rating:4},
                {category:"stadga", rating:4},
                {category:"stadga", rating:4},
                {category:"stadga", rating:4},
                {category:"stadga", rating:4},
            ]
        };
    },
    methods:{
        setPoints(){
            let maxValues = [
                {
                    x: 200,
                    y: 150
                },
                {
                    x: 100,
                    y: 200
                }
            ]
            this.obediencePoints = this.calculateTriangle(0.7,maxValues, {x:100,y:100});
        },
        setobediencePoints(){
            let maxValues = [
                {
                    x: 100,
                    y: 200
                },
                {
                    x: 0,
                    y: 150
                }
            ]
            this.walkingPoints = this.calculateTriangle(0.2,maxValues, {x:100,y:100});
        },
        calculateTriangle(magnitude, maxPoints, origin){
            let returnValue = origin.x + "," + origin.y;
            for (let pointIndex = 0; pointIndex < maxPoints.length; pointIndex++){
                
                let point = calculatePoint(magnitude, maxPoints[pointIndex], origin);
                returnValue = returnValue + " " + point.x + "," + point.y;
            }
            return returnValue;
        }

    }
}).mount("#app");

function calculatePoint(magnitude, maxPoint, origin) {
    if (magnitude === 1) { return maxPoint; }
    let returnValue = {x:0, y:0};

    returnValue.x = calculateAxisPoint(origin.x, magnitude, maxPoint.x);
    returnValue.y = calculateAxisPoint(origin.y, magnitude, maxPoint.y);
    
    return returnValue;
}

function calculateAxisPoint(origin, magnitude, maxAxisPoint) {
    if (origin > maxAxisPoint) {
        return origin - Math.abs(maxAxisPoint - origin) * magnitude;
    }

    return origin + Math.abs(maxAxisPoint - origin) * magnitude;
    
}