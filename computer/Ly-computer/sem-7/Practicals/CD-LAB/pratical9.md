---
sidebar_position: 10
---

# practical 9 (B5)

view full pdf or download it : [Download this document](static/B5.pdf)

## Code

```c

#include<stdio.h>
#include<stdlib.h>
#include<string.h>
int main (int argc, char **argv)
{
    int a, b, s, x, i, len, Q[100][100], initial, final;
    char str[100], c[2];
    printf("\nEnter total number of inputs: ");
    scanf("%d", &i);
    printf("\nEnter total number of states: ");
    scanf("%d", &s);
    printf("\nEnter initial state for DFA: ");
    scanf("%d", &initial);
    printf("\nEnter final state for DFA: ");
    scanf("%d", &final);
    printf("\n\n Initial State: {Q%d}", initial);
    printf("\n Final State: {Q%d}", final);
    printf("\n Set of Finite States: {");
    for (a = 0; a < s; a++)
    {
        printf("Q%d", a);
        if(a < s-1)
            printf(", ");
    }
    printf("}");
    printf("\n Set of Inputs : {");
    for(a = 0; a < i; a++)
    {
        printf("%d ",a);
        if(a < i-1)
            printf(", ");
    }
    printf("}\n\n");
    printf(" Enter the transition table INPUT:\n");
    printf("Transition-> state");
    for(a = 0; a < s; a++)
    {
        for(b = 0; b < i; b++)
        {
            printf("\n Q%d, %d -> ", a, b);
            scanf("%d", &Q[a][b]);
        }
    }
    do
    {
        printf("\nEnter the string to check: ");
        scanf("%s", str);
        len = strlen(str);
        c[1] = '\0';
        x = initial;
        printf("\n -> Q0");
        for(a = 0; a < len; a++)
        {
            c[0] = str[a];
            x = Q[x][atoi(c)];
            printf(" --%d--> Q%d", atoi(c), x);
        }
        if(x == final)
            printf("\n\n***[String Accepted for this grammar]***\n\n");
        else
            printf("\n\n###[String Not Accepted]###\n\n");
        printf("Do you want to check another string [Yes = 1 / No = 0]: ");
        scanf("%d", &a);
    }while(a);
    return 0;
}

```

<
![Uploading image.png…](https://user-images.githubusercontent.com/66414385/211070342-4a266ee2-250b-43d5-8e6f-46db2c6936b8.png)

