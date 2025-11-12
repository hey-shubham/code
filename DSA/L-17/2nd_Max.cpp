#include<iostream>
using namespace std;

int main(){
    system("cls");
    int arr[7] = {2,6,4,3,8,5,1}, s=7;
    int maxi = arr[0];
    int maxi2 = INT_MIN;

    for(int i=0;i<s;i++){
        maxi = max(maxi,arr[i]);
    }

    for(int i=0;i<s;i++){
        if(arr[i]!=maxi)
        maxi2 = max(maxi2,arr[i]);
    }
    cout<<maxi2;
}