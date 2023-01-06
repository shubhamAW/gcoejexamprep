---
sidebar_position: 6
---

# practical 5 (A5)

view full pdf or download it : [Download this document](static/A5.pdf)

## Code

```c

#include <stdio.h>
#include<string.h>
int numOfProd;
char prods[10][10],f[10];
int m=0;
void first(char a);
void follow(char a);
int main()
{
    printf("\nEnter the number of Productions :- ");
    scanf("%d",&numOfProd);
    printf("\nEnter the Productions :- ");
    for(int i=0;i<numOfProd;i++)
        scanf("%s",prods[i]);
    int choice;
    char choi;
    do
    {
    m = 0;
    printf("\nEnter the element to find First and Follow :- ");
    getchar();
    scanf("%c",&choi);
    first(choi);
    printf("First(%c)={",choi);
    for(int i=0;i<m;i++)
    printf("%c",f[i]);
    printf("}\n");
    strcpy(f," ");
    m = 0;
    follow(choi);
    printf("Follow(%c)={",choi);
    for(int i=0;i<m;i++)
    printf("%c",f[i]);
    printf("}\n");
    printf("Do you want to continue?(1/0)");
    scanf("%d",&choice);
    }
    while(choice==1);
    return 0;
}
void first(char a)
{
    if((a>='a'&&a<='z')||a=='$')
    {
        f[m++] = a;
    }
    for(int k=0;k<numOfProd;k++)
    {
        if(prods[k][0]==a)
        {
            if(prods[k][2]=='$')
                follow(prods[k][0]);
            else if((prods[k][2]>='a'&&prods[k][2]<='z')||prods[k][2]=='$')
                f[m++] = prods[k][2];
            else
                first(prods[k][2]);
        }
    }
}
void follow(char a)
{
    if (prods[0][0] == a)
        f[m++] = '$';
    for (int i = 0; i < numOfProd; i++) 
    {
        for (int j = 2; j < strlen(prods[i]); j++) 
        {
            if (prods[i][j] == a) 
            {
                if (prods[i][j + 1] != '\0')
                    first(prods[i][j + 1]);
                if (prods[i][j + 1] == '\0' && a != prods[i][0])
                    follow(prods[i][0]);
            }
        }
    }
}

```

## output


![Uploading image.png…](https://user-images.githubusercontent.com/66414385/211071826-f625e01c-7302-4a70-9899-1875b1ddbfe6.png)

