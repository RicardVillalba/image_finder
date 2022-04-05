import { useState } from "react";
import { Formik, Form, Field } from "formik";
import "./components/Header.css";
import "./components/Card.css";
import "./components/Article.css";
const App = () => {
  const [images, setImages] = useState([]);
  const open = (url) => window.open(url);
  console.log({ images });
  return (
    <div>
      <header>
        <Formik
          initialValues={{ search: "" }}
          onSubmit={async (values) => {
            const response = await fetch(
              `https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`,
              {
                headers: {
                  Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`,
                },
              }
            );
            const data = await response.json();
            setImages(data.results);
          }}
        >
          <Form>
            <Field name="search"></Field>
          </Form>
        </Formik>
      </header>
      <div className="container">
        <div className="center">
          {images.map((image) => (
            <article
              key={image.id}
              onClick={() => {
                open(image.links.html);
              }}
            >
              <img src={image.urls.regular} alt="foto" />
              <p>{[image.description, image.alt_description].join(" - ")}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
