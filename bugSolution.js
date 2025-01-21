The issue is resolved by explicitly including the dynamic classes in the `tailwind.config.js` file's `purge` option or using the `@apply` directive for styles that are not easily determined at build time. Here's how you might modify the `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // Add this line for explicit class inclusion
    './pages/dynamic.js' //The path of the relevant file
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Alternatively, refactor the component to use `@apply`:
```jsx
// Previous dynamic component
<div className="bg-gray-100 p-4">
  {items.map(item => (
    <div key={item.id} className="text-blue-500">{item.text}</div> 
  ))}
</div>

//Refactored component
<div className="bg-gray-100 p-4">
  {items.map(item => (
    <div key={item.id} class="@apply text-blue-500">{item.text}</div> 
  ))}
</div>
```