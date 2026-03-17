# Learn_And_Code
This is a repository for L&amp;C Assignments

# TypeScript Coding Guidelines

These guidelines define the standards for writing clean, maintainable, and scalable TypeScript code.  
They are based on Clean Code principles and industry best practices.

---

## 1. Naming Conventions

- Use `camelCase` for variables, functions, and parameters.
- Use `PascalCase` for classes, interfaces, types, and enums.
- Use `UPPER_SNAKE_CASE` for constants.
- Use meaningful, intention-revealing names.
- Boolean names should use prefixes like `is`, `has`, or `can`.
- Avoid single-letter names except for loop indices.
- Avoid ambiguous names such as `data`, `obj`, `temp`.

---

## 2. Type Safety

- Avoid using `any` unless absolutely necessary.
- Define proper interfaces, types, and enums.
- Use strict typing to ensure compile-time safety.
- Prefer `readonly` properties where applicable.
- Use union types instead of hardcoded string values.

---

## 3. Functions

- Functions should be small and focused (≤ 20–25 lines).
- A function should perform only one responsibility.
- Avoid functions with more than 2–3 parameters.
- Use parameter objects when more parameters are required.
- Follow Command–Query Separation.
- Ensure functions are easy to read and test.

---

## 4. Classes and Modules

- Follow the Single Responsibility Principle.
- Keep classes small and focused.
- Avoid God classes and large monolithic structures.
- Prefer modular design with clear separation of concerns.
- Organize code into logical modules.

---

## 5. DRY Principle

- Avoid duplication of logic across the codebase.
- Extract reusable functionality into common modules.
- Maintain a single source of truth for shared logic.

---

## 6. Error Handling

- Handle errors explicitly and consistently.
- Do not suppress or ignore errors.
- Provide meaningful and descriptive error messages.
- Validate inputs at system boundaries.
- Differentiate between user errors and system errors.

---

## 7. Formatting and Style

- Use consistent formatting throughout the codebase.
- Use 2 spaces for indentation.
- Keep line length within 100 characters.
- Use single quotes for strings.
- Always use semicolons.
- Maintain proper spacing between logical blocks.
- Keep files reasonably small and readable.

---

## 8. Avoid Bad Practices

- Avoid global variables wherever possible.
- Avoid magic numbers; use constants or enums.
- Avoid hardcoding configuration values.
- Do not leave commented-out code in the codebase.
- Remove unused variables and imports.

---

## 9. Interfaces and Abstraction

- Prefer interfaces and abstractions over concrete implementations.
- Follow Dependency Inversion Principle.
- Design code to depend on abstractions rather than implementations.
- Avoid exposing internal data structures directly.

---

## 10. Modular Design

- Break code into smaller, independent modules.
- Ensure low coupling between modules.
- Ensure high cohesion within modules.
- Avoid unnecessary dependencies across modules.

---

## 11. Comments

- Write comments only when necessary.
- Focus comments on intent and reasoning.
- Avoid redundant or obvious comments.
- Do not keep outdated or misleading comments.

---

## 12. Constants and Enums

- Use constants for fixed values.
- Use enums for related groups of values.
- Avoid hardcoded strings and numbers in logic.

---

## 13. Testing and Maintainability

- Write code that is easy to test.
- Ensure critical logic is covered by tests.
- Avoid tightly coupled code.

---

## 14. Refactoring

- Refactor code when it becomes difficult to understand.
- Continuously improve code quality.
- Follow the Boy Scout Rule.

---

## 15. General Principles

- Readability is more important than conciseness.
- Write code for humans, not just for machines.
- Keep logic simple and avoid over-engineering.
- Ensure code compiles without warnings or errors.

---
