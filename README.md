# ChauffeurUSGroupProjectv3

Problems found that need to be resolved still:

1. Link tags in react-router-dom are updating the url, but not the re-render.

2) Better validation checks before registering.
   a. match() need to be placed somewhere else, causing errors.

3. Must disable hot module in app.js for production, I believe webpack is fine, but if manual refresh, webpack will rebundle and page will update even though it shouldnt.

4. Skipped schema methods for validation, not needed, but wasnt able to successfully get password from schema undefined (I think there was no password to get anyways, I'll check at later date).

5. nodemon in package.json cancels the component auto refresh, node allows it to update auto without manual refresh.

Ignored files:
node_modules, dist (generates the webpack bundle.js)

**Homepage:**

![untitled](https://user-images.githubusercontent.com/12276056/44954791-49109e80-ae76-11e8-9e44-7ff6c5f9b557.png)

**Register:**

![untitled](https://user-images.githubusercontent.com/12276056/45071156-ebad6500-b0a2-11e8-9a01-142d25df0d4a.png)
