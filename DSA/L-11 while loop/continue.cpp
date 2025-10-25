// notes and examples related to continue statement in while loop in C++
#include<iostream>
using namespace std;

int main() {
    int i = 0;
    while (i < 10) {
        i++;
        if (i == 5) {
            continue;  // Skip the rest of the loop when i is 5
        }
        cout << i << " ";
    }
    return 0;
}
// This will print numbers from 1 to 10, skipping 5