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
        navigator.vibrate(50);
    },

    setPreviousNumber: function(number){
        this.previousNumber = number;
        var string = numeral(number).format('0,0.00');
        document.getElementById('previous_number_field').innerHTML = string;
    },

    resetCurrentNumber: function(){
        this.currentNumber = 0;
        document.getElementById('current_number_field').innerHTML = this.currentNumber;
    },

    moveNumberToMemory: function(result){
        this.setPreviousNumber(result);
        this.resetCurrentNumber();
    },
    setOperation: function(nextOperator, operatorSign){
        if(this.operator != undefined){
            this.equals();
        }
        this.operator = nextOperator;
        this.setOperator(operatorSign);
        if(this.currentNumber != 0){
            this.moveNumberToMemory(this.currentNumber);
        }
        navigator.vibrate(50);
    },
    add: function(){
        return Number(this.previousNumber) + Number(this.currentNumber);
    },
    subtract: function(){
        return  Number(this.previousNumber) - Number(this.currentNumber);
    },
    multiply: function(){
        return  Number(this.previousNumber) *  Number(this.currentNumber);
    },
    divide: function(){
        if(this.currentNumber === 0){
            return 'NAN';
        } else{
            return result =  Number(this.previousNumber)/ Number(this.currentNumber);
        }
    },
    equals: function(){
        var result = undefined;
        switch(this.operator){
            case '+':
                result = this.add();
                break;
            case '-':
                result = this.subtract();
                break; 
            case '*':
                result = this.multiply();
                break; 
            case '/':
                result = this.divide()
                break;
            default:
                return;
        }
        this.moveNumberToMemory(result);
        this.clearEntry();
    },
    setOperator: function(newOpoeratorSign){
        if(newOpoeratorSign === undefined){
            document.getElementById('operator').innerHTML = '';
        } else {
            document.getElementById('operator').innerHTML = newOpoeratorSign;
        }
    },
    clearEntry: function(){
        this.resetCurrentNumber();
        this.setOperator(undefined);
    },
    clear: function(){
        this.clearEntry();
        this.setPreviousNumber(0);
    }
}