  # JavaScript Fundamentals Q&A

### Q1. What does it mean for JavaScript to be a high-level language?
JavaScript is high-level because it is easy to read/write and hides the underlying complex computer science-based operations (such as manual memory management and low-level CPU instruction handling).

---

### Q2. Is JavaScript an interpreted or compiled language?
JavaScript is primarily an interpreted language, though modern implementations employ Just-In-Time (JIT) compilation to improve performance by compiling code into machine language at runtime.

---

### Q3. What are the major JavaScript engines used in popular web browsers?
* **Google Chrome:** V8
* **Mozilla Firefox:** SpiderMonkey
* **Apple Safari:** JavaScriptCore

---

### Q4. What is dynamic typing in JavaScript?
Dynamic typing allows a single variable to hold values of different data types (e.g., number, string, boolean) at various points in time without explicitly declaring the type.

---

### Q5. What is the relationship between ECMAScript and JavaScript?
ECMAScript is the standardized specification for JavaScript. JavaScript is the primary implementation of this standard.

---

### Q6. What is the difference between static and dynamic websites?
* **Static Websites:** Display fixed content that stays the same for every user (e.g., a personal portfolio website).
* **Dynamic Websites:** Allow content alteration based on user interaction, data updates, or context (e.g., Amazon).

---

### Q7. What role does JavaScript play in web development?
JavaScript adds interactivity to web pages and facilitates Document Object Model (DOM) and Event manipulation.

---

### Q8. What are the main areas where JavaScript can be utilized?
* **Backend:** Node.js
* **Mobile App Development:** React Native
* **Desktop App Development:** Electron
* **AI / Machine Learning:** TensorFlow.js

---

### Q9. What are the different ways to include JavaScript in a project, and why is external scripting preferred?
JavaScript can be included in three ways:
1. **Inline:** Directly inside HTML element tags.
2. **Embedded:** Inside `<script>` tags within the HTML file.
3. **External:** In a separate `.js` file linked via the `src` attribute.

*External files are preferred because they promote clean, reusable, and organized code.*

---

### Q10. What are primitive output data types in JavaScript, and what do they demonstrate?
Common primitive output types include `number`, `string`, and `boolean`. The ability to reassign variables to different data types exemplifies JavaScript’s dynamic typing nature.

---

### Q11. How do you create a button that triggers a welcome popup?

```html
<button onclick="alert('Welcome to JavaScript!')">Click Me</button>
