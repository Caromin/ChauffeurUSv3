# ChauffeurUSGroupProjectv3

(Finished, uninterested to making it a full website);

---

Problems found that need to be resolved still:

1. ~~Link tags in react-router-dom are updating the url, but not the re-render.~~ Solved.

   How: Switch Routing was causing only one component to render and blocking nav links.

---

Remaining Issues:

- Better validation checks before registering.

- Removed match() from validation check, need to be placed somewhere else, caused errors.

- Need to update login to display errors when not successful.

---

Notes:

- nodemon in package.json cancels the component auto refresh, node allows it to update auto without manual refresh.

* Must disable hot module in app.js for production, I believe webpack is fine, but if manual refresh, webpack will rebundle and page will update even though it shouldnt.

- Use render function to pass props into Router components.

---

Ignored files:

- node_modules, dist (generates the webpack bundle.js)

---

**Homepage:**

![untitled](https://user-images.githubusercontent.com/12276056/44954791-49109e80-ae76-11e8-9e44-7ff6c5f9b557.png)

**Register:**

![untitled](https://user-images.githubusercontent.com/12276056/45071156-ebad6500-b0a2-11e8-9a01-142d25df0d4a.png)

**Register:**

![untitled](https://user-images.githubusercontent.com/12276056/45217452-17cb1080-b272-11e8-9f00-a1689e4601cd.png)
