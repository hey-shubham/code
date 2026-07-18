#include<bits/stdc++.h>
using namespace std;

int main(){

    int arr[]={6,11,7,4,8,9};
    int n=sizeof(arr)/sizeof(arr[0]);
    int new_arr[n];
    int j = 0;

    for(int i=n-1;i>=0;i--){
        new_arr[j]=arr[i];
        j++;
    }
    for(int j=0;j<n;j++){
    cout << new_arr[j] << " ";
    }
    return 0;
}
