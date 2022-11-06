---
sidebar_position: 1
---

# Git & Github tuitorial

:::tip
Git and GitHub are two technologies that every developer should learn, irrespective of their field.
:::

* If you're a beginner developer, you might think that these two terms mean the same thing – but they're different.

* This tutorial will help you understand what Git and version control are, the basic Git commands you need to know, how you can use its features to boost your work efficiency, and how to extend these features using GitHub.

* This guide is beginner friendly, as the examples will be very easy to understand. It will also be a generalized tutorial so anyone can follow along no matter what your favorite programming language is.

* For our project, we'll make a to-do list written in a text (txt) file. You will see how we can use the features of Git to work on and create a final version of the list.

## prerequisites

In order to complete this tutorial, you'll need the following:

1. A command line interface.
2. A text editor of your choice (I will be using VS Code).
3. A [GitHub](https://github.com/) account.

## What is Git?

Git is a **version control system** which lets you track changes you make to your files over time.

:::note remember
With Git, you can **revert to various states** of your files (like a *time traveling machine*). You can also make a copy of your file, make changes to that copy, and then merge these changes to the original copy.
:::

## Real Life Example 
For example, you could be working on a website's landing page and discover that you do not like the navigation bar. But at the same time, you might not want to start altering its components because it might get worse.

With **Git**, you can **create an identical copy of that file and play around** with the navigation bar. Then, when you are satisfied with your changes, you can merge the copy to the original file.

:::tip Not only for developers
You are not limited to using Git just for source code files – you can also use it to keep track of **text files or even images.** This means that Git is not just for developers – anyone can find it helpful.
:::

## How to install Git

In order to use Git, you have to install it on your computer. To do this, you can download the latest version on the [official website](https://git-scm.com/downloads). You can download for your operating system from the options given.

## How to configure Git

* I will assume that at this point you have installed Git. To verify this, you can run this command on the command line: `git --version.` This shows you the current version installed on you PC.

* The next thing you'll need to do is to set your **username and email address.** Git will use this information to *identify* who made specific changes to files.
* To set your username, type and execute these commands: 

```bash
git config --global user.name "YOUR_USERNAME" 
git config --global user.email "YOUR_EMAIL"
```

Just make sure to replace "YOUR_USERNAME" and "YOUR_EMAIL" with the values you choose.

