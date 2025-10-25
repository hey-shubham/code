/*
===========================================
COMMON ERRORS & SOLUTIONS - DSA Learning
===========================================

1. INFINITE LOOP ERRORS:
*/
#include<iostream>
using namespace std;

// WRONG WAY:
void infiniteLoopError() {
    int i = 1;
    while(i <= 10) {
        cout << i << " ";
        // Missing i++ causes infinite loop!
    }
}

// CORRECT WAY:
void correctLoop() {
    int i = 1;
    while(i <= 10) {
        cout << i << " ";
        i++; // Always update loop variable
    }
}

/*
2. POST vs PRE INCREMENT:
*/
void incrementDifference() {
    int i = 1;
    
    // Post-increment: use current value, then increment
    cout << i++ << " "; // prints 1, then i becomes 2
    
    // Pre-increment: increment first, then use value
    cout << ++i << " "; // i becomes 3, then prints 3
}

/*
3. EVEN/ODD LOGIC ERRORS:
*/
// WRONG:
void wrongEvenOdd(int n) {
    while(n % 2 == 0) {
        cout << "Even"; // Infinite loop if n is even!
    }
}

// CORRECT:
void correctEvenOdd(int n) {
    if(n % 2 == 0) {
        cout << "Even";
    } else {
        cout << "Odd";
    }
}

/*
4. SUM CALCULATION ERRORS:
*/
// WRONG:
void wrongSum() {
    int i = 1, sum = 0;
    while(i <= 5) {
        cout << sum + i << " "; // Not storing sum!
        i++;
    }
}

// CORRECT:
void correctSum() {
    int i = 1, sum = 0;
    while(i <= 5) {
        sum += i; // Store the sum
        cout << sum << " ";
        i++;
    }
}

/*
DEBUGGING TIPS:
1. Always check loop conditions
2. Ensure loop variables are updated
3. Use break statements carefully
4. Test with different input values
5. Print intermediate values for debugging
*/
