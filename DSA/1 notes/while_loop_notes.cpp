/*
===========================================
WHILE LOOP NOTES - DSA Learning
===========================================

1. BASIC WHILE LOOP SYNTAX:
   while(condition) {
       // code to execute
   }

2. COUNTING EXAMPLE (1 to 10):
*/
#include<iostream>
using namespace std;

void basicWhileLoop() {
    int i = 1;
    while(i <= 10) {
        cout << i << " ";
        i++; // Important: increment to avoid infinite loop
    }
}

/*
3. EVEN/ODD CHECK:
   - Use modulo operator (%)
   - n%2 == 0 means even
   - n%2 != 0 means odd
*/
void evenOddCheck(int n) {
    if(n % 2 == 0) {
        cout << "Even number";
    } else {
        cout << "Odd number";
    }
}

/*
4. SUM CALCULATION:
   - Initialize sum = 0
   - Add each number to sum
   - Sum of 1 to n = n(n+1)/2
*/
void calculateSum(int n) {
    int sum = 0, i = 1;
    while(i <= n) {
        sum += i;
        i++;
    }
    cout << "Sum = " << sum;
}

/*
IMPORTANT POINTS:
- Always update loop variable to avoid infinite loops
- Use break statement when needed
- Post-increment (i++) vs Pre-increment (++i)
- Condition should eventually become false
*/
