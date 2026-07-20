// agar element present hogi to uski index return ho jayegi wrna -1 retun hogi.

#include<bits/stdc++.h>
using namespace std;

int BinarySearch(int arr[], int n, int key)
{
    // start, end, mid;
    int start = 0, end = n-1, mid;

    while(start<=end){
        mid = start+(end-start)/2;

        if(arr[mid]==key){
            cout<<"Target Element Found :";
            return mid;
        }
        else if(arr[mid]<key){
            start = mid+1;
        }
        else{
            end = mid-1;
        }
    }

    return -1;
}

int main(){

    int arr[1000];
    int n;

    cout<<"Enter the number of element in array :";
    cin>>n;

    cout<<"Enter the elements :";
    for(int i=0;i<n;i++)
    cin>>arr[i];

    int key;
    cout<<"Enter target element :";
    cin>>key;

   cout<<BinarySearch(arr,n,key);
   return 0;
}

