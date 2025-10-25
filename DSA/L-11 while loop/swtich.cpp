// notes and examples related to switch statement in C++
#include<iostream>
using namespace std;

int main() {
    system("cls");
    int day;
    cout << "Enter day number (1-7): ";
    cin >> day;
    switch (day) {
        case 1:
            cout << "Monday";
            break;
        case 2:
            cout << "Tuesday";
            break;
        case 3:
            cout << "Wednesday";
            break;
        case 4:
            cout << "Thursday";
            break;
        case 5:
            cout << "Friday";
            break;
        case 6:
            cout << "Saturday";
            break;
        case 7:
            cout << "Sunday";
            break;
        default:
            cout << "Invalid day";
    }
    return 0;
}
// This will print the name of the day corresponding to the entered number