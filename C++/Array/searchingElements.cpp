#include<bits/stdc++.h>
using namespace std;

int main (){

    int arr[]={10,20,7,11,8,4};
    int n=sizeof(arr)/sizeof(arr[0]);

    int index = -1;
    int target = 12;

    for(int i=0;i<n;i++){
        if(arr[i]==target){
            cout<<target<<" is present at "<<i+1<<"th position";
            return 0;
        }
    }
    cout<<index;
}