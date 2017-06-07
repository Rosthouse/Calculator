var calculator = {


    previousNumber: 0,
    currentNumber: 0,

    initialize: function(){
        this.previousNumber = 0;
        this.currentNumber = 0;
    },

    setNumber: function(number){
        if(this.currentNumber === 0){
            if(number === 0){
                return;
            } else{
                this.currentNumber = number;
            }
        } else{
             this.currentNumber =  this.currentNumber + "" + number;
        }
        document.getElementById('current_number_field').innerHTML = this.currentNumber;
        console.log("Got number " + number + " and setting field to " + this.currentNumber);
    },

    setPreviousNumber: function(number){
        this.previousNumber = number
        document.getElementById('previous_number_field').innerHTML = this.previousNumber;
    },

    resetCurrentNumber: function(){
        this.currentNumber = 0;
        document.getElementById('current_number_field').innerHTML = this.currentNumber;
    },

    moveNumberToMemory: function(){
        this.setPreviousNumber(this.currentNumber);
        this.resetCurrentNumber();
    },

    doCalculation: function(){
        var result = Number(this.previousNumber) + Number(this.currentNumber);
        this.setPreviousNumber(result);
        this.resetCurrentNumber();
    },
    add: function(){
        this.setOperator("+");
        this.moveNumberToMemory();
    },
    subtract: function(){
        this.setOperator("-");
        this.moveNumberToMemory();
    },
    multiply: function(){
        this.setOperator("x");
        this.moveNumberToMemory();
    },
    divide: function(){
        this.setOperator("&#x00F7;");
        this.moveNumberToMemory();
    },
    equals: function(){

    },
    setOperator: function(operator){
        document.getElementById('operator').innerHTML = operator;
    }
}