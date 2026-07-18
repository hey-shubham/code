#include<bits/stdc++.h>
using namespace std;

int n;

void print(int a[], int b)
{
    for(int i=0; i<n; i++){
       cout<<a[i]<<" "; 
    }
}

int main(){
    int arr[] = {1,2,3,4,5,6,7};
    n = sizeof(arr)/sizeof(arr[0]);
    print(arr,n);
}