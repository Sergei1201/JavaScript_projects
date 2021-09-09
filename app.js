// Basic structure of module patterns
// (function() {
//     //Declare private variables and functions up here
//     return {
//         // Declare public variavbles and functions
//     }

// }) ();

//Standard module pattern

// const UICtrl = (function() {
//     let text = 'Hello world';
//     const changeText = function() {
//         const element = document.querySelector('h1');
//         element.textContent = text;
//     }
//     return {
//         callChangeText: function() {
//             changeText();
//             console.log(text);
//         }
//     }
// })();
// UICtrl.callChangeText();

//Revealing module patterns

// const ItemCtrl = (function() {
// let data = [];
// function add(item) {
//     data.push(item);
//     console.log('Item has been added');
// }

// function get(id) {
//     return data.find(item => {
//         return item.id ===id;
//     })
// }

// return {
//     add: add,
//     get: get
// }
// })()
    
// ItemCtrl.add({id: 1, name: 'John Doe'})

// Singleton pattern

// const Singleton =(function() {
//     let instance;
//     function createInstance() {
//         const object = new Object(' Object instance');
//         return object;
//     }
//     return {
//         getInstance: function() {
//             if(!instance) {
//                 instance = createInstance();
//             }
//             return instance;
//         }
//     }

// }) ();

// const instanceA = Singleton.getInstance();
// const instanceB = Singleton.getInstance();
// //console.log(instanceA);
// console.log(instanceA === instanceB);

// Factory patterns

// function MemberFactory() {
//     this.createMember = function(name, type) {
//     let member;
//     if(type === 'simple') {
//         member = new SimpleMemberShip(name);

//     } else if(type === 'standard') {
//         member = new StandardMemberShip(name);
//     } else if (type === 'super') {
//         member = new SuperMemberShip(name);
//     }

//     member.type = type;
//     member.define = function() {
//         console.log(`${this.name} (${this.type}): ${this.cost} `);
//     }
//     return member;

//     }
// }

// const SimpleMemberShip = function(name) {
//     this.name = name;
//     this.cost = '5$'
// }

// const StandardMemberShip = function(name) {
//     this.name = name;
//     this.cost = '15$'
// }

// const SuperMemberShip = function(name) {
//     this.name = name;
//     this.cost = '25$'
// }

// const members = [];
// const factory = new MemberFactory();
// members.push(factory.createMember('John Doe', 'simple'));
// members.push(factory.createMember('Sergei Sokolov', 'standard'));
// members.push(factory.createMember('Julia Sokolova', 'super'));
// //console.log(members);

// members.forEach(function(member) {
//     member.define();
// })










//Factory pattern

// function MemberFactory() {
//     this.CreateMember = function(name,type) {
//         let member;
//         if (type ==='simple') {
//             member = new SimpleMemberShip(name);
//         } else if (type ==='standard') {
//             member = new StandardMemberShip(name);
//         } else if (type ==='superb') {
//             member = new SuperMemberShip(name);
//         }
//         member.type = type;
//         member.define = function() {
//             console.log(`${this.name} (${this.type}) ${this.cost}`);
//         }

//         return member;
//     }
// }


// const SimpleMemberShip = function(name) {
//     this.name = name;
//     this.cost = '5$';
// }

// const StandardMemberShip = function(name) {
//     this.name = name;
//     this.cost = '15$';
// }

// const SuperMemberShip = function(name) {
//     this.name = name;
//     this.cost = '25$';
// }

// let members =[];
// const factory = new MemberFactory();
// members.push(factory.CreateMember('Daniil Sokolov', 'superb'));
// members.push(factory.CreateMember('Julia Sokolova', 'standard'));
// members.push(factory.CreateMember('Sergei Sokolov', 'simple'));

// members.forEach(function(member) {
//     member.define();
// })

// function EventObserver() {
//     this.observers = [];
// }
// EventObserver.prototype = {
//     subscribe: function(fn) {
//         this.observers.push(fn);
//         console.log(`You are now subscribed to ${fn.name}`)
//     },

//     unsubscribe: function(fn) {
//         this.observers = this.observers.filter(function(item) {
//     if(item !== fn) {
//         return item;
//     }
//         });
//         console.log(`You are now unsubscribed from ${fn.name}`);
//     },

//     fire: function() {
//         this.observers.forEach(function(item) {
//             item.call();
//         })
//     }
// }

// const click = new EventObserver();
// // Event listeners
// // Subscribe event
// document.querySelector('.sub-ms').addEventListener('click', function() {
//     click.subscribe(getCurMilliSeconds);
// });
// // Unsubscribe event
// document.querySelector('.unsub-ms').addEventListener('click', function() {
//     click.unsubscribe(getCurMilliSeconds);
// });
// // Fire event
// document.querySelector('.fire').addEventListener('click', function() {
//     click.fire();
// })

// document.querySelector('.sub-s').addEventListener('click', function() {
//     click.subscribe(getCurSeconds);
// });

// document.querySelector('.unsub-s').addEventListener('click', function() {
//     click.unsubscribe(getCurSeconds);
// })

// //Click handler
// const getCurMilliSeconds = function() {
//     console.log(`Current milliseconds: ${new Date().getMilliseconds()}`);
// }

// const getCurSeconds = function() {
//     console.log(`Current seconds: ${new Date().getSeconds()}`);
// }




// Observer patterns


function ObserverPattern() {
    this.observers = [];
}

ObserverPattern.prototype = {
    subscribe: function(fn) {
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}`);
    },

    unsubscribe: function(fn) {
        this.observers = this.observers.filter(function(item) {
            if (item !== fn) {
                return item;
            }
            console.log(`You are now unsubscribed from ${fn.name}`)
        })
    },

    fire: function() {
        this.observers.forEach(function(item) {
            item.call();
        })
    }
}

// Creating event listeners

const observer = new ObserverPattern();
document.querySelector('.sub-ms').addEventListener('click', function() {
    observer.subscribe(subscribeMilliSeconds);
})
document.querySelector('.unsub-ms').addEventListener('click', function() {
    observer.unsubscribe(subscribeMilliSeconds);
})

document.querySelector('.fire').addEventListener('click', function() {
    observer.fire();
})

const subscribeMilliSeconds = function() {
    console.log(`${new Date().getMilliseconds()}`);
}



















