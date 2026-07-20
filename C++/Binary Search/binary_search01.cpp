#include<bits/stdc++.h>
using namespace std;

int main(){

    int arr[] = {12,18,25,36,38,46,50,58,72,79,81,86,93,97,100};
    int n = sizeof(arr)/sizeof(arr[0]);
    int start = 0;
    int end = n-1;
    int key = 81;

    while (start <= end) {
    int mid = start + (end - start) / 2;

    if (arr[mid] == key) {
        cout << "Key Found ";
        return 0;
    }
    else if (arr[mid] < key) {
        start = mid + 1;
    }
    else {
        end = mid - 1;
    }
}

cout << "Key Not Found";

}