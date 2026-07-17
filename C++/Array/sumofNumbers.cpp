#include<bits/stdc++.h>
using namespace std;

int main(){
    int n,sum=0;
    cout<<"Enter how many numbers you give : ";
    cin>>n;

    int arr[n];

    cout<<"Enter " <<n<<" numbers : ";
    for(int i=0;i<n;i++){
    cin>>arr[i];
    sum+=arr[i];   // we optimize our code by removing extra for loops
    }

    cout<<"The numbers are : ";

    for(int i=0;i<n;i++){
    cout<<arr[i]<<" ";
    }
    
    cout<<endl;

    cout<<"The sum of your given numbers are : "<<sum;
}

    // for(int i=0;i<n;i++){
    // sum+=arr[i];
    //  }
    // cout<<sum;