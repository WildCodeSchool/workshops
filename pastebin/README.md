# Pastebin

## Goal

Block the submit if the form is empty and display the created link.

## To do

0. Transform the component into a **class**
1. Listen the submit event of the form ([help](https://reactjs.org/docs/forms.html))
2. Prevent the refresh of the page with [PreventDefault()](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) ([help](https://reactjs.org/docs/handling-events.html))
3. Keep the value of `filename`, `expiration` & `code` in the state
4. On submit, check if any property of the state (`filename`, `expiration` & `code`) is empty, if not submit the form
5. If one element is empty, display a message
6. Replace `~~~~` by the generated link given by the API



On this exercise, you can use [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) or [Axios](https://github.com/axios/axios).

You can find the API documentation here: https://pastebin.com/api