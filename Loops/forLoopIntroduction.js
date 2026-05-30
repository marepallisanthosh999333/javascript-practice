/**
 * in this we will learn about for loop in javascript
 * for loop is used to repeat a block of code a certain number of times
 * it consists of three parts: initialization, condition, and increment/decrement
 * the syntax of for loop is as follows:
 * for (initialization; condition; increment/decrement) {
 *   // code to be executed
 * }
 * initialization is executed only once at the beginning of the loop
 * condition is evaluated before each iteration of the loop, if it returns true, the loop continues, otherwise it stops
 * increment/decrement is executed after each iteration of the loop
 * let's see an example of for loop in action
 * we will print the numbers from 1 to 10 using a for loop
 * 
 * The initialization statement is executed before the loop starts. It is typically used to initialize a counter variable. A counter variable is a variable that is used to keep track of how many times the loop has run.

   The condition statement is evaluated before each iteration of the loop. An iteration is a single pass through the loop.

   If the condition is true, the code block inside the loop is executed. If the condition is false, the loop stops and you move on to the next block of code.

   The last part of the loop is the increment/decrement statement. This statement is executed after each iteration of the loop. It is typically used to increment or decrement the counter variable.                                                                                                                                                                                                                                                                                                                                                                                                                              
 */

for(i = 0; i<10; i++) {
    console.log(i);
}
