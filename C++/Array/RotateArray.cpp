#include<bits/stdc++.h>
using namespace std;

int main(){

    int i,n,temp;
    int arr[] = {1,2,3,4,5,6};
    n = sizeof(arr)/sizeof(arr[0]);

    temp = arr[n-1];

    for(i=n-2; i>=0; i--){
        arr[i+1]=arr[i];
    }
    
    arr[0]=temp;

    for(i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }
    return 0;
}