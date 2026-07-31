
#include<bits/stdc++.h>
using namespace std;

int peakElementIndex(int arr[],int n,int start,int end,int mid){
    
    while(start<=end){
        mid = end + (start-end)/2;
        
        if(arr[mid]>arr[mid-1] && arr[mid]>arr[mid+1]){
            return mid;
        }
        else if(arr[mid]>arr[mid-1]){
            start = mid+1;
        }
        else{
            end = mid-1;
        }
    }
    return mid;
}

int main(){

    system("cls");

    int arr[] = {2,4,6,8,10,8,5};
    int n = sizeof(arr)/sizeof(arr[0]);
    int start = 0;
    int end = n-1;
    int mid,ans;

    cout<<peakElementIndex(arr,n,start,end,mid);
}