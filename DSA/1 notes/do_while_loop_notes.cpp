/*
===========================================
DO-WHILE LOOP NOTES - DSA Learning
===========================================

1. DO-WHILE SYNTAX:
   do {
       // code executes at least once
   } while(condition);

2. KEY DIFFERENCE FROM WHILE:
   - Executes body at least once
   - Condition checked after execution
   - Semicolon after while() is mandatory
*/
#include<iostream>
using namespace std;

void doWhileExample() {
    int i = 1, sum = 0, n = 5;
    
    do {
        sum += i;
        cout << "Step " << i << ": Sum = " << sum << endl;
        i++;
    } while(i <= n);
    
    cout << "Final Sum = " << sum << endl;
}

/*
3. WHEN TO USE DO-WHILE:
   - Menu-driven programs
   - Input validation
   - At least one execution guaranteed

4. EXAMPLE - INPUT VALIDATION:
*/
void inputValidation() {
    int choice;
    do {
        cout << "Enter 1-5: ";
        cin >> choice;
        if(choice < 1 || choice > 5) {
            cout << "Invalid! Try again." << endl;
        }
    } while(choice < 1 || choice > 5);
}

/*
REMEMBER:
- Always executes once
- Check condition after execution
- Don't forget semicolon after while()
*/
