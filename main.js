const { Order } = require("./class");

const queue = new Order();

queue.addOrder(
    { name: 'Nasi Goreng', quantity: 2 },
    { name: 'Teh Manis', quantity: 1 }
);

queue.addOrder(
    { name: 'Mie Goreng', quantity: 3 },
    { name: 'Air Mineral', quantity: 1 }
);

queue.printQueue();

queue.processQueue();