const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date(),
    },
    exercises: [
        {
            type: {
                type: String,
                required: "enter an exercise"
            },
            name: {
                type: String,
                required: "enter the name of the exercise"
            },
            duration: {
                type: Number,
                required: "enter length of exercise"
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }

        }
    ]
})

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;