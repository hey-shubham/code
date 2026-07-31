#include<iostream>
#include<vector>
#include<algorithm>

using namespace std;

int main(){

    vector<int>arr = {0,1,0,1,0,1};
    int n = arr.size();
    int start = 0;
    int end = n-1;

    while(start<end){
        if(arr[start]==0){
        start++;
        }
        else{
            if(arr[end]==0){
                swap(arr[start],arr[end]);
                start++;
                end--;
            }
            else{
                end--;
            }
        }
    }

    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }

    return 0;
}