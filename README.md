# React Testing Library

## Moving away from Enzyme

- not maintained by Airbnb anymore (still no adapter for React 17)
- Enzyme API is huge
- encourages testing implementation detail (test shouldn't change if implementation change)

## Snapshot Testing: avoid!

- are only useful to check that something change (Remember "test shouldn't change if implementation change")
- changing a `em` for a `b`? Update that snapshot good sir
- let's be honest, we barely read the content of the snapshots...

## RTL - Why

> The more your tests resemble the way your software is used, the more confidence they can give you. - Kent C. Dodds

- Write Maintainable test
  - Avoid implementation detail
- Develop with confidence
- Accessible by default

## RTL - How

- No implementation details
- Querying for DOM nodes similarly to how users would do it
- Small API

https://testing-library.com/docs/guiding-principles

1. If it relates to rendering components, then it should deal with DOM nodes rather than component instances, and it should not encourage dealing with component instances.
2. It should be generally useful for testing the application components in the way the user would use it. We are making some trade-offs here because we're using a computer and often a simulated browser environment, but in general, utilities should encourage tests that use the components the way they're intended to be used.
3. Utility implementations and APIs should be simple and flexible.

## RTL - Avoid

1. Internal state of a component
2. Internal methods of a component
3. Lifecycle methods of a component
4. Child components

## Query nodes

Find elements on the page
https://testing-library.com/docs/queries/about/#priority

1. Queries Accessible to Everyone
  1. getByRole
  2. getByLabelText
  3. getByPlaceholderText
  4. getByText
  5. getByDisplayValue
2. Semantic Queries
  1. getByAltText
  2. getByTitle
3. Test IDs
  1. getByTestId

## Type of Query

- getBy* return the element or throws when not found or more than 1 match
- queryBy* return the first element matching or null if not found
- findBy* return a promise that resolve with the element or reject after 1sec  or more than 1 found

getAllBy*, queryAllBy* and findAllBy* for multiple element

## User interaction

userEvent is recommended because it is a better simulation of users interacting with a browser, fireEvent exist
https://testing-library.com/docs/ecosystem-user-event/

```js
userEvent.click(screen.getByRole('button', {name: 'sub'}))

userEvent.type(screen.getByRole('textbox'), 'Have you tried to turn it on and off again?')
```

## Jest DOM FTW

https://github.com/testing-library/jest-dom

```js
expect(getByText('Visible Example')).toBeVisible()

expect(getByTestId('ancestor')).toContainElement(getByTestId('descendant'))

expect(deleteButton).toHaveClass('btn-danger btn')

expect(getByRole('form')).toHaveFormValues({
  username: 'johncena',
  rememberMe: true,
})
```
