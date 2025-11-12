#include<iostream>
#include<vector>
using namespace std;

int main(){
    system("cls");

    int a=0,b=1,n,c;
    vector<int> arr;
    cout<<"Enter the no. of terms";
    cin>>n;
    cout<<"Fibonacci : "<<endl;
    for(int i=1;i<=n;i++)
    {
        arr.push_back(a);
        // cout<<a<<" ";
        c=a+b;
        a=b;
        b=c;
    }

    cout<<" Shubham bhaiya biscuit"<<endl;

    for(int i=0;i<arr.size();i++){
        cout<<arr[i]<<" ";
    }
}