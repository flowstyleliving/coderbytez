/*
Identifiers:

\d = any number
\D = anything but a number
\s = space
\S = anything but a space
\w = any character
\W = anything but a character
. = any character except for new line
\b = word1 word2 word3 //matches space after any word
\. = .


Modifiers:

\d{1,5} = digit 1-5 in length
+ = matches 1 or more
? = matches 0 or 1
* = 0 or more
$ match end of a string
^ = match start of a string
| = or
[] = variants
{x} = this amount of preceding code

White space characters:
\n = new line
\s = space
\tab = tab
\e = escape white space
\r = carriage return
\f = form feed

escape required:
$ . () [] \ ^ + ? |

 */
//
// 123 Main St.
//
// \d{1,5}\s\w+\s\w+\.
//
// \$\d*\.\d{2}
// $100
//
// [a-z] all lowercase letters
// [A-Z] capital
// [A-Za-z0-9]
