/*
Create a code that could handle a queue on food ordering process, with this specification:
 - Create a class to handle queuing process in a file.
 - Create file to handle and execute queue class.
 - Each queue process takes a random interval from 1-10 seconds.
 - Clue : Use while & promise
*/

class Order{
  constructor(){
      this.orders=[];
      this.menus={
          'nasi goreng': 20000,
          'mie goreng': 20000,
          'mie rebus': 20000,
          'teh manis': 10000,
          'lemon tea': 15000,
          'air mineral': 8000
      };
  }

  addOrder(...order){
    let isValid;
      for(const item of order){
        isValid=false;
        if(item.name.toLowerCase() in this.menus){
            isValid=true;
        }else{
            console.log(`${order.name} is not on the menu`);
            break;
        }
      }
      if(isValid){
        console.log(`[Log] Order added to queue!`);
        this.orders.push(order)
      };
  }
  
  calculateTotal(array) {
      let total = 0;

      for (const order of array) {
          total += order.quantity * this.menus[order.name.toLowerCase()];
      }
      return total;
  }

  printQueue() {
      let i=1;
      console.log('[Log] Printing all data in queue');
      
      console.log('=====================================================================================');
      for(let order of this.orders){
          console.log(`Order ${i++}: ${JSON.stringify(order)} Total: Rp.${this.calculateTotal(order)}`);
      }
      console.log('====================================================================================');

  }
  
  async processQueue(){
      let queueNumber=1;
      while(this.orders.length > 0){
          const order = this.orders.shift();
          const interval = Math.floor(Math.random() *  6) +5 //random 5-10;
          console.log(`Processing Queue ${queueNumber}`);
          await this.progressQueue(interval,queueNumber++);
      }
  }

  async progressQueue(interval,queueNumber){
      return new Promise( resolve =>{
          const timer = setInterval( () => {
              process.stdout.write(`\r[Log] Queue ${queueNumber} Done in ${interval--} seconds`);
              
              if(interval<0){
                  clearInterval(timer);
                  process.stdout.clearLine(0);
                  process.stdout.cursorTo(0);
                  console.log(`\r[Log] Queue ${queueNumber} Completed`); 
                  resolve();
              }
          }, 1000);
      });
  }
};

module.exports = { Order };

