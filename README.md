# Learn_And_Code
This is a repository for L&amp;C Assignments

# Coding Guidelines
 
## 1. Naming
- Use meaningful, readable, and searchable names.
- Classes and files → `UpperCamelCase`
- Methods, variables, parameters → `lowerCamelCase`
- Constants → `UPPER_SNAKE_CASE`
- Use consistent terminology across the codebase.
- Boolean variables should use prefixes like `is`, `has`, or `can`.
- Avoid ambiguous names such as `data`, `temp`, `obj`.

---

## 2. Functions
- Keep functions small and focused (≤ 20–25 lines).
- A function should perform one task only.
- Use clear, descriptive function names.
- Prefer fewer parameters; wrap many parameters in an object.
- Avoid more than 2–3 parameters.
- Follow the DRY principle.
- Follow Command–Query Separation.

---

## 3. Comments
- Prefer self-explanatory code over comments.
- Use comments for intent, warnings, and TODOs.
- Avoid redundant or outdated comments.
- Do not leave commented-out code in the codebase.

---

## 4. Formatting
 
### Vertical Formatting
- Separate logical sections with blank lines.
- Keep related code close together.
- Place higher-level methods before helper methods.
- End every file with a single newline.
 
### Horizontal Formatting
- Keep line length readable (≤ 100 characters).
- No space between method name and parentheses.
- Always use braces for `if`, `for`, and `while`.
- Use consistent indentation (2 spaces).
- Use single quotes for strings.
- Always use semicolons.

---

## 5. Classes
- One top-level class per file.
- Each class should have a single responsibility.
- Maintain high cohesion.
- Avoid God classes.
- Order members: constants → static fields → instance fields → constructors → public methods → private methods.

---

## 6. Type Safety (TypeScript)
- Avoid using `any` unless absolutely necessary.
- Define proper interfaces, types, and enums.
- Use strict typing to ensure compile-time safety.
- Prefer `readonly` where applicable.
- Use union types instead of hardcoded string values.

---

## 7. Objects and Data Structures
- Objects encapsulate data and behavior.
- Data structures expose data without behavior.
- Avoid mixing both patterns.

---

## 8. Design Principles
- Follow Single Responsibility Principle.
- Open for extension, closed for modification.
- Prefer small, focused interfaces.
- Depend on abstractions rather than implementations.
- Prefer composition over inheritance.

---

## 9. Error Handling
- Handle errors explicitly and consistently.
- Do not suppress or ignore errors.
- Provide meaningful and descriptive error messages.
- Validate inputs at system boundaries.
- Differentiate between user errors and system errors.

---

## 10. Avoid Bad Practices
- Avoid global variables wherever possible.
- Avoid magic numbers; use constants or enums.
- Avoid hardcoding configuration values.
- Remove unused variables and imports.
- Avoid unnecessary dependencies between modules.

---

## 11. Modular Design
- Prefer modular design over monolithic code.
- Break code into smaller, independent modules.
- Ensure low coupling and high cohesion.
- Separate concerns clearly (services, parsers, validators, etc.).

---

## 12. Constants and Enums
- Use constants for fixed values.
- Use enums for related groups of values.
- Avoid hardcoded strings and numbers in logic.

---

## 13. Testing and Maintainability
- Write code that is easy to test.
- Avoid tightly coupled code.
- Ensure important logic can be tested independently.

---

## 14. Refactoring
- Refactor code when it becomes difficult to understand.
- Continuously improve code quality.
- Follow the Boy Scout Rule: leave code better than you found it.

---

## 15. PR Description
- Problem statement should be mentioned in the description.
- Every PR should include explanation of the solution.
- Keep PRs focused on a single feature or fix.
