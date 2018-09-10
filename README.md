# ChauffeurUSGroupProjectv3

(Finished-Discontinued, uninterested to making it a full website);

---

Remaining Issues:

- Better validation checks before registering.

- Removed match() from validation check, need to be placed somewhere else, caused errors.

- Needed to update login to display errors when not successful.

- Needed to update Navbar rerender once props were created.

- Didn't add google maps cause didn't want to use google billing to get api key.

---

Notes:

- nodemon in package.json cancels the component auto refresh, node allows it to update auto without manual refresh.

* Must disable hot module in app.js for production, I believe webpack is fine, but if manual refresh, webpack will rebundle and page will update even though it shouldnt.

- Use render function to pass props into Router components.

---

Ignored files:

- node_modules, dist (generates the webpack bundle.js), config.json (password container)

---

**Homepage:**

![untitled](https://user-images.githubusercontent.com/12276056/44954791-49109e80-ae76-11e8-9e44-7ff6c5f9b557.png)

**Register:**

![untitled](https://user-images.githubusercontent.com/12276056/45071156-ebad6500-b0a2-11e8-9a01-142d25df0d4a.png)

**Register:**

![untitled](https://user-images.githubusercontent.com/12276056/45217452-17cb1080-b272-11e8-9f00-a1689e4601cd.png)
