number = 10, 1500, 123456 /*Angka Tampa Desimal(akurat sampai 15 digit)*/
number = 3.14, 0.5, 100.00 /*Angka Dengan Desimal*/
number = 123e5, 123e-5 /*Eksponen*/
number = -123, -4000 /*Dscimal*/

//Angka Spesial
number = Infinity
number = -Infinity
number = NaN

//Operator

/*
1. Aritmatika (Binary)
2. Penugasan (Binary)
3. Perbandingan (Binary)
4. Logika (Binary)
5. String (Binary)
6. Kondisional (Ternary)
7. Typeof (Unary)

Binary = 2 operand
{operand1 operator operand2}

Unary = 1 operand 
{operator operand/operand operator}

Ternary = 3 operand
*/

//1. aritmatika : (), *, /, +, -, %.//
10 + 10 
10 - 10
10 * 10
10 / 10
(10 + 10 *(10 / 10))

//2. penugasan : =, +=, -=, *=, /=, %=. (biasanya menggunakan var)//
var x = 12
var y = 20
x += 2
x -= 2
x *= 2
//dst//

//3. perbandingan : ==, !=, ===, !==, >, <, >=, <=. boolean(true,false)//
10 == 10 (true)
10 != 10 (false)
//dst//

/*4. logika : 
-&& (and)
-|| (or)
-! (not)*/
var x = 10
var y = 15
(x % 2 ) && (x + 6 ) (true) ;
(x % 2 ) && (x + 10 ) (false) ;
(x % 2 ) || (x + 10 ) (true) ;
!(x % 2 ) && !(x + 6 ) (false) ;

//5. string : + (var 1 + "" + var 2 = space)//
var a = "hello worls"
var b = "hi world"
string = "hello World" + "hi World" 
string = a + b

/*6. typeof : 
- typeof(operand)*/
typeof("hello world" = string)
typeof(123456 = number)
typeof(true, false = boolean)

/*7. kondisional :
    - (kondisi) ? "benar" : "salah"*/
var x = 12
var y = 20
string = Calculator
(x + y == 12 + 20) ? "true" : "false" ;
("Calculator" + 12 !== x - string) ? "true" : "false" ;




