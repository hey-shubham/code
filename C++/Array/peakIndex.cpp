#include<bits/stdc++.h>
using namespace std;

int peakIndex(int arr[],int n,int ans,int index)
{
    for(int i=0;i<n;i++){
        if(arr[i]>ans){
            ans = arr[i];
            index = i;
        }
    }
    return index;
}

int main(){

    int arr[] = {2,4,6,8,10,8,5};
    int n = sizeof(arr)/sizeof(arr[0]);
    int ans = INT_MIN;
    int index;

   cout<<peakIndex(arr,n,ans,index);
}