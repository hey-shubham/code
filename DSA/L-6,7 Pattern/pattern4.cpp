#include<iostream>
using namespace std;
int main()
{
    system("cls");
    int r,c;
    for(r=1;r<=5;r++)
    {
        char ch='A';
        for(c=1;c<=r;c++)
        {
            cout<<ch<<" ";
            ch++;
        }
        cout<<endl;
    }
}
 
// #include<iostream>
// using namespace std;
// int main()
// {
//     int r,c;
//     for(r=1;r<=5;r++)
//     {
//         char ch='A'+r-1;
//         for(c=1;c<=r;c++)
//         {
//             cout<<ch<<" ";
//         }
//         cout<<endl;
//     }
// }   