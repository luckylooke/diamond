### <<< !!!IMPORTANT NOTICE!!! >>>
This project is for now stopped, I decided to develope separate lib for open/closed principle called [middle](https://github.com/luckylooke/middle). But I am not deleting this yet, because there is possible integration of multiple libs into one package, into diamond. We will see ;)



# Diamond.js
Library for adding support of [SOLID](https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)) principles to any project, for now it just have support of ["open-closed"](https://en.wikipedia.org/wiki/Open/closed_principle) principle.

I am using it in new drag&drop library called [dragon.js](https://github.com/luckylooke/dragon)

## Use case:
Let say you have some event oriented logic in your project/library and you want users to be able to enhance/intercept the logic. So you can allow to run a stack of procedures before your logic (results of procedures can affect your logic) and stack of procedures after the logic. This library is for creating such stacks of procedures and allow you to mix sync and async procedures. It allows also to break the stack if result is certain value.

### Example:
== coming soon ==
