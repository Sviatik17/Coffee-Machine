function CoffeMachine(power){
    this.waterAmount = 0;
    this.milkAmount=0;
    this.boilTime=0;
    let timerID;
    this.allMilk=1000;
    this.allWater=1000;
    const WATER_HEAT_CAPACITY = 4200;
   let  getBoilTime = function(){
    let boilTime = (this.waterAmount+this.milkAmount)*WATER_HEAT_CAPACITY*80/power;
    console.log(`Час приготування: ${boilTime} мс`)
    let newBoilTime =`${boilTime}`
    let newBoilTime2=(newBoilTime.slice(1,2))
    console.log(newBoilTime.slice(1,2))
    $('.screen').text(newBoilTime2)
   let countingReady =function(){

        if(newBoilTime2>0){
            let interval = setInterval(
                function counting(){
                    newBoilTime2-=1
                    console.log(newBoilTime2)
                    $('.screen').text(newBoilTime2)
                    if(newBoilTime2===0){
                        clearInterval(interval)
                        $('.screen').text('Ready')
                    }
                }
          
            ,1000)
        } 
      
   }
   countingReady()
   
        return boilTime;
    }.bind(this)
    function onReady(){
        console.log('Кава готова')
        
    }

    this.run =function(){
        if(this.allWater>=150&&this.allMilk>=150&&emptyCup==true){
            timerID=setTimeout(onReady,getBoilTime())
           
           emptyCup=false
            waterHeight-=machine.waterAmount/10
            console.log(waterHeight)
            $('.water').css('height',waterHeight+'%')
            milkHeight-=machine.milkAmount/10
            console.log(milkHeight)
            $('.milk').css('height',milkHeight+'%')
            this.allWater-=this.waterAmount
            this.allMilk-=this.milkAmount
            console.log(this.allWater)
            console.log(this.allMilk)
           
           
            $('.pouringCoffee').slideDown(2100)
            

            pouringTimer =setTimeout(
                function(){
                    $('.readyDrink').fadeIn(2100)
                    
                }
 
            ,2100)
            
            pouringTimer2 =setTimeout(
                function(){
                    $('.pouringCoffee').slideUp(2100)
                  
            //          $('.readyDrink').css('position','relative')
            // $('.readyDrink').css('top','70px')
                    
                }
                 ,4200)
                 
                 pouringTimer3=setTimeout(
                    function(){
                        $('.drink').show(0)
                        
                    }
                     ,6300)

          
             $('.readyDrink').css('position','fixed')
            
           
        }else if(emptyCup==false){
            alert('Чашка повна')
        }
        else{
            alert('Недостатньо води або молока')
        }
        

    }
    this.stop = function(){
        clearTimeout(timerID)
    }
}
let machine = new CoffeMachine(15000)
emptyCup=true
console.log(emptyCup)
// $('.pourCoffee').hide(0)
// $('.Drink').hide(0)
// let coffeeHeight = 120;
// $('.coffeeDrink').css('height',`${coffeeHeight}+px`)
// function pouringCoffee(){
//     timerID=setTimeout(function(){
//         $('.coffeeDrink').slideDown(2000)
//         $('.pourCoffee').slideUp(2000)
//       },2000)
// }

 let waterHeight=100;  
 let milkHeight=100; 
 $('.pouringCoffee').hide(0)
 $('.readyDrink').hide(0)
 $('.drink').hide(0)



$('.espresoBtn').click(function(){
    machine.waterAmount = 150;
    machine.milkAmount =0;
    $('.pouringCoffee').css("background-color", 'rgb(58, 36, 2)')
    $('.readyDrink').css("background-color",'   rgb(58, 36, 2)')
    machine.run()
})

$('.americanoBtn').click(function(){
    machine.waterAmount = 150;
    machine.milkAmount =50;
    $('.pouringCoffee').css("background-color", 'rgb(58, 36, 2)')
    $('.readyDrink').css("background-color",'   rgb(58, 36, 2)')
    machine.run()
})

$('.capuccinoBtn').click(function(){
    machine.waterAmount = 150;
    machine.milkAmount =150;
    $('.pouringCoffee').css("background-color", 'rgb(58, 36, 2)')
    $('.readyDrink').css("background-color",'  rgb(58, 36, 2)')
    machine.run()
})


$('.waterBtn').click(function(){
    machine.waterAmount = 150;
    machine.milkAmount =0;
    $('.pouringCoffee').css("background-color", 'rgb(31, 112, 233)')
    $('.readyDrink').css("background-color",'   rgb(31, 112, 233)')
    machine.run()
})

    $('.addWater').click(function(){
        if(machine.allWater<1000){
            waterHeight+=15
            machine.allWater+=150
            $('.water').css('height',waterHeight+'%')
        }
      
    })
    $('.addMilk').click(function(){
        if(machine.allMilk<1000){
            milkHeight+=15
            machine.allMilk+=150
            $('.milk').css('height',milkHeight+'%')
        }
      
    })

    $('.drink').click(function(){
        $('.readyDrink').fadeOut(2100)
        $('.drink').hide(0)
        $('.screen').text('Choose drink')
        emptyCup=true
    })
//     $('.pourCoffee').slideDown(1300)
//     pouringCoffee()
   
//     $('.water').css('height',waterHeight-10+'%')
//     waterHeight-=10
    
   
    
// })



