// FOR LOOPS
// Question#3

// var num = +prompt('Enter a number to print its multiplication table')
// var num1 = +prompt('Enter lenght of multiplication table')

// for(var i=1; i <= num1 ; i++){
//     document.write(num + 'x' + i + '=' + num*i + '<br>')
// }

// Question#5

// var arr = ['apple','banana', 'mango', 'orange', 'strawberry']

// for(var i = 0; i < arr.length; i++){
//     document.write(arr[i] + '<br>')
// }

// Question#8

// var bakery = prompt('Welcome to ABC Bakery! What do you want to order?')
// var abc = bakery.slice().toLowerCase()
// var arr = ['cake','apple pie','cookie','chips','patties']
// var match = false

// for(var i=0; i<arr.length; i++){
// if(abc == arr[i]){
//     match = true
//     document.write(abc + ' is available at index ' + arr.indexOf(abc) + ' in our bakery.')
//     break
// }
// }
// if(match == false){
//     document.write('We are sorry. ' + abc + ' is not available in our bakery.')
// }

// Question#13

// var students = ['Ali','Sami','Taha','Inam']
// var scores = [58,73,89,90]

// for(var i=0; i < students.length ; i++){
// document.write('<table border="1" style="width: 100px;">' + 
// '<tr>' + '<td>' + students[i] + '</td>'+'<td>'+ scores[i] +'</td>'+ '</tr>'+
// '</table>')}

// Question#15

// var arr = [[1,2,3],[4,5,6],[7,8,9]]

// for(var i = 0; i < arr.length; i++) {
//     var row = arr[i];
//     var rowStr = "";
//     for (var j = 0; j < row.length; j++) {
//         rowStr += row[j] + " ";
// }
// document.write(rowStr.trim()+ '<br>')
// }


// FUNCTIONS
// Question#3



// function greet(){
//     var a = prompt('Enter your Name')
//     var b = prompt('Enter your Father`s Name')
//     document.write('Welcome ' + a + ' ' + b)
// }
// greet()

// Question#5

// var num1 = +prompt('Enter Number1')
// var op = prompt('Enter + - / * ')
// var num2 = +prompt('Enter Number2')


// function cal(){
//     if(op == '+'){
// document.write(num1 + num2)
// }
// if(op == '-'){
// document.write(num1 - num2)
// }
// if(op == '/'){
//     document.write(num1 / num2)
//     }
//     if(op == '*'){
//         document.write(num1 * num2)
//         }
// }
// cal()

// Question#19

// function checkPalindrome(string) {
//     var len = string.length

//     for (let i = 0; i < len / 2; i++) {
//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome'
//         }
//     }
//     return 'It is a palindrome'
// }
// var string = prompt('Enter a palindrome')
// var value = checkPalindrome(string)

// document.write(value)

// Question#29

// function cnf(){
//     var abc = +prompt('Convert Celsius into Fahrenheit')
//     var formula = (abc * 9/5) + 32
//     return Math.round(formula)
// }
// alert(cnf() + '\xB0' + 'F')


// function fnc(){
//     var xyz = +prompt('Convert Fahrenheit into Celsius')
//     var formulaa = (xyz - 32) * 5/9
//     return Math.round(formulaa)
// }
// alert(fnc() + '\xB0' + 'C')