// finding first two digit of any number..
#include<iostream>
using namespace std;

// Function to find the first two digits of a number
int firstTwoDigits(int n) {
    n = abs(n); // handle negative numbers
    while (n >= 100) {
        n /= 10;
    }
    return n;
}

int main() {
    system("cls");
    int n;
    cout << "Enter a number: ";
    cin >> n;
    int first2 = firstTwoDigits(n);
    cout << "First two digits: " << first2 << endl;
    return 0;
}
