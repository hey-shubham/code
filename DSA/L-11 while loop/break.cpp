// notes and examples related to break statement in while loop in C++
#include<iostream>
using namespace std;

int main() {
    int i = 0;
    while (i < 10) {
        i++;
        if (i == 5) {
            break;  // Exit the loop when i is 5
        }
        cout << i << " ";
    }
    return 0;
}

// This will print numbers from 1 to 4