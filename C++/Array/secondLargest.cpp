#include<bits/stdc++.h>
using namespace std;

int main(){

    int arr[] = {5,60,41,25,35,92,67,80,22};
    int n = sizeof(arr)/sizeof(arr[0]);
    int largest = INT_MIN;
    int second_largest = INT_MIN;
    int i;

    for(int i=0;i<n;i++){
        if(arr[i]>largest){
        largest = arr[i];
        }
    }

    for(int i=0;i<n;i++){
        if(arr[i]!=largest && arr[i] > second_largest){
        second_largest = arr[i];
    }
}
    cout<<second_largest;
    return 0;
}