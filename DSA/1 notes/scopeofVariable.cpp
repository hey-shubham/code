/*
===========================================
SCOPE OF VARIABLES - Complete Notes
===========================================

SCOPE = Where a variable can be accessed in your program

1. LOCAL SCOPE (Function/Block Scope)
2. GLOBAL SCOPE 
3. BLOCK SCOPE (Inside {})
4. FUNCTION PARAMETER SCOPE
*/

#include<iostream>
using namespace std;

// GLOBAL VARIABLE - Can be accessed anywhere in program
int globalVar = 100;

/*
===========================================
1. LOCAL SCOPE EXAMPLE
===========================================
*/
void localScopeExample() {
    int localVar = 50;  // Local to this function only
    cout << "Local variable: " << localVar << endl;
    cout << "Global variable inside function: " << globalVar << endl;
    
    // localVar dies when function ends
}

/*
===========================================
2. BLOCK SCOPE EXAMPLE  
===========================================
*/
void blockScopeExample() {
    int x = 10;  // Function scope
    
    if(x > 5) {
        int y = 20;  // Block scope - only inside this {}
        cout << "x inside if: " << x << endl;  // Can access x
        cout << "y inside if: " << y << endl;  // Can access y
    }
    
    cout << "x outside if: " << x << endl;   // Can access x
    // cout << y;  // ERROR! y is not accessible here
}

/*
===========================================
3. LOOP SCOPE EXAMPLE
===========================================
*/
void loopScopeExample() {
    // i has different scope in each loop
    
    for(int i = 1; i <= 3; i++) {  // i is local to this for loop
        cout << "For loop i: " << i << endl;
    }
    
    int j = 1;
    while(j <= 3) {
        int temp = j * 2;  // temp is local to while loop body
        cout << "While loop temp: " << temp << endl;
        j++;
    }
    
    // cout << i;     // ERROR! i is not accessible
    // cout << temp;  // ERROR! temp is not accessible
    cout << "j outside while: " << j << endl;  // j is accessible
}

/*
===========================================
4. FUNCTION PARAMETER SCOPE
===========================================
*/
void parameterScopeExample(int param1, char param2) {
    // param1 and param2 are local to this function
    cout << "Parameter 1: " << param1 << endl;
    cout << "Parameter 2: " << param2 << endl;
    
    int localVar = param1 + 10;
    cout << "Local variable: " << localVar << endl;
}

/*
===========================================
5. VARIABLE SHADOWING EXAMPLE
===========================================
*/
int shadowVar = 999;  // Global variable

void shadowingExample() {
    int shadowVar = 555;  // Local variable shadows global
    
    cout << "Local shadowVar: " << shadowVar << endl;      // Prints 555
    cout << "Global shadowVar: " << ::shadowVar << endl;   // Prints 999 (using ::)
    
    {
        int shadowVar = 111;  // Block variable shadows both
        cout << "Block shadowVar: " << shadowVar << endl;   // Prints 111
    }
    
    cout << "Back to local shadowVar: " << shadowVar << endl;  // Prints 555
}

/*
===========================================
6. PRACTICAL EXAMPLE - CALCULATOR
===========================================
*/
int result = 0;  // Global variable to store result

void calculator() {
    int choice;          // Local to calculator function
    int num1, num2;      // Local variables
    
    do {
        cout << "\n--- Calculator ---" << endl;
        cout << "1. Add  2. Subtract  3. Exit" << endl;
        cout << "Choice: ";
        cin >> choice;
        
        if(choice == 1 || choice == 2) {
            cout << "Enter two numbers: ";
            cin >> num1 >> num2;
            
            if(choice == 1) {
                int sum = num1 + num2;  // Block scope variable
                result = sum;           // Store in global variable
                cout << "Sum: " << sum << endl;
            } else {
                int diff = num1 - num2; // Block scope variable  
                result = diff;          // Store in global variable
                cout << "Difference: " << diff << endl;
            }
        }
        
    } while(choice != 3);
    
    // sum and diff are not accessible here
    // but result is accessible as it's global
}

/*
===========================================
MAIN FUNCTION - TESTING ALL EXAMPLES
===========================================
*/
int main() {
    system("cls");
    
    cout << "=== SCOPE OF VARIABLES EXAMPLES ===" << endl;
    
    // Test all examples
    cout << "\n1. Local Scope:" << endl;
    localScopeExample();
    
    cout << "\n2. Block Scope:" << endl;
    blockScopeExample();
    
    cout << "\n3. Loop Scope:" << endl;
    loopScopeExample();
    
    cout << "\n4. Parameter Scope:" << endl;
    parameterScopeExample(25, 'A');
    
    cout << "\n5. Variable Shadowing:" << endl;
    shadowingExample();
    
    cout << "\n6. Calculator Example:" << endl;
    // calculator();  // Uncomment to test
    
    cout << "\nGlobal result variable: " << result << endl;
    
    return 0;
}

/*
===========================================
KEY POINTS TO REMEMBER:
===========================================

1. SCOPE HIERARCHY (Inner to Outer):
   Block Scope -> Function Scope -> Global Scope

2. VARIABLE LIFETIME:
   - Local variables: Created when declared, destroyed when scope ends
   - Global variables: Live throughout program execution

3. BEST PRACTICES:
   - Use local variables whenever possible
   - Avoid global variables unless necessary
   - Give meaningful names to avoid confusion
   - Declare variables in smallest possible scope

4. COMMON ERRORS:
   - Trying to access variable outside its scope
   - Variable shadowing causing confusion
   - Using uninitialized variables

5. SCOPE RESOLUTION:
   - Use :: operator to access global variables when shadowed
   - Example: ::globalVariable

===========================================
*/
