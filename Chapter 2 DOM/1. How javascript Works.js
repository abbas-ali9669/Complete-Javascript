// In this topic we will leaen about new topic of javascript.
// That how javascript works.
// This will be completely thoereticall lecture.

// How Javacript Works.
// There are two main concepts, which is used by the javascript or javascript code get executed according to these tow concepts.

// 1. Compilation Process.
// 2. Code Execution.

// 1. Compilation Process.
    // In the compilation phase all the code get examined by the compiler to check where  errors can occur, And scopes of variable.

// Compilation Phases.
    // There are three main compilation phases in the javascript.
    // 1. Tokenizing/Lexing
    // 2. Parsing
    // 3. Code Generation

    // 1. Tokenization/Lexing
        // In the to Tokenization/Lexing phase, the javascript divided into the small chunks
    // 2. Parsing.
        // In the Parsing, With the use of chunks, javascript creates AST (Abstract Syntax Tree)
    // 3. Code Generation
        // In the Code generation, With help of AST, the executable code generates.

// Why Compilation ?
// In the official Ecmascript Documentation the compilation is important for checking
// 1. Early Error Checking
// 2. Determining Appropriate Scope of Variable.

// 1. Early Error Checking.
    // In the Early Error Checking, the javascript compile all the code and examine the code in early stage, to check where the error occurs before executing the code.
// 2. Determining Appropriate Scope of Variable.
    // In the Determining Appropriate Scope of Variable the javascript checks each and every variable, that what is the scope of variable. Whether the variable is declared in the global scope or local scope, inside the function or outside the function

console.log(this);
console.log(window);
console.log(firstName);
var firstName = "Abbas";

// For an example, if we make an error of our declared variable. Then the javascript will detect the error first and the after executes all the code.
// var firstName = ."Abbas";


// See the file no.2, for Code Execution.