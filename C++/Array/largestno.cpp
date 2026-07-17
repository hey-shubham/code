#include<bits/stdc++.h>
using namespace std;

int main(){
    
    int arr[]={1,220,55,4,68,26,55,46,12,50};
    int n = sizeof(arr) / sizeof(arr[0]);
    int ans = INT_MIN;
    
    for(int i=0;i<n;i++){
        if(arr[i]>ans)
        ans=arr[i];
    }
    cout<<"The Largest No is : "<<ans;
}