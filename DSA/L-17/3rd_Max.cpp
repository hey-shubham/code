#include<iostream>
using namespace std;

int main(){
    system("cls");

    int arr[7] = {2,6,4,3,8,5,1};
    int maxi = arr[0];
    int maxi2 = INT_MIN; 
    int maxi3 = INT_MIN;
    
    for(int i=0;i<7;i++)
    {
      maxi = max(maxi,arr[i]);
    }

    for(int i=0;i<7;i++)
    {
      if(arr[i]!=maxi)
      maxi2 = max(maxi2,arr[i]);
    }
    
    for(int i=0;i<7;i++)
    {
      if(arr[i]!=maxi && arr[i]!=maxi2 )
      maxi3 = max(maxi3,arr[i]);
    }
    cout<<maxi3;
}