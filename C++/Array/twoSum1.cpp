#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

int main(){

    vector<int> arr = {11,2,27,15,7};
    vector<int> ans;
    int target = 22;
    int n= arr.size();
    
    for(int i=0;i<n-1;i++){
        for(int j=i+1;j<n;j++){
            if(arr[i]+arr[j]==target){
            ans.push_back(arr[i]),ans.push_back(arr[j]);
            break;
            }
        }
    }

    for(int x : ans)
    {
    cout << x << " ";
    }
 
}