#include<bits/stdc++.h>
using namespace std;

int main(){
    int n,i,sum=0;
    cout<<"Enter a number : " ;
    cin>>n;

    for(i=1; i<=n;i++){
        sum+= i;
    }
    cout<<sum;
    return 0;
}