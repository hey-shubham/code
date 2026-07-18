#include<bits/stdc++.h>
using namespace std;

int main(){

    int arr[] = {1,2,3,4,5,6,7,8,9};
    int n = sizeof(arr)/sizeof(arr[0]);

    int i=0,j=n-1;

    while(i<j){
        swap(arr[i],arr[j]);
        j--;
        i++;
    }

    for(int j=0;j<n;j++){
        cout<<arr[j]<<" ";
    }

}