// Given an Integer array arr[] of size N and an integer X, the task is to find the index of X in arr[]. If X is not present, return -1.

#include <iostream>
#include <vector>
using namespace std;

int main(){
    system("cls");
    int N;
    cout << "Enter N: ";
    if(!(cin >> N) || N <= 0) {
        cout << -1 << '\n';
        return 0;
    }

    vector<int> arr(N);
    cout << "Enter " << N << " elements: ";
    for(int i = 0; i < N; ++i)
        cin >> arr[i];

    int X;
    cout << "Enter X: ";
    cin >> X;

    for(int i = 0; i < N; ++i){
        if(arr[i] == X){
            cout << i << '\n'; // returns first index (0-based)
            return 0;
        }
    }

    cout << -1 << '\n';
    return 0;
}