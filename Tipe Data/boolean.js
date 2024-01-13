//True | False//

boolean("NNR"),
    (123456);

/*
    Truthy :
        - True
        - Non-zero number
        -"string"
        - object
        - arrays
        - function
    
    falsy : 
        - false
        - 0
        - ""
        - undefined
        - null
        - NaN 
*/
string = "hello world";
var name1 = string;
var number = 1200;
boolean(
    (name1 += number) == ("hello world" += 1200)
) = (true);