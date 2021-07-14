// study in this
export { }

function say(job: any) {

}

let job = 1;

let foo = { name: "123", age: 321 }

say(job); //在严格模式下 this === undefine, 否则和下面的是一样的，this === window

//window.say(job)

say.call(foo, job); // this === foo

let person = {
    name: "114514",
    age: 1919810,
    say: say
}

person.say(job); // this === person
