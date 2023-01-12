class Container {
    constructor() {
      this.data = [];
    }
    
    add(value) {
        this.data.push(value);
        this.data.sort((a, b) => a - b);
        
        return this.data;
      }

    
    delete(value) {
        var index = this.data.indexOf(value);
        //console.log("INDEX: ", index);
        
        if (index > -1) {
            this.data.splice(index, 1);
            return true;
        }
        else{
            return false;
        }
    }
    
    getMedian() {
        if(this.data.length > 0){
            var index = Math.floor(this.data.length / 2);

            if (this.data.length % 2 == 0) {
                index--;
            }
            //console.log("MEDIAN INDEX: ", index);
            return this.data[index];
        }
        else
        {
            //console.log("FALHA MEDIANA");
            throw new Error("Sorry, but failed");
        }
      }

    setElementAtIndex(index, value) {
        this.data[index] = value;
    }

    getElementAtIndex(index) {
        return this.data[index];
    }

    getAll(){
        console.log(this.data);
    }
//JUST DELETE IDENTICAL ITEMS INTO ONLY 1 ITEM
    merge1(data1) {
        //console.log(data1);
        const copy = [...data1];

        console.log("copy BEFORE = ", copy);

        data1.map((item1, index1) => {
            //console.log("--->>> ", index1, " = ", item1);

            copy.map((item2, index2) => {
                //console.log(index2, " = ", item2);

                if (item1.id === item2.id && index1 < index2) {
                    //console.log("########################################################");
                    //console.log("index1: ", index1, " || ", "index2: ", index2);
                    //console.log("item1.id: ", item1.id, " || ", "item2.id: ", item2.id);
                    //console.log("########################################################");
                    copy.splice(index2, 1);
                }
            })
        })

        console.log("copy AFTER = ", copy);
        console.log("#############################################################");
        console.log("#############################################################");
        console.log("#############################################################");
    }
//DELETES IDENTICAL ITEMS INTO ONLY 1 (IN "data1") + IDENTIFIES THE SAME ID IN "data2" BY MERGING ADDITIONAL DATA TO A NEW OBJECT
    merge2(data1, data2) {
        console.log("--->>> DATA = ", data1);
        console.log("#############################################################");

        const copy = [...data1];
        const indexes = [];

        data1.map((item1) => {
            const repeat = [];
            copy.map((item2, index2) => {
                if(item2.id === item1.id)
                {
                    repeat.push(index2);
                }
            })

            indexes.push(repeat);
        });
        console.log("indexes -> ", indexes);
        console.log("#############################################################");

        var repeated = indexes.filter((item) => {
            //console.log("item = ", item);
            //console.log("item.length -> ", item.length);
            return item.length > 1;
        });
        console.log("repeated 1 -> ", repeated);
        console.log("#############################################################");
        
        repeated.map((item, index, array) => {            
            const ind = array.findIndex(item2 => item2 === item);
            //console.log("INDEX = ", ind);
            if(ind !== -1) {
                repeated.splice(ind, 1);
            }
        });
        console.log("repeated 2 -> ", repeated);
        console.log("#############################################################");

        data1.map((item, index) => {
            const obj = Object.assign({}, {
                id: item.id, 
                name: item.name,
                orders: {
                    counter: indexes.at(index).length,
                    products: {},
                    prices: {}
                }
            });
            //console.log("OBJECT: ", obj);

            Object.assign(item, obj);
        });
        console.log("--->>> data1 ADJUSTED: ", data1);
        console.log("#############################################################");

        const prod = [];
        const pric = [];
        
        data1.map((item1) => {
            const pro1 = [];
            const pri1 = [];
            data2.map((item2) => {
                if(item2.id === item1.id) {
                    pro1.push(item2.product);
                    pri1.push(item2.price);
                }
            });

            prod.push(pro1);
            pric.push(pri1);
        });
        console.log("$$$ prod = ", prod);
        console.log("$$$ pric = ", pric);

        data1.map((item, index) => {
            //Object.assign(item.orders.products, JSON.stringify(prod.at(index)));
            //Object.assign(item.orders.prices, JSON.stringify(pric.at(index)));
            item.orders.products = JSON.stringify(prod.at(index));
            item.orders.prices = JSON.stringify(pric.at(index));
        });

        console.log("data1 MERGED 1", data1);
        console.log("#############################################################");


        repeated.map((item) => {
            item.map((item2, index2) => {
                if(index2 > 0) {
                    data1.splice(item2, 1);
                }
            });
        });
        console.log("data1 MERGED 2", data1);
        console.log("#############################################################");
        console.log("#############################################################");
        console.log("#############################################################");
    }

    maths(arrayNumbers){
        console.log("ARRAY = ", arrayNumbers)
        console.log("MAX -> ", Math.max(...arrayNumbers));
        console.log("MIN -> ", Math.min(...arrayNumbers));

        var sumMax = 0;
        
        arrayNumbers.map((item, index) => {
            if (item === Math.max(...arrayNumbers)) {
                //console.log(index, " -->> ", item);
                sumMax += item;                
            }
        });
        console.log("SUM OF MAX 1 -> ", sumMax);
        /*
//IT WORKS BUT IT'S A COMPLETE CRAZY WAY
        sumMax = 0;
        console.log("SUM OF MAX 0 -> ", sumMax);

        const sum = arrayNumbers.reduce((accumulator, current, index) => {
            console.log(`accumulator: ${accumulator}, current: ${current}, index: ${index}`);

            if(index === 1 && accumulator === Math.max(...arrayNumbers)) {
                console.log("------------------->>>>>>>>>>>>>>>>>>> accumulator MAX");
                sumMax += accumulator;
            }

            if(current === Math.max(...arrayNumbers)) {
                console.log("------------------->>>>>>>>>>>>>>>>>>> current MAX");
                sumMax += current;
            }
            return sumMax;
        });
        console.log("SUM OF MAX 2 -> ", sum);
        */
    }
}

module.exports = Container;
